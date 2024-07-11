import React, { useContext, useEffect } from "react";

import TitleAndSubtitle from "../../components/utils/TitleAndSubtitle";

import Button from "../../components/widtgets/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import Divider from "../../components/utils/Divider";
import Breakcrums from "../../components/layouts/Breakcrums";
import DividerDos from "../../components/utils/DividerDos";

import CapilarContext from "../../contexts/capilar/capilarContext";
import Container from "../../components/layouts/Container";

import staticTrans from "../../staticTranslations.json";
import Banner from "../../components/layouts/Banner";
import ItemBreack from "../../components/layouts/ItemBreack";
import Image from "next/image";

export default function index() {
  const router = useRouter();
  const { locale } = useRouter();
  const {
    questions,
    updateQuestion,
    resetQuestion,
    comb,
    markValue,
    markQuestion,
    resetMark,
  } = useContext(CapilarContext);
  const { capilar_locale, global_locale } = staticTrans;
  const info_test = capilar_locale?.index.filter(
    (item) => item.locale === locale
  )[0];
  const info_glob = global_locale?.filter((item) => item.locale === locale)[0];
  const info_q_one = capilar_locale?.questions.question_one.filter(
    (item) => item.locale === locale
  )[0];
  const info_q_two = capilar_locale?.questions.question_two.filter(
    (item) => item.locale === locale
  )[0];
  const info_q_three = capilar_locale?.questions.question_three.filter(
    (item) => item.locale === locale
  )[0];
  const info_q_four = capilar_locale?.questions.question_four.filter(
    (item) => item.locale === locale
  )[0];
  const info_q_five = capilar_locale?.questions.question_five.filter(
    (item) => item.locale === locale
  )[0];


  useEffect(() => {
    resetQuestion();
    resetMark();
  }, []);

  function nextBtn(position) {
    if (questions[position] === 1) {
      if (position == 4) return router.push("/capillaries/result");
      let divs = document.querySelectorAll(".d-question");

      divs[position].classList.remove("d-question-active");
      divs[parseInt(position) + 1].classList.add("d-question-active");

      let indicator = document.querySelectorAll(".tc-circle");
      indicator[parseInt(position) + 1].classList.add("tc-circle-active");
      getYPosition();
    } else {
      return true;
    }
  }

  function previewBtn(position) {
    if (position == 0) return true;
    let divs = document.querySelectorAll(".d-question");
    divs[position].classList.remove("d-question-active");
    divs[parseInt(position) - 1].classList.add("d-question-active");

    let indicator = document.querySelectorAll(".tc-circle");
    indicator[parseInt(position)].classList.remove("tc-circle-active");
    getYPosition();
  }

  function getYPosition() {
    // let top = window.pageYOffset || document.documentElement.scrollTop;
    // window.scroll(0, top / 2);
    // window.scrollTo(top/2, 0);
  }

  function selectedOption(
    position,
    classOption,
    positionForm,
    nroQuestion = null
  ) {
    let options = ["A", "B", "C", "D", "E", "F", "G"];
    if (nroQuestion !== null) {
      markQuestion({ p: options[position], q: nroQuestion });
    }
    updateQuestion({ position: positionForm });
    let isSelected = document.querySelectorAll("." + classOption);
    isSelected.forEach((element, idx) => {
      isSelected[idx].classList.remove("tc-circle-active");
      if (idx === position) {
        isSelected[position].classList.add("tc-circle-active");
      }
    });
    // updateQuestion({position:positionForm})
  }
  return (
    <Container>
      <Banner></Banner>
      <Breakcrums>
      <ItemBreack title={info_glob?.home} ruta='/'></ItemBreack>
      <ItemBreack title={info_test?.title} ></ItemBreack>
      
      </Breakcrums>
      <Divider></Divider>
      <TitleAndSubtitle
        title={`${info_test?.title}`}
        subtitle={`${info_test?.shortname}`}
      ></TitleAndSubtitle>
      <DividerDos></DividerDos>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-12">
            <div className="flex items-center justify-center ">
              {" "}
              <div className="tc-circle tc-circle-active"></div>
              <div className="tc_line"></div>
              <div className="tc-circle"></div>
              <div className="tc_line"></div>
              <div className="tc-circle"></div>
              <div className="tc_line"></div>
              <div className="tc-circle"></div>
              <div className="tc_line"></div>
              <div className="tc-circle "></div>
            </div>
          </div>
        </div>
        <DividerDos></DividerDos>
        <div className="mx-3">
          {/******************************questions 1*********************/}
          <div className="d-question d-question-active">
            <div className="row justify-content-center">
              <div className="col-12 ">
                <div className="text-center">
                  <span className="tc_preg_title">{info_q_one?.title}</span>
                </div>
                <div className="text-center">
                  <span className="tc_preg">{info_q_one?.question}</span>
                </div>
              </div>
            </div>

            <div className="row mt-5 ">
              <ItemOptions
                title={`${info_q_one?.options[0]}`}
                classCirle="tc_quno"
                image_name="liso"
                onClick={() => selectedOption(0, "tc_quno", 0)}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_one?.options[1]}`}
                classCirle="tc_quno"
                image_name="ondulado"
                onClick={() => selectedOption(1, "tc_quno", 0)}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_one?.options[2]}`}
                classCirle="tc_quno"
                image_name="rizado"
                onClick={() => selectedOption(2, "tc_quno", 0)}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_one?.options[3]}`}
                classCirle="tc_quno"
                image_name="nose"
                onClick={() => selectedOption(3, "tc_quno", 0)}
              ></ItemOptions>
            </div>
            <div className="row mt-5 justify-between ">
              <div className="col-6 text-start px-0">
                {" "}
                <Button onClick={() => previewBtn(0)}>{info_glob?.prev}</Button>
              </div>
              <div className="col-6 text-right px-0">
                <Button onClick={() => nextBtn(0)}>{info_glob?.next}</Button>
              </div>
            </div>
          </div>

          {/******************************questions 2*********************/}
          <div className="d-question">
            <div className="row justify-content-center">
              <div className="col-12 ">
                <div className="text-center">
                  <span className="tc_preg_title">{info_q_two?.title}</span>
                </div>
                <div className="text-center">
                  <span className="tc_preg">{info_q_two?.question}</span>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <ItemOptions
                title={`${info_q_two?.options[0]}`}
                classCirle="tc_qdos"
                image_name="tsin"
                onClick={() => selectedOption(0, "tc_qdos", 1)}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_two?.options[1]}`}
                classCirle="tc_qdos"
                image_name="tcon"
                onClick={() => selectedOption(1, "tc_qdos", 1)}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_two?.options[2]}`}
                classCirle="tc_qdos"
                image_name="alizado"
                onClick={() => selectedOption(2, "tc_qdos", 1)}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_two?.options[3]}`}
                classCirle="tc_qdos"
                image_name="alizadocon"
                onClick={() => selectedOption(3, "tc_qdos", 1)}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_two?.options[4]}`}
                classCirle="tc_qdos"
                image_name="nn"
                onClick={() => selectedOption(4, "tc_qdos", 1)}
              ></ItemOptions>
            </div>
            <div className="row mt-5 justify-between ">
              <div className="col-6 text-start px-0">
                {" "}
                <Button onClick={() => previewBtn(1)}>{info_glob?.prev}</Button>
              </div>
              <div className="col-6 text-right px-0">
                <Button onClick={() => nextBtn(1)}>{info_glob?.next}</Button>
              </div>
            </div>
          </div>
          {/******************************questions 3*********************/}
          <div className="d-question">
            <div className="row justify-content-center">
              <div className="col-12 ">
                <div className="text-center">
                  <span className="tc_preg_title">{info_q_three?.title}</span>
                </div>
                <div className="text-center">
                  <span className="tc_preg">{info_q_three?.question}</span>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <ItemOptions
                title={`${info_q_three?.options[0]}`}
                classCirle="tc_qtres"
                image_name="graso"
                onClick={() => selectedOption(0, "tc_qtres", 2, "TRES")}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_three?.options[1]}`}
                classCirle="tc_qtres"
                image_name="seco"
                onClick={() => selectedOption(1, "tc_qtres", 2, "TRES")}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_three?.options[2]}`}
                classCirle="tc_qtres"
                image_name="mixto"
                onClick={() => selectedOption(2, "tc_qtres", 2, "TRES")}
              ></ItemOptions>
            </div>
            <div className="row mt-5 justify-between ">
              <div className="col-6 text-start px-0">
                {" "}
                <Button onClick={() => previewBtn(2)}>{info_glob?.prev}</Button>
              </div>
              <div className="col-6 text-right px-0">
                <Button onClick={() => nextBtn(2)}>{info_glob?.next}</Button>
              </div>
            </div>
          </div>
          {/******************************questions 4*********************/}
          <div className="d-question">
            <div className="row justify-content-center">
              <div className="col-12 ">
                <div className="text-center">
                  <span className="tc_preg_title">{info_q_four?.title}</span>
                </div>
                <div className="text-center">
                  <span className="tc_preg">{info_q_four?.question}</span>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <ItemOptions
                title={`${info_q_four?.options[0]}`}
                classCirle="tc_qcuatro"
                image_name="amarro"
                onClick={() => selectedOption(0, "tc_qcuatro", 3)}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_four?.options[1]}`}
                classCirle="tc_qcuatro"
                image_name="plancho"
                onClick={() => selectedOption(1, "tc_qcuatro", 3)}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_four?.options[2]}`}
                classCirle="tc_qcuatro"
                image_name="loriso"
                onClick={() => selectedOption(2, "tc_qcuatro", 3)}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_four?.options[3]}`}
                classCirle="tc_qcuatro"
                image_name="secadora"
                onClick={() => selectedOption(3, "tc_qcuatro", 3)}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_four?.options[4]}`}
                classCirle="tc_qcuatro"
                image_name="secadoraplancha"
                onClick={() => selectedOption(4, "tc_qcuatro", 3)}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_four?.options[5]}`}
                classCirle="tc_qcuatro"
                image_name="noarreglo"
                onClick={() => selectedOption(5, "tc_qcuatro", 3)}
              ></ItemOptions>
            </div>
            <div className="row mt-5 justify-between ">
              <div className="col-6 text-start px-0">
                {" "}
                <Button onClick={() => previewBtn(3)}>{info_glob?.prev}</Button>
              </div>
              <div className="col-6 text-right px-0">
                <Button onClick={() => nextBtn(3)}>{info_glob?.next}</Button>
              </div>
            </div>
          </div>

          {/******************************questions 5*********************/}
          <div className="d-question">
            <div className="row justify-content-center">
              <div className="col-12 ">
                <div className="text-center">
                  <span className="tc_preg_title">{info_q_five?.title}</span>
                </div>
                <div className="text-center">
                  <span className="tc_preg">{info_q_five?.question}</span>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <ItemOptions
                title={`${info_q_five?.options[0]}`}
                classCirle="tc_qcinco"
                image_name="hidratacion"
                onClick={() => selectedOption(0, "tc_qcinco", 4, "CINCO")}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_five?.options[1]}`}
                classCirle="tc_qcinco"
                
                image_name="brillosuavidad"
                onClick={() => selectedOption(1, "tc_qcinco", 4, "CINCO")}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_five?.options[2]}`}
                classCirle="tc_qcinco"
                image_name="reparacion"
                onClick={() => selectedOption(2, "tc_qcinco", 4, "CINCO")}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_five?.options[3]}`}
                classCirle="tc_qcinco"
                image_name="mantenimiento"
                onClick={() => selectedOption(3, "tc_qcinco", 4, "CINCO")}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_five?.options[4]}`}
                classCirle="tc_qcinco"
                image_name="neutralizar"
                onClick={() => selectedOption(4, "tc_qcinco", 4, "CINCO")}
              ></ItemOptions>
              <ItemOptions
                title={`${info_q_five?.options[5]}`}
                classCirle="tc_qcinco"
                image_name="rejuvenicimiento"
                onClick={() => selectedOption(5, "tc_qcinco", 4, "CINCO")}
              ></ItemOptions>
            </div>
            <div className="row mt-5 justify-between ">
              <div className="col-6 text-start px-0">
                {" "}
                <Button onClick={() => previewBtn(4)}>{info_glob?.prev}</Button>
              </div>
              <div className="col-6 text-right px-0">
                <Button onClick={() => nextBtn(4)}>{info_glob?.next}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider></Divider>
    </Container>
  );
}

function ItemOptions({ title, classCirle = "",image_name='not', onClick }) {
  return (
    <div className="flex justify-center items-center option-preg my-2">
      <div className="item  w-1/7 md:w-4/4 justify-center flex self-center ">
        {/* <img src="/capilar_icons/liso.png" className="icon_img  md:ml-0 "></img> */}
       
        <Image src={`/capilar_icons/${image_name}.png`} width={95} height={95} style={{height:'100%'}}  className="icon_img  md:ml-0 "></Image>
        
      </div>
      <div className="item  w-1/2 md:w-full ml-3">
        <span className="option_title">{title}</span>
        {/* <div className="flex">
          <div className="option_cuadros option_cuadros_md mr-2"></div>
          <div className="option_cuadros option_cuadros_lg mx-2"></div>
          <div className="option_cuadros option_cuadros_sm mx-2"></div>
        </div> */}
      </div>
      <div className="flex item  w-1/7 md:w-4/4 m-0 justify-center ">
        <div
          className={classCirle + " " + "tc-circle  md:mr-0"}
          onClick={onClick}
        ></div>
      </div>
    </div>
  );
}
