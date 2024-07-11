import React from "react";
import { useRouter } from "next/router"
import Divider from "../utils/Divider";
import Link from "next/link";
import ItemWithImage from "../utils/ItemWithImage";
import Button from "../widtgets/Button";

export default function LastInfo({textLeft,textRight}) {
  const {locale} = useRouter()
  const t_left = textLeft?.filter((item,ind)=>item.locale === locale)[0];
  const t_right = textRight?.filter((item,ind)=>item.locale === locale)[0];;
  return (
    <>
      <Divider></Divider>
      <div className="container ">
        <div className="row d-flex  justify-content-center mx-2">
          <ItemWithImage fondImg="/dev/fonduno.png">
            <p className=" t_nove_title">
             {t_left?.title}
            </p>
            <p className="t_nove_des my-3">
             {t_left?.content}
            </p>
            <img src="/dev/banderas.png" width="220" className="my-3"></img>

            <Button className="mt-3 px-5">
              <Link href="/salones">{t_left?.btn}</Link>
            </Button>
          </ItemWithImage>

          <ItemWithImage fondImg="">
            <p className=" t_nove_title text-white">
              {t_right?.title}
            </p>
            <p className="t_nove_des my-3 text-white">
            {t_right?.content}
            </p>

            <Button className="mt-3 px-5">
              <Link href="/capillaries/start">{t_right?.btn}</Link>
            </Button>
          </ItemWithImage>
        </div>
      </div>
    </>
  );
}
