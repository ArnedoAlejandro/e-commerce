"use server";
import { auth } from "@/auth.config";
import type { Address, Size } from "@/interface";
import { prisma } from "../../lib/prisma";

interface ProductToOrder {
  productId: string;
  quantity: number;
  size: Size;
}
export const placeOrder = async (
  productIds: ProductToOrder[],
  address: Address
) => {
  const session = await auth();
  const userId = session?.user.id;
  // Verificar sesion de usuario
  if (!userId)
    return {
      ok: false,
      message: "No hay sesion de usuario",
    };

  // Obtener la informacion del producto
  // Recordar que podemos llevar el mismo producto con el mismo ID ya que esta por talles
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds.map((product) => product.productId),
      },
    },
  });

  // Calcular los montos
  const itemsInOrder = productIds.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const total = productIds.reduce((acc, item) => {
    const product = products.find((product) => product.id === item.productId);

    if (!product) throw new Error("Producto no encontrado");

    return acc + product.price * item.quantity;
  }, 0);

  try {
    const prismaTransaction = await prisma.$transaction(async (tx) => {
      const updatedProductPromises = products.map((product) => {
        const productQuantity = productIds
          .filter((p) => p.productId === product.id)
          .reduce((acc, item) => item.quantity + acc, 0);

        if (productQuantity < 0) {
          throw new Error("No hay suficiente stock");
        }

        return tx.product.update({
          where: {
            id: product.id,
          },
          data: {
            // inStock: product.inStock - productQuantity,
            inStock: {
              decrement: productQuantity,
            },
          },
        });
      });

      const updatedProducts = await Promise.all(updatedProductPromises);

      updatedProducts.forEach((product) => {
        if (product.inStock < 0) {
          throw new Error(`No existen productos ${product.title} en stock`);
        }
      });

      const order = await tx.order.create({
        data: {
          userId: userId,
          itemsInOrder: itemsInOrder,
          total: total,
          subtotal: total, // 👈 agregá esto

          OrderItem: {
            createMany: {
              data: productIds.map((p) => ({
                productId: p.productId,
                quantity: p.quantity,
                size: p.size,
                price:
                  products.find((product) => product.id === p.productId)
                    ?.price ?? 0,
              })),
            },
          },
        },
      });

      const { provinceId, ...restAddress } = address;
      const orderAddress = await tx.orderAddress.create({
        data: {
          ...restAddress,
          provinceId,
          orderId: order.id, // ✅ este campo sí existe en OrderAddress
        },
      });

      return {
        updatedProducts: updatedProducts,
        order: order,
        orderAddress: orderAddress,
      };
    });

    return {
      ok: true,
      order: prismaTransaction.order,
      prismaTransaction: prismaTransaction,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error al crear la orden",
    };
  }
};
