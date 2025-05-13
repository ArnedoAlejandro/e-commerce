"use server";

import { AuthError } from "next-auth";
import { signIn } from "next-auth/react";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
): Promise<string | undefined> {
  try {
    const credentials = Object.fromEntries(formData);

    await signIn("credentials", {
      ...credentials,
      redirect: false,
    });

    return "Succes";
  } catch (error) {
    if (error instanceof AuthError) {
      const authError = error as AuthError & { type?: string };

      if (authError.type === "CredentialsSignin") {
        return "Credenciales inválidas";
      }

      return "Error desconocido";
    }
    throw error;
  }
}

export const login = async (email: string, password: string) => {
  try {
    await signIn("credentials", { email, password });
    return { ok: true };
  } catch (error) {
    console.log(error);
    return { ok: false, message: "Error de autenticación" };
  }
};
