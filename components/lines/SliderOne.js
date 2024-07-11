import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay ,Pagination} from "swiper";

export default function SliderOne({ children,loop ,navigation=false}) {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={loop}
        className="mySwiper"
        navigation={navigation}
        modules={[Autoplay, Pagination,Navigation]}
      >
        {children}
      </Swiper>
    </>
  );
}
