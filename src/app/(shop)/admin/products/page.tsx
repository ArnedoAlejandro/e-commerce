"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { getPaginatedProductWithImages } from "@/actions";
import TitleMenu from "@/components/ui/top-menu/title/TitleMenu";
import Pagination from "@/components/ui/pagination/Pagination";
import { currencyFormat } from "@/utils";
import ProductImage from "@/components/product/product-image/ProductImage";
import SearchProductByName from "@/components/product/search-product/SearchProductByName";
import { Product } from "@/interface";


export default function ProductsPagePage() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPage, setTotalPage] = useState(1);
  const [searchName, setSearchName] = useState("");

  
useEffect(() => {
    const fetchProducts = async () => {
      const { products, totalPage } = await getPaginatedProductWithImages({
        page,
        name: searchName,
      });
      setProducts(products);
      setTotalPage(totalPage);
    };
    fetchProducts();
  }, [page, searchName]);

  return (
    <>
      <div className="mt-5">
        <TitleMenu title="Mantenimiento de productos" />
      </div>

      <div className="w-full flex gap-9 justify-end mt-6 max-md:flex-col-reverse">
        <Link
          className="text-center p-2 bg-black/80 text-white rounded hover:bg-black/60 cursor-pointer max-md:m-auto max-md:w-8/12"
          href="/admin/product/new"
        >
          Nuevo producto
        </Link>

        <SearchProductByName
          onSearch={(name) => {
            setSearchName(name);
            router.push(`/admin/products?name=${encodeURIComponent(name)}&page=1`);
          }}
        />
      </div>

      <div className="mb-10 mt-9">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th className="text-sm font-medium px-6 py-4 text-left">Imagen</th>
              <th className="text-sm font-medium px-6 py-4 text-left">Titulo</th>
              <th className="text-sm font-medium px-6 py-4 text-left">Precio</th>
              <th className="text-sm font-medium px-6 py-4 text-left">Genero</th>
              <th className="text-sm font-medium px-6 py-4 text-left">Stock</th>
              <th className="text-sm font-medium px-6 py-4 text-left">Tallas</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product.id} className="bg-white border-b hover:bg-gray-100">
                <td className="px-6 py-4 text-sm font-medium">
                  <Link href={`/product/${product.slug}`}>
                    <ProductImage
                      src={product.images?.[0]}
                      alt={product.title || ""}
                      width={80}
                      height={80}
                    />
                  </Link>
                </td>
                <td className="text-sm px-6">
                  <Link href={`/admin/product/${product.slug}`} className="hover:underline">
                    {product.title}
                  </Link>
                </td>
                <td className="text-sm px-6">{currencyFormat(product.price)}</td>
                <td className="text-sm px-6">{product.gender}</td>
                <td className="text-sm px-6">{product.inStock}</td>
                <td className="text-sm px-6">{product.sizes?.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination totalPages={totalPage} currentPage={page} />
      </div>
    </>
  );
}