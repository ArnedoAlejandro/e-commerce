"use server";

import { auth } from "@/auth.config";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const changeUserRole = async (userId: string, role: string) => {
  const session = await auth();

  if (session?.user.role !== "admin") {
    return {
      ok: false,
      message: "No tienes permiso para realizar esta accion",
    };
  }

  try {
    const newRole = role === "admin" ? "admin" : "user";

    const user = await prisma.user.update({
      where: { id: userId },
      data: { role: newRole },
    });

    revalidatePath("/admin/users");
  } catch (error) {
    console.log(error);
    return { ok: false, message: "Error al cambiar el rol del usuario" };
  }
};
