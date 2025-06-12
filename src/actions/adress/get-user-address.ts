// TODO - tercero cambio de adress.interface, adress-store, get-user-address
import { prisma } from "@/lib/prisma";

export const getUserAddress = async (userId: string) => {
  try {
    const address = await prisma.userAddress.findUnique({
      where: {
        userId,
      },
      select: {
        firstName: true,
        lastName: true,
        address: true,
        address2: true,
        postalCode: true,
        phone: true,
        city: true,
        provinceId: true,
      },
    });

    return {
      ...address,
      city: address?.city ?? "", // Si city es null, lo reemplaza por string vacío
    }; // Ya tiene el formato exacto que espera <AdressForm>
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener la dirección");
  }
};
