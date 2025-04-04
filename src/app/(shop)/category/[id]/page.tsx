import ProductGrid from '@/components/products/product-grid/ProductGrid'
import TitleMenu from '@/components/ui/top-menu/title/TitleMenu'
import { Category } from '@/interface'
import { initialData } from '@/seed/seed'
import { notFound } from 'next/navigation'


interface Props {
  params: { id: string }
}

const CategoryId = async ({ params }: Props) => {
  
  const { id } = await params

  
  const products = initialData.products.filter(product => product.gender === id)

  const gender : Record<Category,string> = {
    "men" : "Hombre",
    "women" : "Mujer",
    "kid" : "Niño",
    "unisex" : "Unisex"
  }
  


  if (id !== 'men' && id !== 'women' && id !== 'kid') {
    notFound()
  }


  return (
    <>
      <TitleMenu  title={`Articulos de ${ gender[id] }` } subtitle="Todos los productos" className="mb-2"/>

      <ProductGrid products={products} />
    </>
  )
}

export default CategoryId