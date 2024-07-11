import React from "react";
import DetailSanite from "../utils/DetailSanite";
import Divider from "../utils/Divider";
import ImageDetail from "../utils/ImageDetail";

export default function DetailNew({item,images}) {

  return (
    <div className="container">
        <Divider></Divider>
        <ImageDetail url={item?.image || process.env.LOGO_IMAGE} />
        <Divider></Divider>

        <DetailSanite
          title={item?.title}
          content={item?.content}
        ></DetailSanite>

        <div className="row justify-content-center align-items-center mt-5">
          {images?.map((image,idex)=>(
            <div className="col-12 col-md-6 d-flex justify-content-start my-3 mt-md-0" key={idex}>
            <img src={image.url} className="nove_detail_img"></img>
          </div>
          ))}
        </div>
      
    </div>
  );
}
