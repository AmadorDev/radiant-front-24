import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import {
  getEventByProductAndLine,
  getProductsDetail,
  getVideosByProductAndLine,
} from "../../../api/productApi";
import menuContext from "../../../contexts/menu/menuContext";
import Breakcrums from "../../layouts/Breakcrums";
import ItemBreack from "../../layouts/ItemBreack";
import DetailSanite from "../../utils/DetailSanite";
import Divider from "../../utils/Divider";

import DetailImageProduct from "./DetailImageProduct";


export default function Product({ product, query, locale }) {
  const { line_st } = useContext(menuContext);
  const [events, setEvents] = useState(null);
  const [videos, setVideos] = useState(null);
  const [paginate, setPaginate] = useState(null);
  const [page, setPage] = useState(null);

  async function getEvents(page) {
    try {
      const res = await getEventByProductAndLine(
        query?.line,
        query?.product,
        page,
        locale
      );
      if (res?.total > 0) {
        setEvents(res?.data);
        let next = res?.next_page_url;
        let prev = res?.prev_page_url;

        setPaginate({
          prev_page: prev?.split("=")[1] || null,
          next_page: next?.split("=")[1] || null,
          current_page: res?.data.current_page,
          total: res?.total,
        });
      }
    } catch (error) {}
  }

  async function getVideos() {
    try {
      const res = await getVideosByProductAndLine(
        query?.line,
        query?.product,
        locale
      );
      if (res?.rows > 0) {
        setVideos(res?.data);
      }
    } catch (error) {
      setVideos(null);
    }
  }

  const urlImg =
    product?.images.length > 0
      ? product?.images[0].url
      : process.env.LOGO_IMAGE;

  useEffect(() => {
    // getEvents(page);
    // getVideos();
  }, [query, page]);

  return (
    <>
      <Breakcrums>
        <ItemBreack title={line_st?.line} ruta="/"></ItemBreack>
        <ItemBreack
          title={product?.line}
          ruta={`/lineas/${query?.line}`}
        ></ItemBreack>
        <ItemBreack title={product?.data.name}></ItemBreack>
      </Breakcrums>
      <div className="container">
        <Divider></Divider>
        <DetailImageProduct images={product?.images} />
        <Divider></Divider>
        <DetailSanite
          title={product?.data.name}
          content={product?.data.description}
        ></DetailSanite>

        {/* ******************************EVENTS */}
        {/* {events ? (
          <ProductListEvent events={events} query={query}></ProductListEvent>
        ) : null}
        {paginate?.total > process.env.TOTAL_SHOW_PAGINATE ? (
          <div className="row justify-content-center ">
            <div className="col-12 col-md-4 text-center">
              <PaginateSimple
                paginate={paginate}
                setNumberPage={setPage}
              ></PaginateSimple>
            </div>
          </div>
        ) : null} */}
        {/* *********************************END EVENTS */}

        {/* ******************************VIDEOS */}
        {/* <ProductListVideos videos={videos} /> */}
        {/* *********************************END VIDEOS */}
      </div>
    </>
  );
}
