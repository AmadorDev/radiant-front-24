import React from "react";
import DetailSanite from "../utils/DetailSanite";
import Divider from "../utils/Divider";
import ImageDetail from "../utils/ImageDetail";

export default function DetailEvent({item}) {

   
  return (
    <div className="container">
        <Divider></Divider>
        <ImageDetail url={item?.url || process.env.LOGO_IMAGE} />
        <Divider></Divider>

        <DetailSanite
          title={item?.title}
          content={item?.content}
        ></DetailSanite>
    </div>
  );
}
