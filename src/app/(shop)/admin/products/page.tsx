export const dynamic = "force-dynamic";
import Link from "next/link";
import TitleMenu from "@/components/ui/top-menu/title/TitleMenu";
import SearchOrderByName from "@/components/orders/SearchOrderByName";
import {  getPaginatedProductWithImages } from "@/actions";
import Pagination from "@/components/ui/pagination/Pagination";
import { currencyFormat } from "@/utils";
import ProductImage from "@/components/product/product-image/ProductImage";


interface Props {
  searchParams : {
    page?: string
  }
}

// {searchParams}: Props
export default async function ProductsPagePage({
  searchParams,
}: Props) {

    const page = searchParams.page ? parseInt(searchParams.page) : 1
  
    const {products, totalPage} = await getPaginatedProductWithImages({page})


  return (
    <>
    
      <div className=" mt-5">
        <TitleMenu title="Mantenimiento de productos" />       
      </div>

      <div className="w-full  flex gap-9 justify-end mt-6  max-md:flex-col-reverse">
        <Link className="text-center p-2 bg-black/80 text-white rounded hover:bg-black/60 cursor-pointer max-md:m-auto max-md:w-8/12" href={"/admin/product/new"}>Nuevo producto</Link>

        <SearchOrderByName />
      </div>

      <div className="mb-10 mt-9">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Imagen</th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Titulo</th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Precio</th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Genero</th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Stock</th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Tallas</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <Link href={`/product/${product.slug}`}>
                    <ProductImage src={product.ProductImage[0]?.url} alt={product?.title} width={80} height={80} />
                  </Link>
                </td>
                <td className="text-sm text-gray-900 font-light px-6  whitespace-nowrap">
                  <Link href={`/admin/product/${product.slug}`} className="hover:underline">{product.title} </Link>
                </td>
                <td className="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                  {currencyFormat(product.price)}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                  {product.gender}
                </td>

              <td className="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                  {product.inStock}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                  {product.sizes.slice().join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination totalPages={totalPage} />
      </div>
    </>
  );
}