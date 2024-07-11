import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import SliderOne from "../SliderOne";

export default function DetailImageProduct({ images }) {
  
  return (
    <div className="row justify-content-center">
      <div className={`col-12 col-md-12  image-container`}>
        <SliderOne loop={images?.length > 1 ? true : false}>
          {images?.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image?.url}
                width={400}
                height={350}
                //  layout="responsive"
                className={`imaged`}
              ></Image>
              
            </SwiperSlide>
          ))}
        </SliderOne>
      </div>
    </div>
  );
}
