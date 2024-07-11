import React, { useState } from "react";

import TitleAndSubtitle from "../components/utils/TitleAndSubtitle";
import ItemProd from "../components/List/ItemProd";
import Button from "../components/widtgets/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import Divider from "../components/utils/Divider";
import DividerDos from "../components/utils/DividerDos";
import MapG from "../components/maps/MapG";
import MapOld from "../components/maps/MapOld";
import Container from "../components/layouts/Container";
import { getSalon } from "../api/salonApi";
import InfoSalon from "../components/salon/InfoSalon";

function salones({ data ,translation}) {
  const [salonSelect, setSalonSelect] = useState(null);


  return (
    <Container>
      <Divider></Divider>

      <div className="container-fluid">
        <TitleAndSubtitle
          title={translation?.title}
          subtitle={translation?.shortname}
          className="col-md-10"
        ></TitleAndSubtitle>

        <DividerDos></DividerDos>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            {salonSelect ? <InfoSalon salon={salonSelect}></InfoSalon> : null}
          </div>
          <div className="col-12 col-md-8">
            <MapOld points={data} setSalonSelect={setSalonSelect}></MapOld>
          </div>
        </div>

        <DividerDos></DividerDos>
      </div>
    </Container>
  );
}

export async function getServerSideProps({locale}) {

  try {
    const res = await getSalon(locale);
   
    if (res?.status !== "Fail") {
      return {
        props: {
          data: res?.data,
          translation:res?.translation
        },
      };
    }else{
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default salones;
