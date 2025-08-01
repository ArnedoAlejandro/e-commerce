export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { getPaginatedProductWithImages } from "@/actions";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Pagination from "@/components/ui/pagination/Pagination";
import TitleMenu from "@/components/ui/top-menu/title/TitleMenu";

interface Props {
  searchParams?: { page?: string | string[] };
}

export default async function Home({ searchParams }: Props) {
  const raw = searchParams?.page;
  const pageStr = Array.isArray(raw) ? raw[0] : raw;
  const page = Number.isFinite(Number(pageStr)) ? Number(pageStr) : 1;

  const { products, totalPage } = await getPaginatedProductWithImages({ page });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <>
      <TitleMenu title="Tienda" subtitle="Todos los productos" className="mb-2" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPage} />
    </>
  );
}