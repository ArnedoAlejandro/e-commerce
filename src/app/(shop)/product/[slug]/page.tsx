export const revalidate = 604800

import ProductMobileSlideshow from "@/components/product/slideshow/ProductMobileSlideshow"
import ProductSlideshow from "@/components/product/slideshow/ProductSlideshow"
import { getProductBySlug } from "@/actions"
import { titleFont } from "@/config/fonts"
import { notFound } from "next/navigation"
import StockLabel from "@/components/product/stock-label/StockLabel"
import { Metadata } from "next"
import AddtoCard from "./ui/AddtoCard"


export async function generateMetadata({
  params,
}: {
  params: { slug: string }; // ✅ NO Promise
}): Promise<Metadata> {
  const { slug } = params;  // ✅ sin await
  const product = await getProductBySlug(slug);

  const title = product?.title ?? "Producto sin título";
  const description = product?.description ?? "Descripción del producto";

  // Evita acceso fuera de rango por si no hay imágenes
  const image = product?.images?.[0]
    ? `/products/${product.images[0]}`
    : "/og-default.png"; // poné un fallback que exista

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
  };
}

export default async function ProductSlug({
  params,
}: {
  params: { slug: string };   // ✅ síncrono
}) {
  const { slug } = params;    // ✅ sin await
  const product = await getProductBySlug(slug);

  if (!product) notFound();
  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
      {/* SlideShoe Mobile */}
      <ProductMobileSlideshow  title={ product.title ?? "Producto sin título"} images={product.images} className="block md:hidden"/>

      {/* SileShow Descktop */}
      <ProductSlideshow  title={ product.title ?? "Producto sin título" } images={product.images} className="hidden md:block"/>  
      </div>

      <div className="col-span-1 px-5">
        <StockLabel slug={product.slug} />
  
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.title}</h1>
        
        {/* Componente de selector de talle y selector de cantidad */}
        <AddtoCard product={product} />

        <h3 className="font-bold text-sm mt-5">Descripción</h3>
        <p className="font-light">
          {product.description}
        </p>
      </div>
    </div>
  )
}

