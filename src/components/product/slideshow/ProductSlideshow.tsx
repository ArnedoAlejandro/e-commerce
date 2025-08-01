"use client";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperObject } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./slideshow.css";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}
const ProductSlideshow = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <div className={className}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.length === 0 ? (
          <SwiperSlide>
            <Image
              width={1024}
              height={800}
              alt={title}
              src={`/imgs/placeholder.png`}
              className="rounded-md object-fill"
            />
          </SwiperSlide>
        ) : (
          images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                width={1024}
                height={800}
                alt={title}
                src={image.startsWith("http") ? image : `/products/${image}`}
                className="rounded-md object-fill"
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.length === 0 ? (
          <SwiperSlide>
            <Image
              width={1024}
              height={800}
              alt={title}
              src={`/imgs/placeholder.png`}
              className="rounded-md object-fill"
              priority
            />
          </SwiperSlide>
        ) : (
          images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                width={1024}
                height={800}
                alt={title}
                src={image.startsWith("http") ? image : `/products/${image}`}
                className="rounded-md object-fill"
                priority
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default ProductSlideshow;
