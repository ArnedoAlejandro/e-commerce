import { getPaginatedProductWithImages } from "@/actions";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Pagination from "@/components/ui/pagination/Pagination";
import TitleMenu from "@/components/ui/top-menu/title/TitleMenu";
import { redirect } from "next/navigation";


interface Props {
  searchParams : {
    page?: string
  }
}


export default async function  Home({searchParams}:Props) {

  
  const page = searchParams.page ? parseInt(searchParams.page) : 1

  const {products, totalPage} = await getPaginatedProductWithImages({page})
  
  if(products.length === 0 ){
    redirect("/")
  }

  return (
    <>

      <TitleMenu title="Tienda" subtitle="Todos los productos" className="mb-2"/>

      <ProductGrid products={products} />
    
      <Pagination totalPages={totalPage} />
    </>
  );
}
