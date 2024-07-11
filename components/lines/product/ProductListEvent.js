import React, { useContext } from "react";
import Link from "next/link";

import ItemProd from "../../List/ItemProd";
import Divider from "../../utils/Divider";
import DividerDos from "../../utils/DividerDos";

import TitleAndSubtitle from "../../utils/TitleAndSubtitle";
import Button from "../../widtgets/Button";
import menuContext from "../../../contexts/menu/menuContext";

export default function ProductListEvent({ events, query }) {
  const { line_st } = useContext(menuContext);
  return (
    <>
      <Divider></Divider>
      <TitleAndSubtitle
        title={`${line_st?.event}`}
        description={``}
      ></TitleAndSubtitle>
      <DividerDos></DividerDos>
      <div className="row">
        {events?.map((item, index) => (
          <div className="col-12 col-md-4" key={index}>
            <ItemProd
              imagefile={item?.url}
              title={item.title}
              description={`${item?.content.slice(
                0,
                process.env.STR_SLICE
              )} ...`}
            >
              <Link href={`/products/${query.product}/event/${item.slug}?line=${query.line}`}>
                <a>
                  <Button className="mx-6 mt-3">{line_st?.more}</Button>
                </a>
              </Link>
            </ItemProd>
          </div>
        ))}
      </div>
      
    </>
  );
}
