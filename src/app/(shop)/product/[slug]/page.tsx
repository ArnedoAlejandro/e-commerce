export const revalidate = 604800

import ProductMobileSlideshow from "@/components/product/slideshow/ProductMobileSlideshow"
import ProductSlideshow from "@/components/product/slideshow/ProductSlideshow"
import { getProductBySlug } from "@/actions"
import { titleFont } from "@/config/fonts"
import { notFound } from "next/navigation"
import StockLabel from "@/components/product/stock-label/StockLabel"
import { Metadata } from "next"
import AddtoCard from "./ui/AddtoCard"

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params} : Props,
  // parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const  slug  = params.slug 
  // fetch data
  const product = await getProductBySlug(slug)


  return {
    title: product?.title ?? "Producto sin título",
    description: product?.description ?? "Descripción del producto",
    openGraph: {
      title: product?.title ?? "Producto sin título",
      description: product?.description ?? "Descripción del producto",
      images: [ `/products/${product?.images[1]}` ]
    },
  }
}

const ProductSlug = async ({ params }: Props) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

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

export default ProductSlug