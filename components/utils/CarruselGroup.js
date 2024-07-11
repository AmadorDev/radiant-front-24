import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination,Autoplay, Navigation } from "swiper";
export default function CarruselGroup({
  children,
  classname,
  numberGroup,
  duration = 5000,
}) {
  return (
    <div className="container my-4">
      <Swiper
        slidesPerView={numberGroup}
        spaceBetween={30}
        slidesPerGroup={numberGroup}
        autoplay={{
          delay: duration,
          disableOnInteraction: false,
        }}
        loop={true}
        // centeredSlides={true}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination,Autoplay, Navigation]}
        className={classname + " " + "mySwiper"}
      >
        {children}
      </Swiper>
    </div>
  );
}
