"use client"

import { IoAddCircleOutline,  IoRemoveCircleOutline } from 'react-icons/io5'

interface Props {
  quantity: number

  onQuantityChanged?: ( value: number ) => void
}
// TODO: COmponente que se encarga de seleccionar la cantidad de productos
const CuantitySelector = ( { quantity , onQuantityChanged }: Props) => {


  const onValueChanged = ( value : number ) => {

    if(quantity + value <= 0) return

    onQuantityChanged( quantity + value  )

  }
  
  return (
    <div className='flex '>
      <button onClick={ () => onValueChanged(-1) } ><IoRemoveCircleOutline  size={30}/></button>
      <span className='w-20 mx-3 px-5 rounded-md bg-gray-100 text-center'>{quantity}</span>
      <button onClick={ () => onValueChanged(+1)}><IoAddCircleOutline  size={30}/></button>
    </div>
  )
}

export default CuantitySelector