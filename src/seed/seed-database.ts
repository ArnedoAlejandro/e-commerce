import { prisma } from "../lib/prisma";
import { initialData } from "./seed";
import { Category } from "@prisma/client";

async function main() {
  // 1 Borrar registros previos
  await prisma.user.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { categories, products, users } = initialData;

  // 2 Crear user
  await prisma.user.createMany({
    data: users,
  });

  // 2 Crear categorias
  const categoriesData = categories.map((name) => ({
    name,
  }));

  // Designar el id de categoria

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce(
    (map: Record<string, string>, category: Category) => {
      map[category.name.toLowerCase()] = category.id;
      return map;
    },
    {}
  );

  // Crear Productos

  products.forEach(async (product) => {
    const { type, images, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });
    // Añadir imagenes
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));
    await prisma.productImage.createMany({
      data: imagesData,
    });
  });
}

// Funcion de autoinvocacion
(async () => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
