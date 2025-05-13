"use client";

import { useCartStore } from "@/store";
import Image from "next/image";
import QuantitySelector from '@/components/product/cuantity-selector/QuantitySelector';
import { useState, useEffect } from "react";
import Link from "next/link";

const ProductInCart = () => {
  const [ loaded, setLoaded ] = useState(false)
  const updateProductQuantity = useCartStore((state) => state.updateProductQuantity) 
  const removeProducts = useCartStore((state) => state.removeProducts) 
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
            <Link className="cursor-pointer underline" href={`/product/${product.slug}`}>{product.title}</Link>

            <p>${product.price}</p>

            <QuantitySelector onQuantityChanged={ quantity =>updateProductQuantity(product, quantity)} quantity={product.quantity} />

            <button
              onClick={ ()=> removeProducts(product)}
              className="mt-3 underline hover:text-gray-600 cursor-pointer">
              Remover
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductInCart;
