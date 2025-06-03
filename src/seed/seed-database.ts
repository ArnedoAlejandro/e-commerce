import { prisma } from "../lib/prisma";
import { initialData } from "./seed";
import { Category } from "@prisma/client";
import { provinces, city } from "./seed-province";
async function main() {
  // 1. Borrar registros previos (en orden correcto por dependencias)
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.city.deleteMany(); // ✅ Borrar ciudades antes de provincias
  await prisma.province.deleteMany(); // ✅ Borrar provincias
  await prisma.userAddress.deleteMany();
  await prisma.user.deleteMany();

  const { categories, products, users } = initialData;

  // 2. Crear usuarios
  await prisma.user.createMany({ data: users });

  // 3. Crear provincias
  await prisma.province.createMany({ data: provinces });

  // 4. Eliminar duplicados de ciudades
  const uniqueCities = Array.from(
    new Map(city.map((c) => [`${c.name.trim()}-${c.provinceId}`, c])).values()
  );

  await prisma.city.createMany({
    data: uniqueCities,
    skipDuplicates: true, // ✅ evitar errores si queda alguno repetido
  });

  // 5. Crear categorías
  const categoriesData = categories.map((name) => ({ name }));

  await prisma.category.createMany({ data: categoriesData });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce(
    (map: Record<string, string>, category: Category) => {
      map[category.name.toLowerCase()] = category.id;
      return map;
    },
    {}
  );

  // 6. Crear productos
  for (const product of products) {
    const { type, images, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });

    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({ data: imagesData });
  }

  console.log("✅ Seed ejecutado con éxito.");
}

// Funcion de autoinvocacion
(async () => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
