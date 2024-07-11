import React from "react";
import ItemProd from "../List/ItemProd";
import DividerDos from "../utils/DividerDos";
import TitleAndSubtitle from "../utils/TitleAndSubtitle";
import Button from "../widtgets/Button";
import {useRouter} from "next/router"

import _trans from "../../staticTranslations.json"
import Divider from "../utils/Divider";

function Events({data}) {
    const {locale} = useRouter()
    const router = useRouter()
    const info = _trans?.news_event.filter((item, ind) => item.locale === locale)[0];
  return (
    <div >
        <Divider></Divider>
      <TitleAndSubtitle
        title={info?.title}
      ></TitleAndSubtitle>
      <DividerDos></DividerDos>
     
      <div className="row justify-center">
          {data?.map((item, index) => (
            <div className="col-12 col-md-4" key={index}>
              <ItemProd
                title={item?.title}
                description={item?.content}
                imagefile={item?.image}
              >
                <Button
                  className="px-5"
                  onClick={() => router.push(`/events/${item.slug}`)}
                >
                  {info?.more}
                </Button>
              </ItemProd>
            </div>
          ))}
        </div>
      
    </div>
  );
}

export default Events;
