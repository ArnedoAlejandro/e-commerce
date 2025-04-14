import TitleMenu from "@/components/ui/top-menu/title/TitleMenu";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import QuantitySelector from '@/components/product/cuantity-selector/QuantitySelector';

// Constante que contiene los productos , este despues es dinamico desde la base de datos
const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
const Cartpage = () => {
  return (
    <div className=" flex justify-center items-center mb-72 px-10 max-md:px-2 ">
      <div className="flex flex-col w-[1000px]">
        <TitleMenu
          title="Carrito de compras"
          subtitle="Tus productos seleccionados"
          className="mb-2"
        />

        <div className="grid grid-cols-2  gap-10 max-md:grid-cols-1">

          {/* Carrito */}
          <div className="flex flex-col  mt-5 ">
            <span>Agragar mas items</span>
            <Link
              href="/"
              className="underline  transition-all rounded-md   hover:text-gray-600 "
            >
              Continuar comprando
            </Link>

            {/* Item */}
            {
              productInCart.map((product) => (
                <div
                  key={product.slug}
                  className="flex  items-center mt-10 rounded-md"
                >
                  <Image className="mr-5 rounded" src={`/products/${product.images[0]}`} alt={product.title} width={120} height={120} />
                
                  <div>
                    <p>{product.title}</p>
                    
                    <p>${product.price}</p>
                    
                    <QuantitySelector quantity={1} />

                    <button className="mt-3 underline hover:text-gray-600 cursor-pointer">Remover</button>
                  </div>

                </div>
              ))
            }
          </div>

          {/* Resumen */}
          <div className="p-7 flex flex-col rounded-lg  shadow-xl bg-white/50 h-fit">
            <h2 className="text-xl mb-2 ">Resumen de orden</h2>
            
            <div className="mt-5 grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 Articulos</span>

              <span>Subtotal</span>
              <span className="text-right">$100</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="text-right mt-5 text-2xl">$100</span>

            </div>

            <Link href="/checkout/address" 
              className="flex justify-center mt-5 bg-gray-800 text-white  py-3 px-5 rounded-md hover:bg-gray-700 transition-all duration-300 ">
              Checkout
            </Link>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
