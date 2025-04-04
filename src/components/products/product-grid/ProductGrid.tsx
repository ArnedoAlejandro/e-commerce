import React from 'react'
import { Product } from '@/interface'
import ProductGridItem from './ProductGridItem'

interface Props {
  products : Product[]
}

const ProductGrid = ( { products }: Props ) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {/* Crear Componente Product */}
      
      {
        products.map(( product )=> (
          <ProductGridItem product={ product}  key={ product.slug }/>
        ))
      }
    </div>
  )
}

export default ProductGrid