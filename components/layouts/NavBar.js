import React, { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { useRouter } from "next/router";
import menuContext from "../../contexts/menu/menuContext";
import translations from "../../staticTranslations.json";
export default function NavBar() {
  const { defaultMenu } = useContext(menuContext);
  console.log(defaultMenu);
  const { locale, locales, asPath } = useRouter();

  const translate = translations?.top_header;
  const txtTranslate = translate?.filter(
    (item, ind) => item.locale === locale
  )[0];

  const searchIcon = useRef(null);
  const stickyRef = useRef(null);
  const scrollRef = useRef(false);
  function handlerEvent(e) {
    if (searchIcon.current.style.display === "block") {
      searchIcon.current.style.display = "none";
    } else {
      searchIcon.current.style.display = "block";
    }
  }
  const headerSticky = () => {
    if (window.scrollY > 70) {
      stickyRef.current?.classList.add("sticky");
    } else {
      stickyRef.current?.classList.remove("sticky");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerSticky);
    return () => window.removeEventListener("scroll", headerSticky);
  }, []);

  return (
    <header>
      <div className="main_header">
        <div className="header_middle sticky-header" ref={stickyRef}>
          <div className="container border-gray">
            <div className="flex justify-between items-start">
              <div className="div-hidden">
                <Link href="/salons">
                  <button className="btn-v2 btn-black-v2 max-w">
                    <span>{txtTranslate.salon}</span>
                  </button>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <img src="/radiant.png" alt="" className="cursor-pointer" />
                </Link>
              </div>
              <div className="flex space-x-3 items-center justify-center div-hidden">
                <button className="btn-v2 btn-cancel-v2 max-w">
                  <span>{txtTranslate.world}</span>
                </button>

                <div className="self-center">
                  <Link href={asPath} locale={"es-ES"}>
                    <img
                      src="/images/flags/p.svg"
                      width={30}
                      height={32}
                      alt="Español"
                      className="cursor-pointer"
                    ></img>
                  </Link>
                </div>

                <div className="self-center">
                  <Link href={asPath} locale={"en-US"} className="bg-blue-500">
                    <img
                      src="/images/flags/usa.svg"
                      width={30}
                      height={32}
                      alt="Ingles"
                      className="  cursor-pointer"
                    ></img>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-items-center">
              <div className="col-12 ">
                <div className="header_right_info menu_position  justify-content-center">
                  {/*main menu start*/}
                  <div className="main_menu text_li_per">
                    <nav>
                      <ul>
                        {defaultMenu
                          .filter((p) => p.locale === locale)
                          .map((item, index) => (
                            <MenuItem
                              item={item}
                              key={index}
                              className="align-self-center px-4"
                            ></MenuItem>
                          ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
