import Image from "next/image";
import React from "react";
import style from "./itemprod.module.scss"
export default function ItemProd({ imagefile=process.env.LOGO_IMAGE, title, description='', children }) {
  return (
    <div className="p-3 my-5 " style={{ width: "100%" }}>
      {/* <img src={imagefile} className={style["img-item-prod"]} alt="..." /> */}
      <Image src={imagefile} className={style["img-item-prod"] + ' '+'card-img-top'} width={360} height={250} layout="responsive" alt={'...'} />
      <div className="card-body text-center" >
        <p className="card-title item_title uppercase" >{title}</p>
        <p className="card-text item_subtitle  " dangerouslySetInnerHTML={{__html:`${description.slice(0,process.env.STR_SLICE)}...`}}></p>
        {children}
      </div>
    </div>
  );
}
 