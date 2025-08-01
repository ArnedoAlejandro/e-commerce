"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return {
      ok: true,
      user: user,
      message: "Usuario creado con exito",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No se puede crear el usuario",
    };
  }
};
