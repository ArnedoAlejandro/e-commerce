import Link from 'next/link'
import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

const EmptyPage = () => {
  return (
    <div className='flex justify-center items-center h-screen gap-5'>
      <IoCartOutline size={100} />

      <div>
        <h1 className='text-3xl'>El carrito esta vacio</h1>
        <Link className='text-xl underline text-blue-500' href="/">Ir a la tienda</Link>
      </div>
    </div>
  )
}

export default EmptyPage