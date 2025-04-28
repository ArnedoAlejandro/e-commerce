export const revalidate = 604800
import QuantitySelector from "@/components/product/cuantity-selector/QuantitySelector"
import SizeSelector from "@/components/product/size-selector/SizeSelector"
import ProductMobileSlideshow from "@/components/product/slideshow/ProductMobileSlideshow"
import ProductSlideshow from "@/components/product/slideshow/ProductSlideshow"
import { getProductBySlug } from "@/actions"
import { titleFont } from "@/config/fonts"
import { notFound } from "next/navigation"
import StockLabel from "@/components/product/stock-label/StockLabel"
import { Metadata } from "next"

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
        
        {/* Selector de talle */}
        <SizeSelector selectedSize={product.sizes[0]} availableSize={product.sizes} />

        {/* Selector de cantidad */}
        <QuantitySelector quantity={2}/>


        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
          Agregar al carrito
        </button>

        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">
          {product.description}
        </p>
      </div>
    </div>
  )
}

export default ProductSlug