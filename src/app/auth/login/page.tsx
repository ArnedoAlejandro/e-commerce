import Link from "next/link";

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
            <form className="mt-8 space-y-6">
              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={"user.email"}
                  className="peer h-12 w-full rounded border border-gray-300 px-4 text-sm text-gray-800 placeholder-transparent outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-2 text-xs text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-yellow-500"
                >
                  Email
                </label>
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={""}
                  className="peer h-12 w-full rounded border border-gray-300 px-4 text-sm text-gray-800 placeholder-transparent outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 -top-2 text-xs text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-yellow-500"
                >
                  Contraseña
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <input
                  type="submit"
                  value="Ingresar"
                  className="cursor-pointer w-full h-12 bg-yellow-500 text-black text-sm font-semibold rounded shadow-md hover:bg-yellow-400 transition duration-300"
                />
              </div>
            </form>
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
