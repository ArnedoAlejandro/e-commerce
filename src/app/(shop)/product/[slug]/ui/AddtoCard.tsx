"use client"
import { useState } from 'react';
import { CartProduct, Product, Size } from '@/interface';
import QuantitySelector from '@/components/product/cuantity-selector/QuantitySelector';
import SizeSelector from '@/components/product/size-selector/SizeSelector';
import { useCartStore } from '@/store';

interface Props {
  product: Product
}

const AddtoCard = ({ product } : Props) => {


  const addProductToCart = useCartStore( state => state.addProductToCart )

  const [ size, setSize ] = useState<Size | undefined  >()
  const [ quantity, setQuantity ] = useState<number>(1)
  const [ posted, setPosted ] = useState<boolean>(false)

  const addToCart = () =>{
    setPosted(true)
    if(!size)  return
  

    const cartProduct: CartProduct={
      id: product.id,
      slug: product.slug,
      title: product.title || "Producto sin título",
      price: product.price,
      gender: product.gender, 
      size: size,
      image: product.images[0],
      quantity: quantity
    }


    addProductToCart(cartProduct)
    


    setPosted(false)
    setSize(undefined)
    setQuantity(1)

  }


  return (
    <>
      {/* Mensaje de rror en caso que no tengal un size seleccionado */}
      {
        posted && !size && <span className="mt-4  text-red-700  fade-in" role="alert">Debes seleccionar una talla*</span>
      }

      {/* Selector de talle */}
      <SizeSelector selectedSize={ size }  availableSize={ product.sizes }  onSizeChange={ setSize }/>


      {/* Selector de cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChanged={ setQuantity }/>
    
      <button 
        onClick={ addToCart }
        className="bg-black/80 hover:bg-black/60 cursor-pointer text-white font-bold py-2 px-4 rounded mt-5">
        Agregar al carrito
      </button>
          
    
    
    </>
  )
}

export default AddtoCard