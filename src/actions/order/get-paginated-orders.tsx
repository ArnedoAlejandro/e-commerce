"use server";

import { auth } from "@/auth.config";
import { prisma } from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
}

export const getPaginatedOrders = async ({ page = 1, take = 10 }: PaginationOptions = {}) => {
  const session = await auth();

  if (session?.user.role !== "admin") {
    return {
      ok: false,
      message: "No tienes permiso para realizar esta acción",
    };
  }

  if (isNaN(page) || page < 1) page = 1;

  const [orders, totalCount] = await Promise.all([
    prisma.order.findMany({
      skip: (page - 1) * take,
      take,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        OrderAddress: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    }),
    prisma.order.count(),
  ]);

  const totalPages = Math.ceil(totalCount / take);

  return {
    ok: true,
    orders,
    totalPages,
    currentPage: page,
  };
};