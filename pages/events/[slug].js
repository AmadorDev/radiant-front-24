import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getEventDetail } from "../../api/newApi";
import Container from "../../components/layouts/Container";
import Breakcrums from "../../components/layouts/Breakcrums";
import ItemBreack from "../../components/layouts/ItemBreack";
import DetailEvent from "../../components/news/DetailEvent";
import _trans from "../../staticTranslations.json"
import SliderCover from "../../components/layouts/SliderCover";

export default function Detail() {
  const [event, setEvent] = useState(null);
  const { locale, query } = useRouter();

  const info = _trans?.news_event.filter((item, ind) => item.locale === locale)[0];

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const resp = await getEventDetail(locale, query?.slug);
      if (resp?.rows > 0) {
        setEvent(resp?.data);
      }
    } catch (error) {
     
    }
  }

  return (
    <Container>
      <SliderCover/>
      <Breakcrums>
        <ItemBreack title={`${info?.news}`} ruta="/news"></ItemBreack>
        <ItemBreack title={`${info?.title}`} ruta={`/news?sev=true`}></ItemBreack>
        <ItemBreack title={`${event?.slug}`}></ItemBreack>
      </Breakcrums>

      {event ? <DetailEvent item={event} /> : null}
    </Container>
  );
}
