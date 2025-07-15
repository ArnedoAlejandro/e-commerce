"use client";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store";
import { currencyFormat } from "../../../../utils/currencyFormat";

const OrderSumary = () => {
  const [loaded, setLoaded] = useState(false);

  const cart = useCartStore((state) => state.cart); // 👈 escuchar cambios en el carrito

  const { subTotal, total, itemsInCart } = (() => {
    const subTotal = cart.reduce(
      (subTotal, product) => subTotal + product.quantity * product.price,
      0
    );

    const total = subTotal;
    const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

    return { subTotal, total, itemsInCart };
  })();

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <p>Cargando...</p>;

  return (
    <>
      <span>No. Productos</span>
      <span className="text-right">
        {itemsInCart === 1 ? "1 producto" : `${itemsInCart} artículos`}
      </span>

      <span>Subtotal</span>
      <span className="text-right">{currencyFormat(subTotal)}</span>

      <span>Total</span>
      <span className="text-right mt-5 text-2xl">{currencyFormat(total)}</span>
    </>
  );
};

export default OrderSumary;
