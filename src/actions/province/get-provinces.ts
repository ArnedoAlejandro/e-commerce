import { prisma } from "@/lib/prisma";

export const getProvinces = async () => {
  try {
    const province = await prisma.province.findMany();
    return province;
  } catch (error) {
    console.log(error);
  }
};
