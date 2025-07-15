"use server";
import { prisma } from "@/lib/prisma";
import { Gender, Product, Size } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

    // Paso 1: Crear o actualizar el producto dentro de la transacción
    await prisma.$transaction(async (tx) => {
      const tagsArray = rest.tags
        .split(",")
        .map((tag) => tag.trim().toLowerCase());

      if (id) {
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

    // Paso 2: Subir imágenes (fuera de la transacción)
    const images = formData.getAll("images") as File[];
    if (images?.length) {
      const uploaded = await uploadImages(images);

      if (!uploaded) {
        console.error("Error al subir imágenes");
        return { ok: false };
      }

      // Paso 3: Guardar imágenes en la DB
      await prisma.productImage.createMany({
        data: uploaded.map((url) => ({
          url,
          productId: savedProduct.id,
        })),
      });
    }

    // Revalidar rutas
    revalidatePath("/admin/products");
    revalidatePath(`/admin/products/${product.slug}`);
    revalidatePath(`/products/${product.slug}`);

    return {
      ok: true,
      product: savedProduct,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error al crear/actualizar el producto",
    };
  }
};

const uploadImages = async (images: File[]) => {
  try {
    const uploadPromises = images.map(async (image) => {
      try {
        const buffer = await image.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString("base64");

        return cloudinary.uploader
          .upload(`data:image/png;base64,${base64Image}`)
          .then((r) => r.secure_url);
        //  result.secure_url;
      } catch (error) {
        console.log("Error al subir imagen:", error);
        return null;
      }
    });

    const uploadedImages = await Promise.all(uploadPromises);

    // Opcional: filtrar los que fallaron
    return uploadedImages;
  } catch (error) {
    console.log("Error general en uploadImages:", error);
    return null;
  }
};
