import React, { useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Carrusel({ children, className }) {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className={"mySwiper sliderwidth" + " " + className}
      >
        {children}
      </Swiper>
    </>
  );
}
