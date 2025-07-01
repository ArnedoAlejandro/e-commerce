import { getCategories, getProductBySlug } from '@/actions'
import TitleMenu from '@/components/ui/top-menu/title/TitleMenu'
import { redirect } from 'next/navigation'
import React from 'react'
import { ProductForm } from './ui/ProductForm';



interface Props{
  params: Promise<{ slug: string }>;
}

const ProductPage = async ({params}:Props) => {


  const { slug } = await params;

  const [ product, categories ] = await Promise.all([
    getProductBySlug(slug),
    getCategories()
  ])
  
  

  if(!product){
    redirect("/admin/products")
  }

  const title = slug === "new" ? "Nuevo producto " : "Editar producto"

  
  return (
    <div>
      <TitleMenu title={title} />

      <ProductForm product={product} categories={categories} />
    </div>
  )
}

export default ProductPage
