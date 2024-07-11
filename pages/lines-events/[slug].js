import { useRouter } from "next/router";
import React from "react";
import Container from "../../components/layouts/Container";
import Event from "../../components/lines/events/Event";

export default function Detail() {
  const {query,locale} = useRouter()
  return (
    <Container>
      
      <Event query={query} locale={locale}></Event>
    </Container>
  );
}
