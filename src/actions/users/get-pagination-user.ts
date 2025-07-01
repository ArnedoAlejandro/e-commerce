"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth.config";
import { User } from "@/interface/user.interface";

interface PaginationResult {
  ok: boolean;
  users: User[];
  currentPage: number;
  totalPages: number;
}

export const getPaginatedUser = async (
  page: number = 1,
  take: number = 12
): Promise<PaginationResult> => {
  const session = await auth();

  if (session?.user?.role !== "admin") {
    return {
      ok: false,
      users: [],
      currentPage: 1,
      totalPages: 1,
    };
  }

  const skip = (page - 1) * take;

  try {
    const [users, totalUsers] = await Promise.all([
      prisma.user.findMany({
        take,
        skip,
        orderBy: {
          name: "desc", // Orden más útil en mantenimientos
        },
      }),
      prisma.user.count(),
    ]);

    const totalPages = Math.ceil(totalUsers / take);

    return {
      ok: true,
      users,
      currentPage: page,
      totalPages,
    };
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return {
      ok: false,
      users: [],
      currentPage: 1,
      totalPages: 1,
    };
  }
};
