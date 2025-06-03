import TitleMenu from "@/components/ui/top-menu/title/TitleMenu";
// import { initialData } from "@/seed/seed";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductInCart from "./ui/ProductInCart";
import PlaceOrder from "./ui/PlaceOrder";

// Constante que contiene los productos , este despues es dinamico desde la base de datos
// const productInCart = [
//   initialData.products[0],
//   initialData.products[1],
//   initialData.products[2],
// ];
const CheckOutPage = () => {
  return (
    <div className=" flex justify-center items-center mb-72 px-10 max-md:px-2 ">
      <div className="flex flex-col w-[1000px]">
        <TitleMenu
          title="Verificar Orden"
          subtitle="Tus productos seleccionados"
          className="mb-2"
        />

        <div className="grid grid-cols-2  gap-10 max-md:grid-cols-1">
          {/* Carrito */}
          <div className="flex flex-col  mt-5 ">
            <span>Ajustar elementos</span>
            <Link
              href="/cart"
              className="underline  transition-all rounded-md hover:text-gray-600 "
            >
              Editar carrito
            </Link>

            {/* Item */}
            {/* {productInCart.map((product) => (
              <div
                key={product.slug}
                className="flex  items-center  mt-10  rounded-md "
              >
                <Image
                  className="mr-5 rounded"
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={120}
                  height={120}
                />

                <div>
                  <p>{product.title}</p>

                  <p>${product.price} x3 </p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))} */}
            <ProductInCart />
          </div>

          {/* Resumen */}
        <PlaceOrder/>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
