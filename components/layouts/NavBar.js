import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { useRouter } from "next/router";
import menuContext from "../../contexts/menu/menuContext";
import translations from "../../staticTranslations.json";
export default function NavBar({ defaultMenu, menu_options, locale, lag }) {
  const translate = translations?.top_header;
  const txtTranslate = translate?.filter(
    (item, ind) => item.locale === locale
  )[0];

  const searchIcon = useRef(null);
  const stickyRef = useRef(null);
  const scrollRef = useRef(false);

  const [hoveredMenu, setHoveredMenu] = useState(false);

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

  const OpenMenu = (hover) => {
    console.log(hover);
    if (hover) {
      setHoveredMenu(hover);
    }
  };

  const CloseMenu = () => {
    if (hoveredMenu) {
      setHoveredMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerSticky);
    return () => window.removeEventListener("scroll", headerSticky);
  }, []);

  //sticky-header :: hover nav scroll

  return (
    <header>
      <div className="main_header">
        <div className="header_middle " ref={stickyRef}>
          <div className="container">
            <div className="flex justify-between items-start">
              <div className="div-hidden">
                <button className="btn-v2 btn-cancel-v2 max-w mr-2">
                  <span>{txtTranslate.world}</span>
                </button>
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
                {/* 
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
                </div> */}

                <div className="flex items-center">
                  <a
                    href="https://icons.getbootstrap.com/icons/whatsapp/"
                    target="blank_"
                  >
                    <img
                      src="/images/flags/tiktok.svg"
                      alt=""
                      className="mr-2"
                    />
                  </a>
                  <a
                    href="https://icons.getbootstrap.com/icons/whatsapp/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/images/flags/facebook.svg"
                      alt=""
                      className="mr-2"
                    />
                  </a>
                  <a
                    href="https://icons.getbootstrap.com/icons/whatsapp/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/flags/instagram.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-items-center relative mt-4">
              <div className="col-12 ">
                <div className="header_right_info menu_position  justify-content-center">
                  {/*main menu start*/}
                  <div className="main_menu text__li_final">
                    <nav>
                      <ul>
                        {defaultMenu
                          .filter((p) => p.locale === locale)
                          .map((item, index) => (
                            <div
                              key={index}
                              onMouseEnter={() => OpenMenu(item.hover)}
                            >
                              <MenuItem
                                item={item}
                                className="align-self-center px-4"
                              ></MenuItem>
                            </div>
                          ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              {hoveredMenu && (
                <div
                  className="absolute top-10 z-50 h-auto bg-white "
                  onMouseLeave={() => CloseMenu()}
                >
                  <div className="flex justify-center p-5 space-x-10">
                    <div>
                      <div className="mb-3 sub-menu-dy-">Resultado deseado</div>
                      {menu_options
                        ?.filter((p) => p.locale === lag && p.category_id == 1)
                        .map((item, index) => (
                          <div key={index} className=" sub-menu-dy mb-1">
                            <Link href={"/products/" + item.line_id}>
                              {item.short_name}
                            </Link>
                          </div>
                        ))}
                    </div>

                    <div>
                      <div className="mb-3 sub-menu-dy-">Líneas</div>
                      {menu_options
                        ?.filter((p) => p.locale === lag && p.category_id == 1)
                        .map((item, index) => (
                          <div key={index} className="sub-menu-dy mb-1">
                            <Link href={"/products/" + item.line_id}>
                              {item.name}
                            </Link>
                          </div>
                        ))}
                    </div>

                    <div>
                      <div className="mb-3 sub-menu-dy-">
                        Productos de cabina
                      </div>
                      {menu_options
                        ?.filter((p) => p.locale === lag && p.category_id == 2)
                        .map((item, index) => (
                          <div key={index} className="sub-menu-dy mb-1">
                            <Link href={"/products/" + item.line_id}>
                              {item.name}
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
