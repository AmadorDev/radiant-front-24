import Head from "next/head";
import { useContext, useEffect } from "react";
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
import menuContext from "../../contexts/menu/menuContext";
import { useRouter } from "next/router";

export default function Container({ footer = true, children }) {
  const { defaultMenu, menu_options } = useContext(menuContext);
  const { locale, locales, asPath } = useRouter();
  const lag = locale.split("-")[0] || "es";
  return (
    <>
      <ScriptsEx></ScriptsEx>
      <NavHeader
        menu_options={menu_options}
        defaultMenu={defaultMenu}
        lag={lag}
        locale={locale}
        asPath={asPath}
      ></NavHeader>
      <NavBar
        menu_options={menu_options}
        defaultMenu={defaultMenu}
        lag={lag}
        locale={locale}
        asPath={asPath}
      ></NavBar>
      {children}
      {/* <ButtonWsp></ButtonWsp> */}

      {/* <RegisterNow></RegisterNow> */}

      {footer ? <Footer /> : null}
    </>
  );
}
