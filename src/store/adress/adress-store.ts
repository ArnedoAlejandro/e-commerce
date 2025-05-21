// TODO - Segundo cambio de adress.interface, adress-store, get-user-address

import { Address } from "@/interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  adress: Address;
  setAdress: (adress: Address) => void;
}

export const useAdressStore = create<State>()(
  persist(
    (set) => ({
      adress: {
        firstName: "",
        lastName: "",
        address: "",
        address2: "",
        provinceId: "",
        cityId: "",
        postalCode: "",
        phone: "",
      },
      setAdress: (adress) => set({ adress }),
    }),
    {
      name: "adress-store",
    }
  )
);

// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// interface State {
//   adress: {
//     firstName: string;
//     lastName: string;
//     address: string;
//     address2?: string;
//     province: string;
//     city: string;
//     postalCode: string;
//     phone: string;
//     // rememberAdress: boolean;
//   };
//   // setAdrees es un metodo que modifica el estado
//   setAdress: (adress: State["adress"]) => void;
// }

// export const useAdressStore = create<State>()(
//   // Persis es un midleware de zustand que guarda el estado en el localStorage
//   persist(
//     (set, get) => ({
//       adress: {
//         firstName: "",
//         lastName: "",
//         address: "",
//         address2: "",
//         province: "",
//         city: "",
//         postalCode: "",
//         phone: "",
//       },
//       setAdress: (adress) => set({ adress }),
//     }),
//     {
//       // adress-store es el nombre en localStorage
//       name: "adress-store",
//     }
//   )
// );
