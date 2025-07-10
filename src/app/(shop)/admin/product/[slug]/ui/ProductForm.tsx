"use client";

import { createUpdateProduct } from "@/actions";
import {   Product, ProductImage } from "@/interface";
import { Category } from "@/interface/category.interface";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  product: Partial<Product> & { ProductImage? : ProductImage[]};
  categories: Category[]
}

interface FormInputs {
  id?: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  inStock: number;
  sizes: string[];
  tags: string;
  gender: "men" | "women" | "kid" | "unisex";
  categoryId: string
}

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export const ProductForm = ({ product, categories}: Props) => {

  const router = useRouter()

  const getNormalizedDefaultValues = (product: Partial<Product> & { categoryId?: string }): FormInputs => ({
  title: product.title ?? "",
  slug: product.slug ?? "",
  description: product.description ?? "",
  price: product.price ?? 0,
  inStock: product.inStock ?? 0,
  sizes: product.sizes ?? [],
  tags: product.tags?.join(", ") ?? "",
  gender: (typeof product.gender === "string" ? product.gender : "unisex") as FormInputs["gender"],
  categoryId: product.categoryId ?? "",
});

const {
  handleSubmit,
  register,
  formState: { isValid },
  getValues,
  setValue,
  watch
} = useForm<FormInputs>({
  defaultValues: getNormalizedDefaultValues(product)
});


  // TODO: Observa si los sizes cambian de estado, y si cambia se renderiza el componente
  watch("sizes")

const onSizeChange = (size: string) => {
  const sizes = new Set(getValues("sizes"));

  if (sizes.has(size)) {
    sizes.delete(size);
  } else {
    sizes.add(size);
  }

  setValue("sizes", Array.from(sizes));
};

const onSubmit = async (data: FormInputs) => {
  const formData = new FormData();

  const productToSave = { ...data };

  // ✅ Solo se agrega el id si es un producto existente (modo edición)
  if (productToSave.id) {
    formData.append("id", productToSave.id);
  }

  // 🧾 Agregamos todos los campos necesarios al FormData
  formData.append("title", productToSave.title);
  formData.append("slug", productToSave.slug);
  formData.append("description", productToSave.description);
  formData.append("price", productToSave.price.toString());
  formData.append("inStock", productToSave.inStock.toString());
  formData.append("sizes", productToSave.sizes.join(",")); // ✅ Join correcto
  formData.append("tags", productToSave.tags);
  formData.append("categoryId", productToSave.categoryId);
  formData.append("gender", productToSave.gender);

  // ✅ Llamamos a la función de creación/actualización
  const { ok, product: updatedProduct } = await createUpdateProduct(formData);

  // ❌ Si falla, informamos
  if (!ok) {
    toast.error("Ocurrio un problema")
    return;
  }

  toast.success("Producto guardado con éxito")

  setTimeout(() => {
    router.replace(`/admin/product/${updatedProduct?.slug}`);
  }, 1500);
};

  
  return (
  <>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        theme="light"
      />
    <form onSubmit={handleSubmit(onSubmit)}  className="mt-6 grid px-5 mb-16 grid-cols-1 sm:px-0 sm:grid-cols-2 gap-6">
      <div className="w-full space-y-6">
        {/* Título */}
        <div className="relative">
          <input
            type="text"
            id="title"
            placeholder=" "
            className="peer w-full border border-gray-300 bg-white rounded-md px-4 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" {...register("title", {required:true})}
          />
          <label
            htmlFor="title"
            className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white"
          >
            Título
          </label>
        </div>

        {/* Slug */}
        <div className="relative">
          <input
            type="text"
            id="slug"
            placeholder=" "
            className="peer w-full border border-gray-300 bg-white rounded-md px-4 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" {...register("slug", {required:true})}
          />
          <label
            htmlFor="slug"
            className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white"
          >
            Slug
          </label>
        </div>

        {/* Descripción */}
        <div className="relative">
          <textarea
            id="description"
            placeholder=" "
            rows={4}
            className="peer w-full border border-gray-300 bg-white rounded-md px-4 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none" {...register("description", {required:true})}
          />
          <label
            htmlFor="description"
            className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white"
          >
            Descripción
          </label>
        </div>

        {/* Precio */}
        <div className="relative">
          <input
            type="number"
            id="price"
            placeholder=" "
            className="peer w-full border border-gray-300 bg-white rounded-md px-4 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" {...register("price", {required:true, min:0})}
          />
          <label
            htmlFor="price"
            className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white"
          >
            Precio
          </label>
        </div>

        {/* Tags */}
        <div className="relative">
          <input
            type="text"
            id="tags"
            placeholder=" "
            className="peer w-full border border-gray-300 bg-white rounded-md px-4 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" {...register("tags", {required:true})}
          />
          <label
            htmlFor="tags"
            className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white"
          >
            Tags
          </label>
        </div>

        {/* Género */}
        <div>
          <label htmlFor="gender" className="block text-sm font-medium mb-1 text-gray-700">
            Género
          </label>
          <select
            id="gender"
            className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("gender", {required:true})}
          >
            <option value="">[Seleccione]</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kid">Kid</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>

        {/* Categoría */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-1 text-gray-700">
            Categoría
          </label>
          <select
            id="category"
            className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("categoryId", {required:true})}
          >
            <option value="">[Seleccione]</option>
            {categories.map((category)=>(
              <option key={category.id} value={category.id}>{category.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="w-full py-2 bg-black/80 hover:bg-black/60 text-white font-semibold rounded-md transition">
          Guardar
        </button>
      </div>

      {/* Selector de tallas y fotos */}
      <div className="w-full space-y-6">
              <div className="relative">
          <input
            type="number"
            id="inStock"
            placeholder=" "
            className="peer w-full border border-gray-300 bg-white rounded-md px-4 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" {...register("inStock", {required:true, min:0})}
          />
          <label
            htmlFor="inStock"
            className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white"
          >
            Stock
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Tallas</label>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <div
                key={size}
                onClick={()=>onSizeChange(size)}
                className={
                  clsx(
                    "flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md text-sm text-gray-700 cursor-pointer transition-all",
                    {
                      "bg-black/80 text-white " : getValues("sizes").includes(size)
                    }
                  )
                }
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="images" className="block text-sm font-medium mb-1 text-gray-700">
            Fotos
          </label>
          <input
            type="file"
            id="images"
            multiple
            className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            accept="image/png, image/jpeg"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {
            product.ProductImage?.map((image)=>(
              <div key={image.id}>
                <Image className="rounded-t-md shadow" width={250} height={250} src={`/products/${image.url}`} alt={product.title ?? ""} />
      
              <button 
                type="button"
                onClick={()=>console.log(image.id, image.url)}
                className="bg-red-400 w-full rounded-b-md py-2 hover:bg-red-500 " >Eliminar</button>
              </div>
            ))
        }
      </div>
      </div>
    </form>
  </>
  );
};