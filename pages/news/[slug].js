import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";



import Container from "../../components/layouts/Container";
import DetailNew from "../../components/news/DetailNew";
import { getNewsDetail } from "../../api/newApi";
import Breakcrums from "../../components/layouts/Breakcrums";
import ItemBreack from "../../components/layouts/ItemBreack";
import _tran from "../../staticTranslations.json";
import SliderCover from "../../components/layouts/SliderCover";
export default function details() {
  const [detail, setDetail] = useState(null);
  const [images, setImages] = useState(null);
  const { locale, query } = useRouter();
  const info = _tran?.global_locale.filter((item, ind) => item.locale === locale)[0];
  const ListNewsDetail = async () => {
    try {
      const resp = await getNewsDetail(locale, query?.slug);
      if (resp?.rows > 0) {
        setDetail(resp?.data);
        setImages(resp?.images);
      }
    } catch (error) {}
  };

  useEffect(() => {
    ListNewsDetail();
  }, []);
  return (
    <Container>
       <SliderCover/>
      <Breakcrums>
        <ItemBreack title={`${info?.news}`} ruta="/news"></ItemBreack>
        <ItemBreack title={`${detail?.title}`}></ItemBreack>
      </Breakcrums>
      {detail ? <DetailNew item={detail} images={images}></DetailNew> : null}
    </Container>
  );
}
