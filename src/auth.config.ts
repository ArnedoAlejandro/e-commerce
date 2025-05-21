import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { prisma } from "./lib/prisma";
import bcrypt from "bcryptjs";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },
  callbacks: {
    //   authorized({ auth, request: { nextUrl } }) {
    //     console.log({ auth, nextUrl });
    //     const isLoggedIn = !!auth?.user;
    //     const isOnDashboardPage = nextUrl.pathname === "/dashboard";
    //     if (isLoggedIn && isOnDashboardPage) {
    //       return true;
    //     }
    //     return true;
    //   },
    jwt({ token, user }) {
      if (user) {
        token.data = user;
      }
      return token;
    },
    session({ session, token, user }) {
      session.user = token.data as any;

      return session;
    },
  },

  providers: [
    Credentials({
      async authorize(credentials) {
        console.log("→ [authorize] Credentials recibidas:", credentials);

        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(5) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          console.log(
            "❌ [authorize] Falló la validación con Zod",
            parsedCredentials.error
          );
          return null;
        }

        const { email, password } = parsedCredentials.data;
        console.log("→ [authorize] Validado:", email, password);

        const user = await prisma.user.findUnique({
          where: { email: email.toLowerCase() },
        });

        if (!user) {
          return null;
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return null;
        }

        const { password: _, ...rest } = user;
        console.log("✅ [authorize] Login exitoso:", rest);
        return rest;
      },
    }),
  ],
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
