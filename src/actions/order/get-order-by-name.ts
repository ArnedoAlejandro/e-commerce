"use server";

import { auth } from "@/auth.config";
import { prisma } from "@/lib/prisma";

export const getOrdersByName = async (name: string) => {
  const session = await auth();

  if (session?.user.role !== "admin") {
    return {
      ok: false,
      message: "No autorizado",
    };
  }

  const orders = await prisma.order.findMany({
    where: {
      OrderAddress: {
        OR: [
          { firstName: { contains: name, mode: "insensitive" } },
          { lastName: { contains: name, mode: "insensitive" } },
        ],
      },
    },
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
  });

  return {
    ok: true,
    orders,
    totalPages: 1,
  };
};
