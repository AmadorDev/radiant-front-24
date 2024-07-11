import { useRouter } from "next/router";
import React, { useRef } from "react";
import Container from "../components/layouts/Container";
import translations from "../staticTranslations.json";
export default function frequentQuestions() {
  const { locale } = useRouter();
  const translate = translations?.page_questions;
  const txtTranslate = translate?.filter(
    (item, ind) => item.locale === locale
  )[0];

  return (
    <Container>
      <div className="container  ">
        <p className="title-principal-page-qts">{txtTranslate?.title}</p>
        {txtTranslate?.items.map((item, index) => (
          <div key={index}>
            <p className="text-center mt-3 txt-title-qts">{item.title}</p>
            {item.subItems?.map((question, idx) => (
              <div className="flex md:justify-center" key={idx}>
                <ItemQuestion
                  title={question.title}
                  content={question.content}
                ></ItemQuestion>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
}

function ItemQuestion({ title, content }) {
  const divDetail = useRef(null);
  const icon = useRef(null);

  function showDetail() {
    const hide = divDetail.current.classList.contains("hidden");
    if (hide) {
      divDetail.current.classList.remove("hidden");
      divDetail.current.classList.add("show");
      icon.current.classList.add("rotate-90");
    } else {
      divDetail.current.classList.add("hidden");
      divDetail.current.classList.remove("show");
      icon.current.classList.remove("rotate-90");
    }
  }
  return (
    <div className="md:w-3/4 bg-white justify-center  shadow-xl my-2 mx-3">
      <div
        className="flex items-center  border-b cursor-pointer"
        onClick={showDetail}
      >
        <div className="" ref={icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 txt-title-p-qts"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>

        <span className="txt-title-p-qts">{title}</span>
        <div className="flex items-center  py-3" />
      </div>

      <div
        className="my-3 mx-2 border-b hidden ld_des"
        ref={divDetail}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
