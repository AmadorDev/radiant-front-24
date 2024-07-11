import { sanitize } from "dompurify";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { getEventByLineaDetail } from "../../../api/lineaApi";
import menuContext from "../../../contexts/menu/menuContext";
import Breakcrums from "../../layouts/Breakcrums";
import DetailSanite from "../../utils/DetailSanite";
import Divider from "../../utils/Divider";
import ImageDetail from "../../utils/ImageDetail";
export default function Event({ query, locale }) {
  const [event, setEvent] = useState(null);
  const [line, setLine] = useState("");
  const { line_st } = useContext(menuContext);

  const getDetail = async () => {
    try {
      const res = await getEventByLineaDetail(query?.line, query?.slug, locale);
      if (res?.status === "OK" && res?.rows > 0) {
        setEvent(res?.data);
        setLine(res?.line);
       
      }
    } catch (error) {}
  };

  useEffect(() => {
    getDetail();

    return () => {};
  }, [query, locale]);

  return (
    <>
      <Breakcrums>
        <li className="">
          <a href="#">
            {line_st?.line}{" "}
            <svg
              className="fill-current w-3 h-3 mx-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </a>
        </li>
        <li className="">
          <Link href={`/lineas/${query.line}`}>
            <a>
              {line?.name}{" "}
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </a>
          </Link>
        </li>
        <li className="breakText-active">
          <a>{event?.title}</a>
        </li>
      </Breakcrums>
      <div className="container">
        <Divider></Divider>
        <ImageDetail url={event?.url} />
        <Divider></Divider>

        <DetailSanite
          title={event?.title}
          content={event?.content}
        ></DetailSanite>
      </div>
    </>
  );
}
