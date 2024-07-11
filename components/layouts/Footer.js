import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import translations from "../../staticTranslations.json";
import RegisterNow from "./RegisterNow";
export default function Footer() {
  const { locale } = useRouter();
  const translate = translations?.menu_footer;
  const trans = translate?.filter((item, ind) => item.locale === locale)[0];

  return (
    <div className="bg-gray-2">
      <div className="divider-custom"></div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-10 space-y-5 md:space-y-0  ">
          <div className="flex-1 ">
            <div className="flex justify-between">
              <div>
                <div className="text-stone-950 text-[15px]  font-['Varela']">
                  Visítanos
                </div>
                <div>
                  <div className="flex space-x-2">
                    <div>
                      <img src="/images/v2/icon_location.png" alt="" />
                    </div>
                    <div className="w-[134px] h-[29.25px] text-stone-950 text-[15px]  font-['Varela'] ">
                      Av. electronic 555 miraflores - Lima
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-stone-950 text-[15px]  font-['Varela']">
                  Visítanos
                </div>
                <div>
                  <div className="flex space-x-2">
                    <div>
                      <img src="/images/v2/icon_phone.png" alt="" />
                    </div>
                    <div className="w-[134px] h-[29.25px] text-stone-950 text-[15px]  font-['Varela']">
                      Av. electronic 555 miraflores - Lima
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-5 space-x-5 justify-between md:justify-start ">
              <div className=" cursor-pointer border-b border-gray-900">
                <span className="mx-2 footer-redes-text">instagram</span>
              </div>
              <div className="cursor-pointer border-b border-gray-900">
                <span className="mx-2 footer-redes-text">facebook</span>
              </div>
              <div className="cursor-pointer  border-b border-gray-900">
                <span className="mx-2 footer-redes-text">twitter</span>
              </div>
            </div>
          </div>
          <div className="bg-white   border border-white"></div>
          <div className="flex-1  w-full ">
            <div className="text-stone-950 text-xl font-normal font-['Varela']">
              <p className="pb-3">{trans?.text}</p>
              <RegisterNow
                text_btn={trans?.btn}
                text_placeholder={trans?.placeholder}
              ></RegisterNow>
            </div>
          </div>
        </div>
        <div className="divider-custom"></div>
        <div className="bg-white  border border-white"></div>
        <div className="py-4 flex justify-between">
          <div className="w-40 h-[9.51px] text-neutral-500 text-[10px] font-normal font-['Varela']">
            2023 web desarrollada por NKSN
          </div>
          <div className="flex space-x-2">
            <img
              src="/images/v2/icon_instagram.png"
              alt=""
              className="w-[16px] cursor-pointer"
            />
            <img
              src="/images/v2/icon_facebook.png"
              alt=""
              className="w-[16px] cursor-pointer"
            />
            <img
              src="/images/v2/icon_linkedin.png"
              alt=""
              className="w-[16px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
