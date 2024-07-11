import { SwiperSlide } from "swiper/react";
import Carrusel from "../utils/Carrusel";
import Image from "next/image";
import React, { useState, useEffect , useContext} from "react";
import { useRouter } from "next/router";
import { getLatest } from "../../api/newApi";

import menuContext from "../../contexts/menu/menuContext";
export default function SliderCover () {
const {cover_event ,upCover} = useContext(menuContext)

  const [images, setImages] = useState(cover_event);
  const { locale } = useRouter();
  console.log("cover",cover_event.length)
  const getImages = async () => {
    try {
      console.log("llamada")
      const resp = await getLatest(locale);
      if (resp?.rows > 0) {
        setImages(resp?.data);
        upCover(resp?.data)
      }
    } catch (error) {}
  };
  useEffect(() => {
    if(cover_event.length === 0){
      getImages();
    }
    
  }, []);

  return (
    <div className="container-fluid p-0 m-0">
      <Carrusel>
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div style={{ width: "100%" }}>
              <Image
                src={image?.url}
                width={1440}
                height={567}
                layout="responsive"
                alt="alt"
              ></Image>
            </div>
          </SwiperSlide>
        ))}
      </Carrusel>
    </div>
  );
};

