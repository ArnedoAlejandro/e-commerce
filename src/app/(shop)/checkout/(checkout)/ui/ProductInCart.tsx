"use client";

import { useCartStore } from "@/store";
import Image from "next/image";
import { useState, useEffect } from "react";
import { currencyFormat } from '../../../../../utils/currencyFormat';

const ProductInCart = () => {
  const [ loaded, setLoaded ] = useState(false)

  const productInCart = useCartStore((state) => state.cart);

  useEffect( () => {
    setLoaded(true)

  }, []);


  if(!loaded) return <p>Cargando...</p>

  return (
    <div>
      {" "}
      {productInCart.map((product) => (
        <div key={`${product.slug}-${product.size}` } className="flex  items-center mt-10 rounded-md">
          <Image
            className="mr-5 rounded"
            src={`/products/${product.image}`}
            alt={product.title}
            width={120}
            height={120}
          />

          <div>
            <span  >{product.size} - {product.title} ({product.quantity})</span>
            <p className="font-bold">{currencyFormat(product.price * product.quantity)} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductInCart;
