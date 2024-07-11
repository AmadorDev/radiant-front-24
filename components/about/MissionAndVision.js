import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import translations from "../../staticTranslations.json";
import DividerDos from "../utils/DividerDos";

export default function MissionAndVision() {

  const { locale } = useRouter();
  const translate = translations?.page_about.mision_vision;
  const txtTranslate = translate?.filter(
    (item, ind) => item.locale === locale
  )[0];
  console.log(txtTranslate)
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="item w-full">
          <Card image="mision" title={txtTranslate?.title_m} description={txtTranslate?.description_m} />
        </div>
        <div className="item w-full">
          <Card image="vision" title={txtTranslate?.title_v} description={txtTranslate?.description_v}/>
        </div>
      </div>
      <DividerDos></DividerDos>
      <p className="about-bottom-lema text-center">
      {txtTranslate?.description}
      </p>
    </div>
  );
}

function Card({image='mision',title,description}) {
  return (
    <div className="flex flex-column card-mission">
      <div className="relative flex justify-center pt-4">
        <Image src={`/images/${image}.png`} height={400} width={438}></Image>
      </div>
      <div className="p-5">
        <p className="about-mission-title">{title}</p>
        <p className="about-mission-desc">
          {description}
        </p>
      </div>
    </div>
  );
}
