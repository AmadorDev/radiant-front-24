import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import menuContext from "../../contexts/menu/menuContext";
import ItemCategory from "./ItemCategory";
import { getTree } from "../../api/menuApi";
import LinkUrl from "./LinkUrl";
import static_text from "../../staticTranslations.json";
export default function HoverCate() {
  const { defaultMenu } = useContext(menuContext);
  const { locale } = useRouter();
  const info = static_text?.global_locale.filter(
    (item) => item.locale === locale
  )[0];

  const cates = defaultMenu.filter(
    (item) => item.code === "cate" && item.locale === locale
  )[0];
  const [lines, setLines] = useState(null);
  const [lineNow, setLineNow] = useState(null);
  const [treeProducts, setTreeProducts] = useState(null);
  const [treeEvents, setTreeEvents] = useState(null);
  const [treeVideos, setTreeVideos] = useState(null);
  const [treeHairType, setHairType] = useState(null);
 
  function getLines(e, line) {
    setLines(line);
    setTreeProducts(null);
    setTreeEvents(null);
    setTreeVideos(null);
    setHairType(null)
    let navs = document.querySelectorAll(".nav-item-cate-li");
    navs.forEach((element) => {
      if (element != e) {
        element.classList.remove("active");
      }
    });

    e.target.classList.add("active");
  }

  async function productsAndEvents(line) {
    try {
      setLineNow(line?.slug);
      const resp = await getTree(line?.id, locale);
      if (resp?.status === "OK") {
      
        setTreeProducts(resp?.products);
        // setTreeEvents(resp?.events);
        // setTreeVideos(resp?.videos);
        setHairType(resp?.hair_types);
      } else {
        setTreeProducts(null);
      }
    } catch (error) {}
  }

  return (
    <div>
      {" "}
      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab"
        role="tablist"
      >
        {cates?.cate.map((cat, index) => (
          <ItemCategory
            title={cat?.name}
            key={index}
            onClick={(e) => getLines(e, cat?.lineas)}
          ></ItemCategory>
        ))}
      </ul>
      <div className="flex justify-between uppercase">
        {lines?.map((line, index) => (
          <div key={index} className="flex">
            <Link href={`/lineas/${line?.slug}`}>
              <strong className="cursor-pointer"> {line?.name}</strong>
            </Link>
            {/* onMouseOver */}
            <button onClick={() => productsAndEvents(line)} className="mx-2">
              <svg
                className="h-5 w-5 "
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      {lines ? <div className="space-page my-2"></div> : null}
      <div className="flex space-x-10 justify-start mt-5">
        <div className="flex-1">
          {treeProducts?.length > 0 ? (
            <p className="tree-text">{info?.product}</p>
          ) : null}
          {treeProducts?.map((pro, index) => (
            <LinkUrl key={index} url={`/products/${pro?.slug}?line=${lineNow}`}>
              {pro?.product}
            </LinkUrl>
          ))}
        </div>
        <div className="flex-1">
          {treeProducts?.length > 0 ? (
            <>
              {" "}
              <p className="tree-text uppercase">{info?.type_c}</p>
              <p className="">
                {treeHairType?.length > 0   ? treeHairType[0].content:''}
              </p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
