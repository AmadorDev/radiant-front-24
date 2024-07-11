import React from "react";
import { SwiperSlide } from "swiper/react";
import SliderOne from "./SliderOne";
import Image from "next/image";

export const CardProduct = ({
  images,
  title,
  description,
  children,
  click,
}) => {
  console.log("sfsdfsdfds,images", click);
  return (
    <div className="p-3 my-5 " style={{ width: "100%" }}>
      <SliderOne loop={images?.length > 1 ? true : false}>
        {images?.map((image, index) => (
          <SwiperSlide key={index} >
            <Image  src={image?.url} width={340} height={250}></Image>
          </SwiperSlide>
        ))}
      </SliderOne>
      <div className="card-body text-center">
        <p className="card-title item_title uppercase">{title}</p>
        {description ? (
          <p
            className="card-text item_subtitle  "
            dangerouslySetInnerHTML={{
              __html: `${description?.slice(0, process.env.STR_SLICE)}...`,
            }}
          ></p>
        ) : null}
        {children}
      </div>
    </div>
  );
};
