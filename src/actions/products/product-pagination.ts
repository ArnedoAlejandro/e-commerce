"use server";

import { Gender } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
interface PaginationOption {
  page?: number;
  take?: number;
  gender?: Gender;
  name?: string;
}

export const getPaginatedProductWithImages = async ({
  page = 1,
  take = 12,
  gender,
  name = "",
}: PaginationOption) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    const whereCondition: any = {
      ...(gender && { gender }),
      ...(name && { title: { contains: name, mode: "insensitive" } }),
    };

    const products = await prisma.product.findMany({
      take,
      skip: (page - 1) * take,
      include: {
        ProductImage: {
          take: 2,
          select: { url: true },
        },
      },
      where: whereCondition,
    });

    const totalCount = await prisma.product.count({ where: whereCondition });

    return {
      currentPage: page,
      totalPage: Math.ceil(totalCount / take),
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
