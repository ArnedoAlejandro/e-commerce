import { getOrderById } from "@/actions";
import TitleMenu from "@/components/ui/top-menu/title/TitleMenu";
import clsx from "clsx";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { IoCardOutline } from "react-icons/io5";
import { currencyFormat } from '../../../../utils/currencyFormat';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const OrderPage = async ({ params }: Props) => {
  const { id } = await params; // 👈 AWAIT

  const { order, ok } = await getOrderById(id);

  if (!ok) {
    redirect("/");
  }

  const address = order?.OrderAddress;




  return (
    <div className=" flex justify-center items-center mb-72 px-10 max-md:px-2 ">
      <div className="flex flex-col w-[1000px]">
        <TitleMenu
          title={`Orden  #${id.split("-").at(-1)}`}
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
            {order!.OrderItem.map((item) => (
              <div
                key={item.producto.slug + " - " + item.size}
                className="flex  items-center  mt-10  rounded-md "
              >
                <Image
                  className="mr-5 rounded"
                  src={`/products/${item.producto.ProductImage[0].url}`}
                  alt={item.producto.title}
                  width={120}
                  height={120}
                />

                <div>
                  <p>{item.producto.title}</p>

                  <p>{currencyFormat(item.price * item.quantity)}</p>
                  <p className="font-bold">Subtotal: {currencyFormat(item.price * item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen */}
          <div className="p-7 flex flex-col rounded-lg  shadow-xl bg-white/50">
            <h2 className=" text-center text-xl mb-2 ">Direccion de entrega</h2>
            <div className="mb-10">
              <p>Nombre : {address?.firstName}</p>
              <p>Direccion: {address?.address}</p>
              <p>Ciudad: {address?.city}</p>
              <p>Codigo postal: {address?.postalCode}</p>
              <p>Telefono: {address?.phone}</p>
            </div>

            <div className="w-full h-0.5 bg-gray-400 rounded mb-10" />
            <h2 className=" text-center text-xl mb-2 ">Resumen de orden</h2>

            <div className="mt-5 grid grid-cols-2">
              <span>Cantidad de productos</span>
              <span className="text-right">{order!.itemsInOrder === 1 ? "1 producto" : `${order!.itemsInOrder} productos` }</span>

              <span>Subtotal</span>
              <span className="text-right">{currencyFormat(order!.subtotal)}</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="text-right mt-5 text-2xl">{currencyFormat(order!.total)}</span>
            </div>

            <div
              className={clsx(
                "mt-9 flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-800": !order!.isPaid,
                  "bg-emerald-700": order!.isPaid,
                }
              )}
            >
              <IoCardOutline size={30} />
              <span className="mx-2">{
                !order!.isPaid ? "pendiente de pago " : "Orden pagada"
                }</span>
              {/* <span className="mx-2">Orden pagada</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
