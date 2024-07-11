import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { getEventByLinea } from "../../../api/lineaApi";
import menuContext from "../../../contexts/menu/menuContext";
import ItemProd from "../../List/ItemProd";
import ModalLarge from "../../modals/ModalLarge";
import Divider from "../../utils/Divider";
import DividerDos from "../../utils/DividerDos";
import ModalAnimate from "../../utils/ModalAnimate";
import PaginateSimple from "../../utils/PaginateSimple";
import TitleAndSubtitle from "../../utils/TitleAndSubtitle";
import Button from "../../widtgets/Button";
import { CardProduct } from "../CardProduct";
import SliderOne from "../SliderOne";
import Image from "next/image"
import _trans from "../../../staticTranslations.json"
export default function ListEvent({ linea, locale }) {

  const { query} = useRouter();
  const [events, setEvents] = useState(null);
  const [paginate, setPaginate] = useState(null);
  const [numberPage, setNumberPage] = useState(null)
  const [show, setShow] = useState(false)
  const [modalImages,setModalImages] = useState(null)

  const info = _trans?.news_testing.filter((item, ind) => item.locale === locale)[0];
  async function getEvents(page) {
    try {
      const res = await getEventByLinea(linea?.id,page, locale);
     
      if (res?.status === "OK" && res?.rows > 0) {
        setEvents(res?.data.data);
         let next = res?.data.next_page_url;
         let prev = res?.data.prev_page_url;
        
        setPaginate({
          prev_page: prev?.split("=")[1]||null,
          next_page:next?.split("=")[1]||null,
          current_page:res?.data.current_page,
          total:res?.data.total
        });
      }
    } catch (error) {
     
      setEvents(null);
    }
  }

  function showModal(images){
  
    setModalImages(images)
    setShow(true);
  }
  useEffect(() => {
    if (linea?.id) {
      getEvents(numberPage);
    }

    return () => {};
  }, [linea?.id,numberPage]);

  return (
    <>
      {events ? (
        <>
          <Divider></Divider>
          <TitleAndSubtitle
            title={`${info?.title}`}
            description={``}
          ></TitleAndSubtitle>
          <DividerDos></DividerDos>
          <div className="row">
            {events?.map((item, index) => (
              <div className="col-12 col-md-4 cursor-pointer" key={index} onClick={() => showModal(item?.images)}>
                <CardProduct images={item?.images} title={item?.title} ></CardProduct>
              </div>
            ))}
          </div>
          {paginate?.total > process.env.TOTAL_SHOW_PAGINATE?<div className="row justify-content-center ">
            <div className="col-12 col-md-4 text-center">
              <PaginateSimple paginate={paginate} setNumberPage={setNumberPage}></PaginateSimple>
            </div>
          </div>:null}
          <ModalAnimate show={show} setShow={setShow} setYyLink={()=>console.log()}>
            <div className="my-5">
            <SliderOne navigation={true} loop={true}>
                {modalImages?.map((item,index)=>(
                   <SwiperSlide key={index} >
                   <Image  src={item?.url} width={560} height={450}></Image>
                 </SwiperSlide>
                ))}
            </SliderOne>
            </div>
          </ModalAnimate>
        </>
        
      ) : null}

      
    </>
  );
}
