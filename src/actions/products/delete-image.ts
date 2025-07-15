"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";

// Asegurate que esté configurado correctamente
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const deleteProductImage = async (imageId: number, imageUrl: string) => {
  if (!imageUrl.startsWith("http")) {
    return {
      ok: false,
      msg: "No se pueden eliminar imágenes locales",
    };
  }

  const imageName = imageUrl.split("/").pop()?.split(".")[0];

  try {
    await cloudinary.uploader.destroy(imageName!);

    const deletedImage = await prisma.productImage.delete({
      where: { id: imageId },
      select: {
        product: {
          select: {
            slug: true,
          },
        },
      },
    });

    revalidatePath(`/admin/products`);
    revalidatePath(`/admin/products/${deletedImage.product.slug}`);
    revalidatePath(`/product/${deletedImage.product.slug}`);

    return {
      ok: true,
      msg: "Imagen eliminada correctamente",
    };
  } catch (error) {
    console.log("Error al eliminar la imagen:", error);
    return {
      ok: false,
      msg: "Error al eliminar la imagen",
    };
  }
};
