import { useRouter } from "next/router";
import React from "react";
import Container from "../components/layouts/Container";
import TitleAndSubtitle from "../components/utils/TitleAndSubtitle";
import translations from "../staticTranslations.json";
export default function usagePolicies() {
  const { locale } = useRouter();
  const translate = translations?.policy_page;
  const txtTranslate = translate?.filter(
    (item, ind) => item.locale === locale
  )[0];
 
  return (
    <Container>
      <div className="container">
        <p className="title-principal-page-qts">{txtTranslate?.title}</p>
        <p dangerouslySetInnerHTML={{ __html: txtTranslate?.description }} className="ld_des"></p>

        {txtTranslate?.items.map((item, index) => (
          <div key={index} className="mb-5">
            <span className="txt-title-qts">{index + 1}. {item.title}</span>
            <p className="ml-3 mt-2 ld_des" dangerouslySetInnerHTML={{ __html: item.description }}></p>
          </div>
        ))}
      </div>
    </Container>
  );
}
