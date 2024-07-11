import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRouter } from "next/router";
import CarruselGroup from "../utils/CarruselGroup";
import Divider from "../utils/Divider";
import DividerDos from "../utils/DividerDos";
import TitleAndSubtitle from "../utils/TitleAndSubtitle";
import Gallery from "../news/Gallery";

export default function Galery({ text }) {
  const { locale } = useRouter();
  const info = text?.filter((item, ind) => item.locale === locale)[0];
  return (
    <div>
      {/* <Divider></Divider>
      <TitleAndSubtitle
        title={`${info?.galery}`}
        subtitle={`${info?.shortname}`}
      />
      <DividerDos></DividerDos> */}
      <Gallery></Gallery>
    </div>
  );
}
