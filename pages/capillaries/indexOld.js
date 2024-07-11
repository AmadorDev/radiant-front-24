import React from "react";

import TitleAndSubtitle from "../../components/utils/TitleAndSubtitle";

import Button from "../../components/widtgets/Button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Divider from "../../components/utils/Divider";
import Breakcrums from "../../components/layouts/Breakcrums";
import DividerDos from "../../components/utils/DividerDos";
import Container from "../../components/layouts/Container";
import staticTrans from "../../staticTranslations.json";
import Banner from "../../components/layouts/Banner";
import ItemBreack from "../../components/layouts/ItemBreack";



export default function index() {
  const { locale } = useRouter();
  const { page_capillaries } = staticTrans;
  const info = page_capillaries?.filter(
    (item) => item.locale === locale
  )[0];
  const info_break = staticTrans?.global_locale.filter(
    (item) => item.locale === locale
  )[0];

  return (
    <Container>
      {/* <Banner></Banner> */}
      <Breakcrums>
        <ItemBreack title={info_break?.home} ruta="/"></ItemBreack>
      </Breakcrums>

      <Divider></Divider>
      <TitleAndSubtitle
        title={`${info?.page_title}`}
        subtitle=""
      ></TitleAndSubtitle>
      <DividerDos></DividerDos>

      <div className="container">
        <div className="flex flex-col md:flex-row justify-around   items-center  space-y-2 mx-2">
          <div className="item md:w-1/2   flex justify-start ">
            <Image
              src="/dev/capilar_img.png"
              className="flex self-end img-fluid"
              width={479}
              height={525}
            ></Image>
          </div>
          <div className="item md:w-1/2 ">
            <div className="text-left">
              <h1 className="g_title">{info?.title}</h1>

              <h5 className="g_desc mt-4">{info?.subtitle}</h5>
              <h5 className="g_desc mt-1">{info?.subtitle_two}</h5>
              <h5 className="g_desc mt-1">{info?.subtitle_tree}</h5>

              <Button className="mt-3 ">
                <Link href="/capillaries/start">{info?.btn}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
