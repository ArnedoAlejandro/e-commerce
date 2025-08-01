export interface Product {
  id: string;
  title: string | null;
  description: string | null;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  // type: ValidTypes;
  gender: Category;
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  gender: Category;
  size: Size;
  image: string;
  quantity: number;
}

export interface ProductImage {
  id: number;
  url: string;
  productId: string;
}

type Category = "men" | "women" | "kid" | "unisex";
export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";
export type ValidTypes = "shirts" | "pants" | "hoodies" | "hats";
