import { CartProduct } from "@/interface";
import { create } from "zustand";
import { persist } from "zustand/middleware"; // 👈 Importar persist

interface State {
  cart: CartProduct[];
  getTotalItems: () => number;
  getSumaryInformation: () => {
    subTotal: number;
    total: number;
    itemsInCart: number;
  };
  addProductToCart: (product: CartProduct) => void;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProducts: (product: CartProduct) => void;

  clearCart: () => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },

      getSumaryInformation: () => {
        const { cart } = get();

        const subTotal = cart.reduce((subTotal, product) => {
          return product.quantity * product.price + subTotal;
        }, 0);
        const total = subTotal;

        const itemsInCart = cart.reduce(
          (total, item) => total + item.quantity,
          0
        );

        return {
          subTotal,
          total,
          itemsInCart,
        };
      },

      // Añade elemementos al carrito
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();

        const productInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size
        );

        // Si no existe el producto en el carrito se inserta
        if (!productInCart) {
          set({ cart: [...cart, product] });
          return; // 👈 importante hacer return para no seguir al map
        }

        // Si el producto ya existe en el carrito, actualizar su cantidad
        const updateCartProduct = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }
          return item;
        });

        set({ cart: updateCartProduct });
      },

      // Modifica elementos del carrito
      updateProductQuantity: (product: CartProduct, quantity: number) => {
        const { cart } = get();

        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: quantity };
          }
          return item;
        });

        set({ cart: updatedCartProducts });
      },

      // Elimina elementos del carrito
      removeProducts: (product: CartProduct) => {
        const { cart } = get();

        const updatedCartProducts = cart.filter(
          (item) => item.id !== product.id || item.size !== product.size
        );

        set({ cart: updatedCartProducts });
      },

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "shopping-cart", // 👈 Nombre de la key en localStorage
      // Opcional: podés configurar storage, serialize/deserialize, etc.
    }
  )
);
