import React from "react";
import { getEventByProductAndLineDetail } from "../../../../api/productApi";
import Banner from "../../../../components/layouts/Banner";
import Container from "../../../../components/layouts/Container";
import EventDetail from "../../../../components/lines/product/event/EventDetail";

function event({ event ,query}) {
  return (
    <Container>
      {/* <Banner></Banner> */}
      <EventDetail event={event} query={query}>event</EventDetail>
    </Container>
  );
}

export async function getServerSideProps({ query, locale }) {
  const event = await getEventByProductAndLineDetail(
    query.line,
    query.product,
    query.event,
    locale
  );

  if (event?.rows > 0) {
    return { props: { event, query, locale } };
  }
  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
    props: {},
  };
}
export default event;
