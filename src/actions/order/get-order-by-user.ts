"use server";

import { auth } from "@/auth.config";
import { prisma } from "@/lib/prisma";

export const getOrderByUser = async () => {
  const session = await auth();

  if (!session?.user?.id)
    return {
      ok: false,
      message: "Debe estar autenticado para realizar esta accion",
    };

  const orders = await prisma.order.findMany({
    where: { userId: session.user.id },
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
  };
};
