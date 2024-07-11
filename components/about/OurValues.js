import React from "react";
import DividerDos from "../utils/DividerDos";
import TitleAndSubtitle from "../utils/TitleAndSubtitle";
import translations from "../../staticTranslations.json";
import { useRouter } from "next/router";
export default function OurValues() {
  const { locale } = useRouter();
  const translate = translations?.page_about.values;
  const txtTranslate = translate?.filter(
    (item, ind) => item.locale === locale
  )[0];

  return (
    <div>
      <TitleAndSubtitle title={`${txtTranslate?.title}`} />
      <DividerDos></DividerDos>
      <div className="container ">
        <div className="row justify-content-between">
          <div className="col-12 col-md margin-right">
            <CardValues
              imagen={txtTranslate?.["items"][0].image}
              title={txtTranslate?.["items"][0].title}
              description={txtTranslate?.["items"][0].description}
            ></CardValues>
          </div>
          <div className="col-12 col-md margin-left">
            <CardValues
              imagen={txtTranslate?.["items"][1].image}
              title={txtTranslate?.["items"][1].title}
              description={txtTranslate?.["items"][1].description}
            ></CardValues>
          </div>
        </div>
        <div className="row mt-md-1">
          <div className="col-12 col-md margin-right">
            <CardValues
              imagen={txtTranslate?.["items"][2].image}
              title={txtTranslate?.["items"][2].title}
              description={txtTranslate?.["items"][2].description}
              order={1}
            ></CardValues>
          </div>
          <div className="col-12 col-md margin-left">
            <CardValues
              imagen={txtTranslate?.["items"][3].image}
              title={txtTranslate?.["items"][3].title}
              description={txtTranslate?.["items"][3].description}
              order={1}
            ></CardValues>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardValues({ title, description, imagen = "model_azul", order = 0 }) {
  return (
    <div className="row align-items-center justify-content-between  card-values my-2">
      <div className={`col-5  p-0 order-${order}`}>
        <img src={`/images/${imagen}.png`} className="img-values-dime"></img>
      </div>
      <div className={`col-7  p-0 `}>
        
            <p className="mx-3 about_v_title">{title}</p>
            <p className="mx-3">{description}</p>
        
      </div>
    </div>
  );
}
