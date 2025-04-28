"use client";
import { getSotckBySlug } from "@/actions";
import { titleFont } from "@/config/fonts";
import React, { useEffect, useState } from "react";

interface Props {
  slug: string;
}

const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const inStock = await getSotckBySlug(slug);
    setStock(inStock);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <h1
          className={`${titleFont.className} antialiased font-bold text-lg animate-pulse bg-gray-200`}
        >
          Stock: {stock}
        </h1>
      ) : (
        <h1 className={`${titleFont.className} antialiased font-bold text-lg`}>
          Stock: {stock}
        </h1>
      )}
    </>
  );
};

export default StockLabel;
