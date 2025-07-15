"use server";

import { prisma } from "@/lib/prisma";
import { Gender, Product, Size } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

// Config Cloudinary con variables de entorno
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

// Zod schema para validar los datos del producto
const productSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  title: z.string().min(3).max(255),
  slug: z.string().min(3).max(255),
  description: z.string(),
  price: z.coerce
    .number()
    .min(0)
    .transform((val) => Number(val.toFixed(2))),
  inStock: z.coerce
    .number()
    .min(0)
    .transform((val) => Number(val.toFixed(0))),
  categoryId: z.string().uuid(),
  sizes: z.coerce.string().transform((val) => val.split(",")),
  tags: z.string(),
  gender: z.nativeEnum(Gender),
});

// Función para convertir buffer en stream
const bufferToStream = (buffer: Buffer) => {
  return new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    },
  });
};

// Subir imágenes a Cloudinary
const uploadImages = async (images: File[]) => {
  try {
    const uploadedUrls: string[] = [];

    for (const image of images) {
      const buffer = Buffer.from(await image.arrayBuffer());

      const result: string | null = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "products" },
          (error, result) => {
            if (error) {
              console.error("Error al subir a Cloudinary:", error);
              return reject(null);
            }
            resolve(result?.secure_url ?? null);
          }
        );

        bufferToStream(buffer).pipe(stream);
      });

      if (result) {
        uploadedUrls.push(result);
      }
    }

    return uploadedUrls;
  } catch (error) {
    console.error("Error general en uploadImages:", error);
    return null;
  }
};

// Crear o actualizar un producto
export const createUpdateProduct = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const productParsed = productSchema.safeParse(data);

  if (!productParsed.success) {
    console.log(productParsed.error);
    return { ok: false };
  }

  const product = productParsed.data;
  product.slug = product.slug.toLowerCase().replace(/ /g, "-").trim();
  const { id, ...rest } = product;

  try {
    let savedProduct: Product;

    // Validar si ya existe un producto con el mismo slug (solo en modo creación)
    if (!id || id === "") {
      const existing = await prisma.product.findUnique({
        where: { slug: product.slug },
      });
      if (existing) {
        return {
          ok: false,
          message: "Ya existe un producto con ese slug",
        };
      }
    }

    // Crear o actualizar producto
    await prisma.$transaction(async (tx) => {
      const tagsArray = rest.tags
        .split(",")
        .map((tag) => tag.trim().toLowerCase());

      if (id && typeof id === "string" && id.length > 0) {
        savedProduct = await tx.product.update({
          where: { id },
          data: {
            ...rest,
            sizes: { set: rest.sizes as Size[] },
            tags: { set: tagsArray },
          },
        });
      } else {
        savedProduct = await tx.product.create({
          data: {
            ...rest,
            sizes: { set: rest.sizes as Size[] },
            tags: { set: tagsArray },
          },
        });
      }
    });

    // Subir imágenes luego del producto creado/actualizado
    const images = formData.getAll("images") as File[];
    if (images?.length) {
      const uploaded = await uploadImages(images);

      if (!uploaded) {
        console.error("Error al subir imágenes");
        return { ok: false };
      }

      await prisma.productImage.createMany({
        data: uploaded.map((url) => ({
          url,
          productId: savedProduct!.id,
        })),
      });
    }

    // Revalidar rutas
    revalidatePath("/admin/products");
    revalidatePath(`/admin/products/${product.slug}`);
    revalidatePath(`/products/${product.slug}`);

    return {
      ok: true,
      product: savedProduct!,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error al crear/actualizar el producto",
    };
  }
};

// TODO: CODIGO QUE NO FUNCIONA
// "use server";
// import { prisma } from "@/lib/prisma";
// import { Gender, Product, Size } from "@prisma/client";
// import { revalidatePath } from "next/cache";
// import { z } from "zod";
// import { v2 as cloudinary } from "cloudinary";
// cloudinary.config(process.env.CLOUDINARY_URL ?? "");

// const productSchema = z.object({
//   id: z.string().uuid().optional().nullable(),
//   title: z.string().min(3).max(255),
//   slug: z.string().min(3).max(255),
//   description: z.string(),
//   price: z.coerce
//     .number()
//     .min(0)
//     .transform((val) => Number(val.toFixed(2))),
//   inStock: z.coerce
//     .number()
//     .min(0)
//     .transform((val) => Number(val.toFixed(0))),
//   categoryId: z.string().uuid(),
//   sizes: z.coerce.string().transform((val) => val.split(",")),
//   tags: z.string(),
//   gender: z.nativeEnum(Gender),
// });

// export const createUpdateProduct = async (formData: FormData) => {
//   const data = Object.fromEntries(formData);

//   const productParsed = productSchema.safeParse(data);
//   if (!productParsed.success) {
//     console.log(productParsed.error);
//     return { ok: false };
//   }

//   const product = productParsed.data;
//   product.slug = product.slug.toLowerCase().replace(/ /g, "-").trim();

//   const { id, ...rest } = product;

//   try {
//     const result = await prisma.$transaction(async (tx) => {
//       const tagsArray = rest.tags
//         .split(",")
//         .map((tag) => tag.trim().toLowerCase());

//       if (id) {
//         const updatedProduct = await tx.product.update({
//           where: { id },
//           data: {
//             ...rest,
//             sizes: { set: rest.sizes as Size[] },
//             tags: { set: tagsArray },
//           },
//         });

//         return updatedProduct;
//       } else {
//         const newProduct = await tx.product.create({
//           data: {
//             ...rest,
//             sizes: { set: rest.sizes as Size[] },
//             tags: { set: tagsArray },
//           },
//         });

//         // if (formData.getAll("images")) {
//         //   const images = await uploadImages(
//         //     formData.getAll("images") as File[]
//         //   );
//         //   console.log(images);

//         //   // if(!images){
//         //   //   throw new Error("Error al subir las imagenes")
//         //   // }
//         //   // await prisma.productImage.createMany({
//         //   //   data: images.map((image) => ({
//         //   //     url: image,
//         //   //     productId: newProduct.id,
//         //   //   })),
//         //   // });
//         // }

//         return newProduct;
//       }
//     });

//     // Revalidar rutas
//     revalidatePath("/admin/products");
//     revalidatePath(`/admin/products/${product.slug}`);
//     revalidatePath(`/products/${product.slug}`);

//     return {
//       ok: true,
//       product: result,
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       ok: false,
//       message: "Error al crear/actualizar el producto",
//     };
//   }
// };

// const uploadImages = async (images: File[]) => {
//   try {
//     const uploadPromises = images.map(async (image) => {
//       try {
//         const buffer = await image.arrayBuffer();
//         const base64Image = Buffer.from(buffer).toString("base64");

//         return cloudinary.uploader
//           .upload(`data:image/png;base64,${base64Image}`)
//           .then((r) => r.secure_url);
//         //  result.secure_url;
//       } catch (error) {
//         console.log("Error al subir imagen:", error);
//         return null;
//       }
//     });

//     const uploadedImages = await Promise.all(uploadPromises);

//     // Opcional: filtrar los que fallaron
//     return uploadedImages;
//   } catch (error) {
//     console.log("Error general en uploadImages:", error);
//     return null;
//   }
// };
