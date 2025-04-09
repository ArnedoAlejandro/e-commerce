"use client"
import  { useState } from 'react'
import { IoAddCircleOutline,  IoRemoveCircleOutline } from 'react-icons/io5'

interface Props {
  quantity: number
}
const CuantitySelector = ( { quantity }: Props) => {

  const [ counter, setCounter ] = useState(quantity)

  const onCuantityChange = ( value : number ) => {
    if(counter + value <= 0) return
    setCounter( counter + value )

  }
  
  return (
    <div className='flex '>
      <button onClick={ () => onCuantityChange(-1) } ><IoRemoveCircleOutline  size={30}/></button>
      <span className='w-20 mx-3 px-5 rounded-md bg-gray-100 text-center'>{counter}</span>
      <button onClick={ () => onCuantityChange(+1)}><IoAddCircleOutline  size={30}/></button>
    </div>
  )
}

export default CuantitySelector