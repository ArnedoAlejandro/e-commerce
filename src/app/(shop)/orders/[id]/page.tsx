import TitleMenu from "@/components/ui/top-menu/title/TitleMenu";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { IoCardOutline } from "react-icons/io5";

interface Props {
  params: {
    id: string;
  };
}

const OrderPage = ({ params }: Props) => {
  const productInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
  ];

  return (
    <div className=" flex justify-center items-center mb-72 px-10 max-md:px-2 ">
      <div className="flex flex-col w-[1000px]">
        <TitleMenu
          title={`Orden  #${params.id}`}
          subtitle="Tus productos seleccionados"
          className="mb-2"
        />

        <div className="grid grid-cols-2  gap-10 max-md:grid-cols-1">
          {/* Carrito */}
          <div className="flex flex-col  mt-5 ">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-800": true,
                  "bg-emerald-700": false,
                }
              )}
            >
              <IoCardOutline size={30} />
              <span className="mx-2">Pendiente de pago</span>
              {/* <span className="mx-2">Orden pagada</span> */}
            </div>

            {/* Item */}
            {productInCart.map((product) => (
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
            ))}
          </div>

          {/* Resumen */}
          <div className="p-7 flex flex-col rounded-lg  shadow-xl bg-white/50">
            <h2 className=" text-center text-xl mb-2 ">Direccion de entrega</h2>
            <div className="mb-10">
              <p>Nombre</p>
              <p>Direccion</p>
              <p>Ciudad</p>
              <p>Codigo postal</p>
              <p>Telefono</p>
            </div>

            <div className="w-full h-0.5 bg-gray-400 rounded mb-10" />
            <h2 className=" text-center text-xl mb-2 ">Resumen de orden</h2>

            <div className="mt-5 grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 Articulos</span>

              <span>Subtotal</span>
              <span className="text-right">$100</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="text-right mt-5 text-2xl">$100</span>
            </div>

            <div
              className={clsx(
                "mt-9 flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-800": true,
                  "bg-emerald-700": false,
                }
              )}
            >
              <IoCardOutline size={30} />
              <span className="mx-2">Pendiente de pago</span>
              {/* <span className="mx-2">Orden pagada</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
