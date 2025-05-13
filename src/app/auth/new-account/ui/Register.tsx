"use client";
import { login, registerUser } from "@/actions";
import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {

  const [ errorMessage, setErrorMessage] = useState("")
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const {
    register,
    handleSubmit,
    formState: { errors}
  } = useForm<FormInputs>();


  const onSubmit = async (data : FormInputs) => {
    setErrorMessage("")
    const { name, email, password } = data
    const resp =  await registerUser(name, email, password)

    if(!resp.ok) { 
      setErrorMessage(resp.message) 
      return   }
      
    await login(email.toLowerCase(), password)
    window.location.replace("/")
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">

      {/* { errors.name?.type === "required" && (
          <span className="text-red-500 text-xs">
            El nombre es requerido
          </span>
        )} */}
      
        <div className="relative">
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            placeholder="Nombre"
            className={
              clsx( 
                "peer h-12 w-full rounded border border-gray-300 px-4 text-sm text-gray-800 placeholder-transparent outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500",
                {
                  "border-red-500 focus:border-red-500 focus:ring-red-500" : errors.name
                }
              )
            }
            
          />
          <label
            htmlFor="name"
            className= "absolute left-3 -top-2 text-xs text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-yellow-500"
          >
            Nombre
          </label>
        </div>

    
        <div className="relative">
          <input
            type="email"
            {...register("email" , {required: true, pattern:regex })}
            name="email"
            placeholder="Email"
            className={
              clsx( 
                "peer h-12 w-full rounded border border-gray-300 px-4 text-sm text-gray-800 placeholder-transparent outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500",
                {
                  "border-red-500 focus:border-red-500 focus:ring-red-500" : errors.email
                }
              )
            }            
          />
          <label
            htmlFor="email"
            className="absolute left-3 -top-2 text-xs text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-yellow-500"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <input
            type="password"
            {...register("password", { required: true })}
            name="password"
            placeholder="Contraseña"
            className={
              clsx( 
                "peer h-12 w-full rounded border border-gray-300 px-4 text-sm text-gray-800 placeholder-transparent outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500",
                {
                  "border-red-500 focus:border-red-500 focus:ring-red-500" : errors.password
                }
              )
            }            
          />
          <label
            htmlFor="password"
            className="absolute left-3 -top-2 text-xs text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-yellow-500"
          >
            Contraseña
          </label>
        </div>
 
        {/* <p className={`text-center mb-3 ${errorMessage === true ? "text-green-500" : "text-red-500"}`}>{errorMessage}</p> */}
          <p className=" text-red-500 text-center mb-3">{errorMessage}</p>

        <div className="flex justify-center">
          <input
            type="submit"
            value="Registrarme"
            className="cursor-pointer w-full h-12 bg-yellow-500 text-black text-sm font-semibold rounded shadow-md hover:bg-yellow-400 transition duration-300"
          />
        </div>
      </form>
      </div>
  );
};

export default Register;
