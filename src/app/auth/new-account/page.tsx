"use client"

import Link from "next/link";
import Register from "./ui/Register";

const RegisterUser = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row  max-lg:bg-black/60">

      {/* Sección de registro - fondo blanco */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-white px-6 py-1 max-lg:bg-black/60 max-lg:h-screen">
        <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-lg border border-gray-200 max-lg:bg-white">
          <p className="text-3xl font-bold text-gray-700 text-center">
            Crear cuenta
          </p>
          <p className="mt-2 text-base font-light text-gray-500 text-center">
            ¡Registrate para comenzar a comprar!
          </p>

          <Register />

          <div className="mt-4 flex justify-center text-sm text-gray-500">
            ¿Ya tenés cuenta?{" "}
            <Link href="/auth/login" className="ml-1 text-yellow-500 hover:text-yellow-600">
              Iniciá sesión
            </Link>
          </div>
        </div>
      </div>

      {/* Sección informativa - fondo oscuro */}
      <div className="w-full lg:w-1/2 hidden lg:flex flex-col items-center justify-center bg-black/60 text-white relative">
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>

        <div className="z-10 text-center p-6 w-10/12 m-auto">
          <h2 className="text-5xl font-extrabold tracking-tight text-yellow-400">
            ¡Sumate a ShopXpress!
          </h2>
          <p className="mt-4 text-lg font-light text-gray-300">
            Registrate y obtené acceso a ofertas exclusivas, descuentos especiales y seguimiento de tus pedidos en tiempo real.
          </p>

          <ul className="w-11/12 m-auto mt-6 space-y-6 text-left text-xl font-normal text-gray-200">
            <li className="flex items-center gap-3">
              <span className="p-2 bg-yellow-400/20 rounded-full">✔</span>
              Envíos rápidos y seguros.
            </li>
            <li className="flex items-center gap-3">
              <span className="p-2 bg-yellow-400/20 rounded-full">✔</span>
              Promociones todas las semanas.
            </li>
            <li className="flex items-center gap-3">
              <span className="p-2 bg-yellow-400/20 rounded-full">✔</span>
              Devoluciones fáciles y garantizadas.
            </li>
          </ul>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-5 left-5">
          <div className="w-20 h-20 bg-yellow-400/30 blur-2xl rounded-full"></div>
        </div>
        <div className="absolute top-10 right-10">
          <div className="w-16 h-16 bg-yellow-200/20 blur-2xl rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;