import Image from "next/image";
import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import CarruselGroup from "./utils/CarruselGroup";
import FullScreenVideo from "./utils/FullScreenVideo";
import ModalAnimate from "./utils/ModalAnimate";
import VideoItemHome from "./utils/VideoItemHome";

function Videos() {
  const [showModal, setShowModal] = useState(false);
  const [urlSelected, setUrlSelected] = useState(null)
  const images = [
    { url: "/realeas_videos/baby_blody.jpg", url_video: "9Cq2-GB3hbw" },
    { url: "/realeas_videos/dream_chocolate.jpg", url_video: "jQFORSrZ1RM" },
    { url: "/realeas_videos/golden_honey.jpg", url_video: "QNhCYDwEeu4" },
    { url: "/realeas_videos/rock.jpg", url_video: "Lafy5ycNZ7s" },
  ];

  const showDetail = async (url) => {
    setShowModal(true);
    setUrlSelected(url)
    console.log(url);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="d-none d-md-block">
          <CarruselGroup duration={5000} numberGroup={4}>
            {images?.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.url}
                  width={230}
                  height={385}
                  onClick={() => showDetail(image.url_video)}
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
                  src={image.url}
                  width={512}
                  height={849}
                  onClick={() => showDetail(image.url_video)}
                  className="cursor-pointer"
                ></Image>
              </SwiperSlide>
            ))}
          </CarruselGroup>
        </div>
      </div>

      {showModal ? (
        <ModalAnimate
          show={showModal}
          setShow={setShowModal}
          className="w-full md:w-3/4"
          setYyLink={() => console.log()}
        >
          <div className=" flex justify-center items-center ">
            <FullScreenVideo
              link={urlSelected}
              className="w-96"
            ></FullScreenVideo>
          </div>
        </ModalAnimate>
      ) : null}
    </div>
  );
}

export default Videos;
