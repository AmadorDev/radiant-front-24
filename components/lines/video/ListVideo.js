import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { getVideoByLinea } from "../../../api/lineaApi";
import menuContext from "../../../contexts/menu/menuContext";
import ItemProd from "../../List/ItemProd";
import Divider from "../../utils/Divider";
import DividerDos from "../../utils/DividerDos";
import FullScreenVideo from "../../utils/FullScreenVideo";
import ItemVideo from "../../utils/ItemVideo";
import ModalAnimate from "../../utils/ModalAnimate";
import ModalTa from "../../utils/ModalTa";
import TitleAndSubtitle from "../../utils/TitleAndSubtitle";
import Button from "../../widtgets/Button";

export default function ListVideo({ linea, locale }) {
  const { line_st } = useContext(menuContext);

  const [videos, setVideos] = useState(null);

  const [ytLink, setYyLink] = useState(null);
  const [showModal, setShowModal] = useState(false);

  async function getVideos() {
    try {
      const res = await getVideoByLinea(linea?.id, locale);
      if (res?.status === "OK" && res?.rows > 0) {
        setVideos(res?.data);
      }
    } catch (error) {
      setVideos(null);
    }
  }

  function setLinkVideo(link) {
    setYyLink(link);
    setShowModal(true);
  }

  useEffect(() => {
    if (linea?.id) {
      getVideos();
    }

    return () => {};
  }, [linea?.id]);
  return (
    <>
      {videos ? (
        <>
          <Divider></Divider>
          <TitleAndSubtitle
            title={`${line_st?.video}`}
            description={``}
          ></TitleAndSubtitle>
          <DividerDos></DividerDos>

          <div className="row h-100 w-100">
            <ModalAnimate
              show={showModal}
              setShow={setShowModal}
              setYyLink={setYyLink}
            >
              {ytLink ? (
                <FullScreenVideo
                  link={ytLink}
                  setYyLink={setYyLink}
                ></FullScreenVideo>
              ) : null}
            </ModalAnimate>
          </div>
          <div className="row justify-around div-videos">
            {videos?.map((item, index) => (
              <ItemVideo key={index} link={item?.link}>
                <p className="item_title text-center my-4">{item?.title}</p>
                <p className="mx-3 h-20">{item?.content}</p>
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                  <Button
                    className="mt-3"
                    onClick={() => setLinkVideo(item?.link)}
                  >
                    {line_st?.watch}
                  </Button>
                  <a href={`https://youtu.be/${item?.link}`} target="_blank">
                    <Button className=" mt-3">{line_st?.yt}</Button>
                  </a>
                </div>
              </ItemVideo>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}
