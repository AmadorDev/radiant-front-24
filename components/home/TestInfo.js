import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";



export default function TestInfo({ text }) {
  const { locale } = useRouter();
  const info = text?.filter((item, ind) => item.locale === locale)[0];
  return (
    <div className="container ">
      <div className="divider-custom"></div>
      <div className="flex flex-col md:flex-row justify-around   items-center  space-y-2 mx-2">
        <div className="item md:w-1/2 ">
          <div className="text-left">
            <h1 className="title-about sm:mb-2 md:mb-5">{info?.title}</h1>

            <p className="title-about-sub sm:mb-2 md:mb-5">{info?.content}</p>
            <Link href="/about-us">
            <button className="btn-v2 btn-black-v2 text-white">
              <span>{info?.btn}</span>
            </button></Link>
          </div>
        </div>
        <div className="item md:w-1/2  flex justify-end">
          {/* <img src="/dev/flaca.png" className="flex self-end "></img> */}
          <Image
            src="/images/model.png"
            className="flex self-end"
            width={421}
            height={379}
          ></Image>
        </div>
      </div>
      <div className="divider-custom"></div>
    </div>
  );
}
