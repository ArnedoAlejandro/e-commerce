"use client";
import { useAdressStore, useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import clsx from "clsx";
import { useState, useEffect } from "react";

const PlaceOrder = () => {
  const [loaded, setLoaded] = useState(false);
  const [ isPlacingOrder, setIsPlacingOrder ] = useState(false);

  const addres = useAdressStore((state) => state.adress);
  const cart = useCartStore((state) => state.cart);
  



  const { subTotal, total, itemsInCart } = (() => {
    const subTotal = cart.reduce(
      (subTotal, product) => product.quantity * product.price + subTotal,
      0
    );
    const total = subTotal;
    const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

    return { subTotal, total, itemsInCart };
  })();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const onPlaceOrder = async() => {
    setIsPlacingOrder(true);
    const productStore = cart.map((product) => ({
      id: product.id,
      quantity: product.quantity,
      size: product.size
    }))

    const { rememberAdress, ...restAddress } = addres;
    console.log(restAddress);
    console.log(productStore)

    setIsPlacingOrder(false);
  }

  if (!loaded) return <p>Cargando...</p>;

  return (
    <div className="p-7 flex flex-col rounded-lg  shadow-xl bg-white/50 h-fit">
      <h2 className=" text-center text-xl mb-2 ">Direccion de entrega</h2>
      <div className="mb-10">
        <p>Nombre </p>
        <p>
          {addres.firstName} {addres.lastName}
        </p>
        <p>Direccion:</p>
        <p>{addres.address}</p>
        <p>Ciudad</p>
        <p> {addres.cityId}</p>
        <p>Provincia</p>
        <p>{addres.provinceId}</p>
        <p>Codigo postal </p>
        <p>{addres.postalCode}</p>
        <p>Telefono</p>
        <p>{addres.phone}</p>
      </div>

      <div className="w-full h-0.5 bg-gray-400 rounded mb-10" />
      <h2 className=" text-center text-xl mb-2 ">Resumen de orden</h2>

      <div className="mt-5 grid grid-cols-2">
        <span>No. Productos</span>
        <span className="text-right">
          {itemsInCart === 1 ? "1 producto" : `${itemsInCart} artículos`}
        </span>

        <span>Subtotal</span>
        <span className="text-right">{currencyFormat(subTotal)}</span>

      
        <span className="text-xl  mt-5 font-semibold">Total</span>
        <span className="text-right mt-5 text-2xl">
          {currencyFormat(total)}
        </span>

      </div>
        {/* <p className="text-red-600 text-center mt-5">Error de creación de orden</p> */}
        <button
        onClick={onPlaceOrder}
          // href="/orders/123"
          className={`" flex justify-center mt-5 bg-gray-800 text-white  py-3 px-5 rounded-md hover:bg-gray-700 transition-all duration-300 " ${isPlacingOrder && "cursor-not-allowed"}`} 
        >
          Colocar orden
        </button>
    </div>
  );
};

export default PlaceOrder;
