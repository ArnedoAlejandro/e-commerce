import Image from 'next/image'
import React from 'react'


interface Props {
  src?: string;
  alt: string | "";
  className?: React.HTMLAttributes<HTMLImageElement>['className'];
  width?: number;
  height?: number;
}

const ProductImage = ( {
  src, alt, className, width, height
} : Props) => {

  const localSrc = (src) 
    ? src.startsWith("http") 
      ? src 
      : `/products/${src}` 
    : "/imgs/placeholder.png";



  return (
    <Image  className={ className ? className : "w-20 h-20 object-cover rounded"} src={localSrc} height={height} width={width} alt={alt}/> 
    
  )
}

export default ProductImage
