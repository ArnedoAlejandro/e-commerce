// "use client"

// // import { authenticate } from "@/actions";
// import React, {  useState } from "react";
// import { IoInformationOutline } from "react-icons/io5";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";

// const LoginForm = () => {

//   const router = useRouter()
  
//   const [error, setError] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError(null);

//     const formData = new FormData(e.currentTarget);
//     const email = formData.get("email");
//     const password = formData.get("password");

//     const res = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });

//     if (res?.ok) {
//       router.replace("/"); // redirige al home
//     } else {
//       setError("Credenciales inválidas");
//     }

//     setIsSubmitting(false);
//   };


//   return (
//     <div>
//       {" "}
//       <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//         {/* Email Input */}
//         <div className="relative">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"         
//             className="peer h-12 w-full rounded border border-gray-300 px-4 text-sm text-gray-800 placeholder-transparent outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
//             required
//           />
//           <label
//             htmlFor="email"
//             className="absolute left-3 -top-2 text-xs text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-yellow-500"
//           >
//             Email
//           </label>
//         </div>

//         {/* Password Input */}
//         <div className="relative">
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="peer h-12 w-full rounded border border-gray-300 px-4 text-sm text-gray-800 placeholder-transparent outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
//             required
//           />
//           <label
//             htmlFor="password"
//             className="absolute left-3 -top-2 text-xs text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-yellow-500"
//           >
//             Contraseña
//           </label>
//         </div>

//         <div className="flex items-center justify-center gap-2 text-red-500">
//         {error && (
//         <p className="text-red-500 text-sm flex items-center gap-2">
//           <IoInformationOutline className="w-4 h-4" /> {error}
//         </p>
//       )}
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center">       
//           <button
//             disabled={isSubmitting}
//             type="submit"
//             value="Ingresar"
//             className={`cursor-pointer w-full h-12 bg-yellow-500 text-black text-sm font-semibold rounded shadow-md hover:bg-yellow-400 transition duration-300 ${isSubmitting ? 'bg-yellow-500 cursor-not-allowed' : 'bg-yellow-500'}`}>
//               {isSubmitting ? "Ingresando..." : "Ingresar"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

"use client"

import React, { useActionState, useEffect } from "react";
import { authenticate } from "@/actions";
import { IoInformationOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const LoginForm = () => {

  const router = useRouter()
  const [state, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  useEffect(() => {
    if (state === "Succes") {

      window.location.replace("/");
    }
  }, [state, router]);


  return (
    <div>
      {" "}
      <form action={formAction} className="mt-8 space-y-6">
        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email"         
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

        <div className="flex items-center justify-center gap-2 text-red-500">
          {
            state === "Credenciales inválidas"  && (
              <>
              <IoInformationOutline  className="h-4 w-4" />
              <p className="text-sm">Las credenciales no son correctas</p>
              </>
            )
          }
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">       
          <button
            disabled={isPending}
            type="submit"
            value="Ingresar"
            className={`cursor-pointer w-full h-12 bg-yellow-500 text-black text-sm font-semibold rounded shadow-md hover:bg-yellow-400 transition duration-300 ${isPending ? 'bg-yellow-500 cursor-not-allowed' : 'bg-yellow-500'}`}>
              Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;