"use client";
import { useState } from "react";
import { Product } from "@/interface";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}
const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  const mouseEnter = () => {
    setDisplayImage(product.images[1]);
  };

  const mouseLeave = () => {
    setDisplayImage(product.images[0]);
  };

  return (
    <div className="rounded-md overflow-hidden fade-id ">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayImage}`}
          alt={product.title}
          width={500}
          height={500}
          className="w-full object-cover rounded-md"
          onMouseEnter={() => mouseEnter()}
          onMouseLeave={() => mouseLeave()}
        />
      </Link>

      <div className=" p-4 flex flex-col">
        <Link
          href={`/product/${product.slug}`}
          className="mb-2 font-semibold hover:text-blue-500 transition-all duration-300 "
        >
          {product.title}
        </Link>

        <span>${product.price}</span>
      </div>
    </div>
  );
};

export default ProductGridItem;
