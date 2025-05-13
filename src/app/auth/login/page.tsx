import Link from "next/link";
import LoginForm from "./ui/LoginForm";

const LoginUser = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen max-lg:bg-black/60">
        {/* Sección de login - fondo blanco */}
        <div className="w-full lg:w-1/2 flex justify-center items-center bg-white px-6 py-10 max-lg:bg-black/60  max-lg:h-screen">
          <div className="w-full max-w-md  rounded-lg p-6 shadow-lg border border-gray-200  max-lg:bg-white">
            <p className="text-3xl font-bold text-gray-700 text-center">
              Iniciar sesión
            </p>
            <p className="mt-2 text-base font-light text-gray-500 text-center">
              Bienvenido a nuestra tienda online
            </p>
            
            {/* Formulario  */}
            <LoginForm/>
          
            <div className="mt-6 flex flex-col items-center text-center">
              <p className="text-sm text-gray-500">¿No tenés cuenta?</p>
              <Link
                href="/auth/new-account"
                className="mt-2 inline-flex items-center gap-2 text-sm  text-yellow-500 hover:text-yellow-400 transition"
              >
                Crear cuenta
              </Link>
            </div>

            <div className="mt-2 flex justify-center">
              <button className="text-sm cursor-pointer text-yellow-500 hover:text-yellow-600 transition">
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          </div>
        </div>

        {/* Sección informativa - fondo oscuro */}
        <div className="w-full lg:w-1/2 hidden lg:flex flex-col items-center justify-center bg-black/60 text-white relative">
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>

          <div className="z-10 text-center p-6 w-10/12 m-auto">
            <h2 className="text-5xl font-extrabold tracking-tight text-yellow-400">
              ShopXpress
            </h2>
            <p className="mt-4 text-lg font-light text-gray-300">
              Descubrí los mejores productos al mejor precio. Tu tienda online
              de confianza.
            </p>

            <ul className="w-11/12 m-auto mt-6 space-y-8 text-left text-xl font-normal text-gray-200">
              <li className="flex items-center gap-3">
                <span className="p-2 bg-yellow-400/20 rounded-full">✔</span>
                Envíos rápidos a todo el país.
              </li>
              <li className="flex items-center gap-3">
                <span className="p-2 bg-yellow-400/20 rounded-full">✔</span>
                Productos de calidad garantizada.
              </li>
              <li className="flex items-center gap-3">
                <span className="p-2 bg-yellow-400/20 rounded-full">✔</span>
                Pagá en cuotas con todas las tarjetas.
              </li>
            </ul>

            <div className="mt-8">
              <p className="text-base text-gray-400 mb-4">
                ¡Iniciá sesión y comenzá a comprar ahora!
              </p>
            </div>
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
    </>
  );
};

export default LoginUser;
