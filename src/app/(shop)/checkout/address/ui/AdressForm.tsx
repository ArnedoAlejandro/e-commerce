"use client";

import { deleteUserAddress, setUserAddress } from "@/actions";
import { Address } from "@/interface";
import Province from "@/interface/providence.interface";
import { useAdressStore } from "@/store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { useRouter } from "next/navigation";

interface Props {
  provinces: Province[];
  useStoredAddress?: Partial<Address> 
}


interface FormInputs {
  firstName: string;
  lastName: string;
  address: string;     
  address2?: string;   
  city: string;
  provinceId: string;
  postalCode: string;
  phone: string;
  rememberAdress: boolean;
}
const AdressForm = ({ provinces, useStoredAddress = {} }: Props ) => {

  const router = useRouter();

  const { handleSubmit, register, formState: { isValid }, reset } = useForm<FormInputs>({
  defaultValues: {
    ...useStoredAddress,
    rememberAdress: false
  }
});
  const {data: session} = useSession( {required: true} )
  const setAdress = useAdressStore((state) => state.setAdress);
  const adress = useAdressStore((state) => state.adress);



  useEffect(() => {
    if(adress.firstName) {
      reset(adress)
    }
  },[adress, reset])



const onSubmit = async (data: FormInputs) => {
  if (!session || !session.user?.id) {
    console.warn("Sesión no cargada aún");
    return;
  }


  
  const { rememberAdress, ...restAddress } = data;
  
  setAdress(data);
  

  if (rememberAdress) {
    await setUserAddress({
      address: restAddress,
      userId: session!.user.id,
    });
    router.replace("/checkout");
  }else{
    await deleteUserAddress( session!.user.id );
    router.replace("/checkout");
  }

};

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-8">
       {/* <ClearAddressStoreButton/> */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">
            Nombres
          </label>
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" {...register("firstName", { required: true })}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">
            Apellidos
          </label>
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"  {...register("lastName", { required: true })}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">
            Dirección
          </label>
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"  {...register("address", { required: true })}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">
            Dirección 2 (opcional)
          </label>
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"  {...register("address2")}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">
            Provincia
          </label>
          <select
            className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            {...register("provinceId", { required: true })}
          >
            <option value="">Seleccione una opción</option>
            {provinces.map((province) => (
              <option key={province.id} value={province.id}>
                {province.name}
              </option>
            ))}
          </select>
        </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-2">
          Ciudad
        </label>
        <input
            type="text"
            className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"   {...register("city" , { required: true })}
          />
      </div>

    

          <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">
            Código postal
          </label>
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"  {...register("postalCode", { required: true })}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">
            Teléfono
          </label>
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"  {...register("phone", { required: true })}
          />
        </div>

        <div className="inline-flex items-center">
          <label
            className="relative flex cursor-pointer items-center rounded-full p-3"
            htmlFor="checkbox"
            data-ripple-dark="true"
          >
            <input
              type="checkbox"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-800 checked:bg-gray-800 checked:before:bg-gray-800 hover:before:opacity-10"
              id="checkbox"
              {...register("rememberAdress", )}
            />
            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </label>
          <span>¿Recordar direccion?</span>
        </div>

        <div className="flex flex-col items-end  sm:mt-10 col-span-1 sm:col-span-2  max-md:items-center">
          <button
          disabled={!isValid}
            type="submit"
            className={
              clsx(
                "w-full sm:w-1/3 bg-gray-800 text-white text-center py-3 rounded-xl font-semibold hover:bg-gray-600 transition",
                !isValid && "opacity-50 cursor-not-allowed "
              )
            }
          >
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdressForm;
