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
