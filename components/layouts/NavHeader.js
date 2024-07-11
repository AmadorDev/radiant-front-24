import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import menuContext from "../../contexts/menu/menuContext";
import MenuItem from "./MenuItem";
import translations from "../../staticTranslations.json";

export default function NavTitle() {
  const { defaultMenu } = useContext(menuContext);
  const { locale, locales, asPath } = useRouter();

  const translate = translations?.top_header;
  const txtTranslate = translate?.filter(
    (item, ind) => item.locale === locale
  )[0];

  function showMenu() {
    document.querySelector(".off_canvars_overlay");
    document.querySelector(".offcanvas_menu_wrapper");
    console.log("show");
  }

  function hideMenu() {
    document.querySelector(".off_canvars_overlay");
    document.querySelector(".offcanvas_menu_wrapper");
    console.log("hidden");
  }

  function showTogleMenu() {
    let off_canvars_overlay = document.querySelector(".off_canvars_overlay");
    let offcanvas_menu_wrapper = document.querySelector(
      ".offcanvas_menu_wrapper"
    );
    if (off_canvars_overlay.classList.contains("active")) {
      off_canvars_overlay.classList.remove("active");
      offcanvas_menu_wrapper.classList.remove("active");
    } else {
      off_canvars_overlay.classList.add("active");
      offcanvas_menu_wrapper.classList.add("active");
    }
  }

  return (
    <div>
      <>
        {/*header area start*/}
        {/*offcanvas menu area start*/}
        <div className="off_canvars_overlay"></div>
        <div className="offcanvas_menu">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="canvas_open" onClick={showTogleMenu}>
                  <a>
                    <i className="icon-menu" />
                  </a>
                </div>
                <div className="offcanvas_menu_wrapper">
                  <div className="canvas_close" onClick={showTogleMenu}>
                    <a>
                      <i className="ion-android-close" />
                    </a>
                  </div>
                  <div className="language_currency top">
                    <ul className="flex flex-col items-center justify-center">
                      <li className="space-y-3">
                        <button className="btn-v2 btn-cancel-v2 max-w">
                          <span> {txtTranslate?.world}</span>
                        </button>
                        <Link href="/salons">
                          <button className="btn-v2 btn-black-v2 max-w">
                            <span>{txtTranslate?.salon}</span>
                          </button>
                        </Link>
                      </li>
                      <div className="flex  justify-between">
                        <li>
                          <Link href={asPath} locale={"es-ES"}>
                            <img
                              src="/images/flags/p.svg"
                              width={30}
                              height={30}
                              alt="Español"
                              className="img-ad cursor-pointer mr-1"
                            ></img>
                          </Link>
                        </li>

                        <li>
                          <Link href={asPath} locale={"en-US"}>
                            <img
                              src="/images/flags/usa.svg"
                              width={30}
                              height={30}
                              alt="Ingles"
                              className="img-ad  cursor-pointer ml-1"
                            ></img>
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>

                  {/* <div className="header_account_area">
                    <div className="header_account_list search_list">
                      <a href="">
                        <i className="icon-magnifier icons" />
                      </a>
                      <div className="dropdown_search">
                        <form action="#">
                          <input
                            placeholder="Search entire store here ..."
                            type="text"
                          />
                          <button type="submit">
                            <i className="icon-magnifier icons" />
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="header_account_list  mini_cart_wrapper">
                      <a href="">
                        <i className="icon-bag icons" />
                      </a>
                    </div>
                  </div> */}
                  <div id="menu" className="text-left">
                    <ul className="offcanvas_main_menu">
                      {defaultMenu
                        .filter((p) => p.locale === locale)
                        .map((item, index) => (
                          <MenuItem
                            item={item}
                            key={index}
                            className="menu-item-has-children"
                          ></MenuItem>
                        ))}
                    </ul>
                  </div>
                  <div className="offcanvas_footer">
                    <span>
                      <a href="#">
                        <i className="fa fa-envelope-o" />{" "}
                        company@yourdomain.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*offcanvas menu area end*/}
      </>
    </div>
  );
}
