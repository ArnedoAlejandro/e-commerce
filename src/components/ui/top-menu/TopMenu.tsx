"use client"
import Link from 'next/link'
import { titleFont } from '@/config/fonts'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'
import { useUIStore } from '@/store'

export const TopMenu = () => {

  const openSideMenu = useUIStore( (state) => state.openSideMenu )


  return (
    <nav className="py-2 flex px-5 justify-between items-center w-full">
      {/* LATERAL IZQUIERDO */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
        </Link>
      </div>

      {/* CENTRO */}
      <div className='hidden sm:block '>
        <Link href="/gender/men">
          <span className='m-2 p-2 rounded-md transition-all hover:bg-gray-200 '>Hombres</span>
        </Link>
        <Link href="/gender/women">
          <span className='m-2 p-2 rounded-md transition-all hover:bg-gray-200 '>Mujeres</span>
        </Link>
        <Link href="/gender/kid">
          <span className='m-2 p-2 rounded-md transition-all hover:bg-gray-200 '>Niños</span>
        </Link>
      </div>

      {/* LATERAL DERECHO*/}
      <div className='flex gap-6 items-center'>

        <Link href="/search">
          <IoSearchOutline className='w-7 h-7'/>
        </Link>

        <Link href="/cart">
          <div className='relative'>
            <span className='absolute text-xs rounded-full px-1 font-bold -top-1 -right-2 bg-gray-900 text-white'>3</span>
            <IoCartOutline className='w-7 h-7'/>
          </div>
        </Link>

        <button 
          className='px-2 py-1 0  transition-all duration-300 hover:bg-gray-200 cursor-pointer rounded-md '
          onClick={() => openSideMenu()}
        >
          Menu
        </button>
        
      </div>


    </nav>
  )
}
