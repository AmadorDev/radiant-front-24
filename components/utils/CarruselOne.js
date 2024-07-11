import React, { useEffect } from "react";

import "swiper/css/bundle";
// Import Swiper styles
// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CarruselSolo({children,className}) {
  useEffect(() => {}, []);

  return (
    <div className="container">
      <Swiper
      
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={"mySwiper"+" "+className}
      >
        {children}
        
        
      </Swiper>
    </div>
  );
 
}
