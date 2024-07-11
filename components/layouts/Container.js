import Head from "next/head";
import { useEffect } from "react";
import NavBar from "./NavBar";
import NavHeader from "./NavHeader";
import RegisterNow from "./RegisterNow";
import Footer from "./Footer";
import ScriptsEx from "./ScriptsEx";
import Carrusel from "../utils/Carrusel";
import { SwiperSlide } from "swiper/react";
import HeadGlobal from "./HeadGlobal";
import DividerDos from "../utils/DividerDos";
import Image from "next/image";
import Link from "next/link";
import ButtonWsp from "../ButtonWsp";

export default function Container({ footer = true, children }) {
  return (
    <>
      <ScriptsEx></ScriptsEx>
      <NavHeader></NavHeader>
      <NavBar></NavBar>
      {children}
      {/* <ButtonWsp></ButtonWsp> */}

      {/* <RegisterNow></RegisterNow> */}

      {footer ? <Footer /> : null}
    </>
  );
}
