import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
  params: { id: string }
}

const CategoryId = ( {params}: Props) => {

  const { id } = params

  if( id !== 'men' && id !== 'women' && id !== 'kid' ) {
    notFound()
  }


  return (
    <div>Category Id</div>
  )
}

export default CategoryId