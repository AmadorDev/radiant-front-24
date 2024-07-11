import { useRouter } from "next/router";
import React from "react";
import translations from "../../staticTranslations.json";
export default function AboutUs() {
  const { locale } = useRouter();
  const translate = translations?.page_about.bloque_one;
  const txtTranslate = translate?.filter(
    (item, ind) => item.locale === locale
  )[0];

  return (
    <div className="row justify-content-around align-items-center">
      <div className="col-12 col-md-6">
        <img src="/images/one_about_.png"></img>
      </div>
      <div className="col-12 col-md-6">
        <p className="about_title mt-3 mt-md-0 ">{txtTranslate?.title}</p>
        <p className="about_subTitle">{txtTranslate?.desc_one}</p>
        <p className="about_transform ">{txtTranslate?.transform}</p>
        <p className="about_subTitle">{txtTranslate?.desc_two}</p>
      </div>
    </div>
  );
}
