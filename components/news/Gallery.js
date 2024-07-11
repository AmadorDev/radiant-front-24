import React, { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";

import { useRouter } from "next/router";
import { getGalery } from "../../api/newApi";
import Image from "next/image";
import ModalDefault from "../modals/ModalDefault";
import TitleAndSubtitle from "../utils/TitleAndSubtitle";
import DividerDos from "../utils/DividerDos";
import _trans from "../../staticTranslations.json";
import Divider from "../utils/Divider";
import CarruselGroup from "../utils/CarruselGroup";
import ModalAnimate from "../utils/ModalAnimate";
import SliderOne from "../lines/SliderOne";
function Gallery() {
  const { locale } = useRouter();
  const [images, setImages] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isimage, setIsimage] = useState(null);
  const info = _trans?.news_galleries.filter(
    (item, ind) => item.locale === locale
  )[0];

  const getGaleryList = async () => {
    try {
      const resp = await getGalery(locale);
      if (resp?.rows > 0) {
        setImages(resp?.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getGaleryList();
  }, []);

  const showImage = (image) => {
    setShowModal(true);
    setIsimage(image.url);
  };

  return (
    <>
      {images ? (
        <div>
          <Divider></Divider>
          <TitleAndSubtitle title={info?.title}></TitleAndSubtitle>
          <DividerDos></DividerDos>

          <div className="d-none d-md-block">
            <CarruselGroup duration={5000} numberGroup={4}>
              {images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image?.url}
                    width={230}
                    height={385}
                    onClick={() => showImage(image)}
                    className="cursor-pointer"
                  ></Image>
                </SwiperSlide>
              ))}
            </CarruselGroup>
          </div>
          <div className="d-block d-md-none">
            <CarruselGroup duration={5000} numberGroup={1}>
              {images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image?.url}
                    width={512}
                    height={849}
                    onClick={() => showImage(image)}
                    className="cursor-pointer"
                  ></Image>
                </SwiperSlide>
              ))}
            </CarruselGroup>
          </div>

          {/* <ModalDefault showModal={showModal} setShowModal={setShowModal}>
        {isimage ? (
          <Image
            src={isimage}
            width={350}
            height={550}
            
          ></Image>
        ) : null}
      </ModalDefault> */}

          <ModalAnimate
            show={showModal}
            setShow={setShowModal}
            setYyLink={() => console.log()}
          >
            <div className="flex justify-center items-center">
              {isimage ? (
                <Image src={isimage} width={412} height={748}></Image>
              ) : null}
            </div>
          </ModalAnimate>
        </div>
      ) : null}
    </>
  );
}

export default Gallery;
