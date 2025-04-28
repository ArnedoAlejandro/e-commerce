"use server";

import { Gender } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

interface PaginationOption {
  page?: number;
  take?: number;
  gender?: Gender;
}

// Obtener productos paginados
export const getPaginatedProductWithImages = async ({
  page = 1,
  take = 12,
  gender,
}: PaginationOption) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      where: {
        gender: gender,
      },
    });

    // Obtener el total de paginas
    const totalCount = await prisma.product.count({
      where: {
        gender: gender,
      },
    });

    const totalPage = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPage: totalPage,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los productos");
  }
};
