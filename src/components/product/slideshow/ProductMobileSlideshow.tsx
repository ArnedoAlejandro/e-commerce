"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode,  Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/pagination';

import "./slideshow.css";
import Image from "next/image";
interface Props {

  images: string[];
  title: string;
  className?: string;
}
const ProductMobileSlideshow = ({ images, title, className }: Props) => {


  return (
    <div className={className}>
      <Swiper
      style={{
        width: "100vw",
        height: "500px"
      }}
        spaceBetween={10}
        pagination={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={600}
              height={500}
              alt={title}
              src={image.startsWith("http") ? image : `/products/${image}`}
              className=" object-fill "
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default ProductMobileSlideshow;
