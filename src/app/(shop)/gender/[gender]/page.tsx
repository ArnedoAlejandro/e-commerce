import { getPaginatedProductWithImages } from '@/actions'
import ProductGrid from '@/components/products/product-grid/ProductGrid'
import Pagination from '@/components/ui/pagination/Pagination'
import TitleMenu from '@/components/ui/top-menu/title/TitleMenu'
import { Gender } from '@prisma/client'
import { redirect } from 'next/navigation'


interface Props {
  params: { gender : string },
  searchParams: { page?: string }
}

const CategoryId = async ({ params, searchParams }: Props) => {
  
  const { gender } =  params

    const page =  searchParams.page ? parseInt(searchParams.page) : 1
  
    const {products, totalPage} = await getPaginatedProductWithImages({page, gender: gender as Gender})
    
    if(products.length === 0 ){
      redirect(`/gender/${gender}`)
    }

  

  const labels : Record<string,string> = {
    "men" : "Hombre",
    "women" : "Mujer",
    "kid" : "Niño",
    "unisex" : "Unisex"
  }
  


  // if (id !== 'men' && id !== 'women' && id !== 'kid') {
  //   notFound()
  // }


  return (
    <>
      <TitleMenu  title={`Articulos de ${ labels[gender] }` } subtitle="Todos los productos" className="mb-2"/>

      <ProductGrid products={products} />

      <Pagination totalPages={totalPage} />
    </>
  )
}

export default CategoryId