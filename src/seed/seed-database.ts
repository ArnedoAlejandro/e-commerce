import { prisma } from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  // 1 Borrar registros previos
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { categories, products } = initialData;

  // 2 Crear categorias
  const categoriesData = categories.map((name) => ({
    name,
  }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  // Designar el id de categoria
  const categoriesDb = await prisma.category.findMany();
  console.log(categoriesDb);

  const categoriesMap = categoriesDb.reduce((acc, category) => {
    acc[category.name.toLowerCase()] = category.id;
    return acc;
  }, {} as Record<string, string>);

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
