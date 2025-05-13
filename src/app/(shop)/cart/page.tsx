import TitleMenu from "@/components/ui/top-menu/title/TitleMenu";
import Link from "next/link";
import ProductInCart from "./ui/ProductInCart";
import OrderSumary from "./ui/OrderSumary";

// Constante que contiene los productos , este despues es dinamico desde la base de datos

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

            <ProductInCart  />

          </div>

          {/* Resumen */}
          <div className="p-7 flex flex-col rounded-lg  shadow-xl bg-white/50 h-fit">
            <h2 className="text-xl mb-2 ">Resumen de orden</h2>
            
            <div className="mt-5 grid grid-cols-2">
              <OrderSumary />

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
