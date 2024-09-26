import Image from "next/image";
import React from "react";
import AboutUs from "../components/about/AboutUs";
import MissionAndVision from "../components/about/MissionAndVision";
import OurValues from "../components/about/OurValues";
import Container from "../components/layouts/Container";
import Divider from "../components/utils/Divider";
import DividerDos from "../components/utils/DividerDos";
import translations from "../staticTranslations.json";
import { useRouter } from "next/router";
export default function index() {
  const translation = translations?.page_about;
  const services = translations?.services;
  console.log(translation);
  const { locale } = useRouter();
  const trans = translation.filter((item, ind) => item.locale === locale)[0];
  const service = services.filter((item, ind) => item.locale === locale)[0];
  return (
    <Container>
      <div className="container mx-auto">
        <div className="relative">
          <img
            src="/images/v2/aboutus.png"
            alt=""
            className="w-full"
            style={{ borderRadius: 13 }}
          />
          <div className="absolute bottom-0  w-full  flex justify-center items-end ">
            <div className="xs:text-base sm:text-2xl md:text-6xl font-normal text-white  font-['Varela'] uppercase">
              {trans?.title}
            </div>
          </div>
        </div>

        <div className="divider-custom"></div>

        <div className="flex flex-col md:flex-row md:justify-between justify-center md:space-x-14">
          <div className="flex-1 ">
            <div className="text-stone-950 text-[32px] font-normal font-['Varela']">
              {trans?.title2}
            </div>
            <div className=" text-stone-950 mt-3 text-[15px] font-normal font-['Varela'] about__description" dangerouslySetInnerHTML={{ __html: trans?.desc }}>
            </div>
          </div>
          <div
            style={{ borderRadius: 13 }}
            className="w-[346px] h-[346px]  mt-3 md:mt-0  self-center"
          >
            <img
              src="/images/v2/about-one.png"
              alt=""
              className="w-full "
              style={{ borderRadius: 13 }}
            />
          </div>
        </div>

        <div className="flex flex-col  md:flex-row  md:justify-between mt-5  items-center md:space-x-14">
          <div
            style={{ borderRadius: 13 }}
            className="w-[258px] h-[258px]  bg-slate-600"
          >
            <img
              src="/images/v2/about-two.png"
              alt=""
              className="w-full"
              style={{ borderRadius: 13 }}
            />
          </div>
          <div className="flex-1  mt-3 md:mt-0">
            <div className="text-stone-950 text-[15px] font-normal font-['Varela'] about__description" dangerouslySetInnerHTML={{ __html: trans?.desc2 }}>
            </div>
          </div>
        </div>
        <div className="divider-custom"></div>
        {/* <div className="text-center">
          <div className="text-stone-950 text-[32px] font-normal font-['Varela']">
            {trans?.ser_title}
          </div>
          <div className="text-stone-950 text-[15px] font-normal font-['Varela'] mx-auto w-full md:w-2/4 mt-3">
            {trans?.ser_desc}
          </div>
        </div> */}

        {/* <div className="flex flex-col md:flex-row justify-center items-center md:justify-between flex-wrap mt-5">
          <div className="about_card p-3 space-y-5 justify-center items-center flex flex-col mb-3 bg-blue-300">
            <img src="/images/v2/icon1.png" alt="" />
            <div className="text-stone-950 text-[23px] font-normal font-['Varela'] h-16">
              {service.title1}
            </div>
            <div className=" text-center text-stone-950 text-[15px] font-normal font-['Varela']">
            {service.sub1}
            </div>
          </div>
          <div className="about_card p-3 space-y-5 justify-center items-center flex flex-col mb-3">
            <img src="/images/v2/icon2.png" alt="" />
            <div className="text-stone-950 text-[23px] font-normal font-['Varela'] h-16 text-center">
            {service.title2}
            </div>
            <div className="text-center text-stone-950 text-[15px] font-normal font-['Varela'] ">
            {service.sub2}
            </div>
          </div>
          <div className="about_card p-3 space-y-5 justify-center items-center flex flex-col mb-3">
            <img src="/images/v2/icon3.png" alt="" />
            <div className="text-stone-950 text-[23px] font-normal font-['Varela'] h-16">
            {service.title3}
            </div>
            <div className="text-center text-stone-950 text-[15px] font-normal font-['Varela']">
            {service.sub3}
            </div>
          </div>
        </div> */}

        <div className="divider-custom"></div>
      </div>
    </Container>
  );
}
