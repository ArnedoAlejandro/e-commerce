import ProductGrid from "@/components/products/product-grid/ProductGrid";
import TitleMenu from "@/components/ui/top-menu/title/TitleMenu";
import { initialData } from "@/seed/seed";


const products = initialData.products




export default function Home() {
  return (
    <>

      <TitleMenu title="Tienda" subtitle="Todos los productos" className="mb-2"/>

      <ProductGrid products={products} />
    
    </>
  );
}
