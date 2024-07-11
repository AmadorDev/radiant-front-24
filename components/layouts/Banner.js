import { SwiperSlide } from "swiper/react";
import Carrusel from "../utils/Carrusel";
import Image from "next/image";
import React, { useState, useEffect , useContext} from "react";
import { useRouter } from "next/router";
import { getBanner } from "../../api/newApi";

import menuContext from "../../contexts/menu/menuContext";
export default function Banner() {
const {banner,setBanner} = useContext(menuContext)

  const [images, setImages] = useState(banner);
  const { locale } = useRouter();

  const getImages = async () => {
    try {
    
      const resp = await getBanner(locale);
      console.log(resp)
      if (resp?.rows > 0) {
        setImages(resp?.data);
        setBanner(resp?.data)
      }
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    if(banner.length === 0){
      getImages();
    }
    
  }, []);

  return (
    <div className="container mx-auto p-0 m-0">
      <Carrusel>
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div style={{ width: "100%" }}>
              <Image
                style={{ borderRadius:20}}
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
      <div className="divider-custom"></div>
    </div>
  );
};

