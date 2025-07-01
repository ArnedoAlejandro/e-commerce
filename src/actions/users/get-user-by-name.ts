"use server";

import { prisma } from "@/lib/prisma"; // asegurate de tener esto bien importado

export const getUserByName = async (name: string) => {
  try {
    if (!name || name.trim().length === 0) {
      return {
        ok: false,
        message: "Nombre vacío",
      };
    }

    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive", // hace la búsqueda sin importar mayúsculas
        },
      },
    });

    return {
      ok: true,
      users,
      totalPages: 1,
    };
  } catch (error) {
    console.error("[getUserByName]", error);
    return {
      ok: false,
      message: "Error al buscar usuarios",
    };
  }
};
