"use server";

import type { Address } from "@/interface";
import { prisma } from "@/lib/prisma";

// Interface para los argumentos de la función
interface SetUserAddressParams {
  address: Address;
  userId: string;
}

export const setUserAddress = async ({
  address,
  userId,
}: SetUserAddressParams) => {
  try {
    const newAddress = await createOrReplaceAddress(address, userId);
    return { ok: true, address: newAddress };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error al guardar la dirección",
    };
  }
};

const createOrReplaceAddress = async (address: Address, userId: string) => {
  try {
    // 🔍 Validar existencia de usuario antes
    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      console.error("El usuario no existe en la base de datos:", userId);
      throw new Error("Usuario no encontrado en la base de datos.");
    }

    const storedAddress = await prisma.userAddress.findUnique({
      where: {
        userId,
      },
    });

    const addressToSave = {
      userId,
      firstName: address.firstName,
      lastName: address.lastName,
      address: address.address,
      address2: address.address2 ?? "",
      city: address.city,
      provinceId: address.provinceId,
      postalCode: address.postalCode,
      phone: address.phone,
    };

    if (!storedAddress) {
      const newAddress = await prisma.userAddress.create({
        data: addressToSave,
      });
      return newAddress;
    }

    const updatedAddress = await prisma.userAddress.update({
      where: { userId },
      data: addressToSave,
    });

    return updatedAddress;
  } catch (error) {
    console.log(error);
    throw new Error("Error al guardar la dirección");
  }
};
