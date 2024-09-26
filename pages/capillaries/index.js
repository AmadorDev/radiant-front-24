import { useRef, useState } from "react";
import Link from "next/link";
import Container from "../../components/layouts/Container";
import translations from "../../staticTranslations.json";
import combinations from "../../combinations.json";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { getProductsSearch } from "../../api/productApi";
import Whatsapp from "../../components/home/Whatsapp";

export default function index() {
  const { locale } = useRouter();
  const router = useRouter();
  const translation = translations?.test_[locale];
  const combinationsJson = combinations || [];
  const question1 = translation.question1;
  const question2 = translation.question2;
  const question3 = translation.question3;
  const question4 = translation.question4;
  const question5 = translation.question5;
  console.log(translation);

  const [tapIndex, setTapIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const answers = useRef({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
  });
  console.log(answers);

  function HandleReloadStart() {
    answers.current = {
      question1: null,
      question2: null,
      question3: null,
      question4: null,
      question5: null,
    };
    document
      .querySelectorAll(".tc-circle-option")
      .forEach((x) => x.classList.remove("active"));
    HandleMove(1);
  }

  const HandleAnswers = (e, q, value) => {
    console.log("sdfsdf");
    const event = e.target;
    if (q == 1) {
      answers.current.question1 = value;

      document
        .querySelectorAll(".selected-one")
        .forEach((x) => x.classList.remove("active"));
      event.classList.add("active");
    }
    if (q == 2) {
      answers.current.question2 = value;

      document
        .querySelectorAll(".selected-two")
        .forEach((x) => x.classList.remove("active"));
      event.classList.add("active");
    }
    if (q == 3) {
      answers.current.question3 = value;
      document
        .querySelectorAll(".selected-tree")
        .forEach((x) => x.classList.remove("active"));
      event.classList.add("active");
    }
    if (q == 4) {
      answers.current.question4 = value;
      document
        .querySelectorAll(".selected-four")
        .forEach((x) => x.classList.remove("active"));
      event.classList.add("active");
    }
    if (q == 5) {
      answers.current.question5 = value;
      document
        .querySelectorAll(".selected-five")
        .forEach((x) => x.classList.remove("active"));
      event.classList.add("active");
    }
  };

  const HandleMove = async (location) => {
    console.log(location);
    console.log(tapIndex);
    if (location == 1) {
      setTapIndex(1);
    }

    if (location == 2) {
      if (tapIndex == 1) {
        if (answers.current.question1 == null) {
          return toast.error("Selecione alguna respuesta");
        }
        setTapIndex(2);
      }
      if (tapIndex == 2) {
        if (answers.current.question2 == null) {
          return toast.error("Selecione alguna respuesta");
        }
        setTapIndex(3);
      }

      if (tapIndex == 3) {
        if (answers.current.question3 == null) {
          return toast.error("Selecione alguna respuesta");
        }
        setTapIndex(4);
      }

      if (tapIndex == 4) {
        if (answers.current.question4 == null) {
          return toast.error("Selecione alguna respuesta");
        }
        setTapIndex(5);
      }

      if (tapIndex == 5) {
        if (answers.current.question5 == null) {
          return toast.error("Selecione alguna respuesta");
        }
        //process
        const combination =
          answers.current.question2.op +
          answers.current.question3.op +
          answers.current.question5.op;

        let combResult = combinationsJson.find(
          (x) => x.combination == combination
        );

        console.log("combination: ", combination);
        console.log("combResult: ", combResult);
        if (!combResult) return;
        setLoading(true);
        let id = combResult?.product;
        router.push(`/capillaries/result?id=${id}`);
      }
    } else {
      if (tapIndex == 2) {
        setTapIndex(1);
      }
      if (tapIndex == 3) {
        setTapIndex(2);
      }
      if (tapIndex == 4) {
        setTapIndex(3);
      }
      if (tapIndex == 5) {
        setTapIndex(4);
      }
    }
  };
  return (
    <Container>
      <div className=" relative">
        <img
          src="/images/mask.svg"
          alt=""
          className="w-full"
          
        />
        <div className="absolute bottom-0  w-full  flex justify-center items-end ">
          <div className="xs:text-base sm:text-2xl md:text-6xl font-normal text-white  font-['Varela'] uppercase">
            TEST CAPILAR
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="divider-custom"></div>
        {/*  BEGIN:1 */}
        <div className={tapIndex == 1 ? "" : "hidden"}>
          <div className="text-black text-center text-q-title font-normal font-['Varela']">
            {question1.title}
          </div>

          <div className="flex w-full justify-evenly flex-wrap mt-5">
            {question1.items.map((item, index) => (
              <div key={index} className="w-36 justify-center mb-5">
                <div className="tc-w-content mx-auto text-center">
                  <div className="text-black text-[15px] font-normal font-['Varela'] my-2">
                    {item.name}
                  </div>
                  <div
                    className="tc-circle-option mx-auto selected-one"
                    onClick={(e) =>
                      HandleAnswers(e, 1, { v: item.value, op: item.option })
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  END:1 */}

        {/*  BEGIN:2 */}
        <div className={tapIndex == 2 ? "" : "hidden"}>
          <div className="text-black text-center text-q-title font-normal font-['Varela']">
            {question2.title}
          </div>

          <div className="flex w-full justify-evenly flex-wrap mt-5">
            {question2.items.map((item, index) => (
              <div key={index} className="w-36 justify-center mb-5">
                <div className="tc-w-content mx-auto text-center">
                  <div className="text-black text-[15px] font-normal font-['Varela'] my-2">
                    {item.name}
                  </div>
                  <div
                    className="tc-circle-option mx-auto selected-one"
                    onClick={(e) =>
                      HandleAnswers(e, 2, { v: item.value, op: item.option })
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  END:2 */}

        {/*  BEGIN:3 */}
        <div className={tapIndex == 3 ? "" : "hidden"}>
          <div className="text-black text-center  text-q-title font-normal font-['Varela']">
            {question3.title}
          </div>

          <div className="flex flex-wrap justify-evenly mt-5">
            {question3.items.map((item, index) => (
              <div key={index} className="w-1/2 md:w-1/5 mb-5">
                <div className="flex flex-col  text-center justify-center tc-w-content mx-auto">
                  <div className="text-black  text-[15px] font-normal font-['Varela'] my-2  md:h-12 h-10">
                    {item.name}
                  </div>
                  <div
                    className="tc-circle-option mx-auto selected-tree"
                    onClick={(e) =>
                      HandleAnswers(e, 3, { v: item.value, op: item.option })
                    }
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  END:3 */}

        {/*  BEGIN:4 */}
        <div className={tapIndex == 4 ? "" : "hidden"}>
          <div className="text-black text-center  text-q-title font-normal font-['Varela']">
            {question4.title}
          </div>

          <div className="flex flex-wrap justify-evenly mt-5">
            {question4.items.map((item, index) => (
              <div key={index} className="w-1/2 md:w-1/5 mb-5">
                <div className="flex flex-col  text-center justify-center tc-w-content mx-auto">
                  <div className="text-black  text-[15px] font-normal font-['Varela'] my-2  md:h-12 h-10">
                    {item.name}
                  </div>
                  <div
                    className="tc-circle-option mx-auto selected-four"
                    onClick={(e) =>
                      HandleAnswers(e, 4, { v: item.value, op: item.option })
                    }
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  END:4 */}

        {/*  BEGIN:5 */}
        <div className={tapIndex == 5 ? "" : "hidden"}>
          <div className="text-black text-center  text-q-title font-normal font-['Varela']">
            {question5.title}
          </div>

          <div className="flex flex-wrap justify-evenly mt-5">
            {question5.items.map((item, index) => (
              <div key={index} className="w-1/2 md:w-1/5 mb-5">
                <div className="flex flex-col  text-center justify-center tc-w-content mx-auto">
                  <div className="text-black  text-[15px] font-normal font-['Varela'] my-2  md:h-12 h-10">
                    {item.name}
                  </div>
                  <div
                    className="tc-circle-option mx-auto selected-five"
                    onClick={(e) =>
                      HandleAnswers(e, 5, { v: item.value, op: item.option })
                    }
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  END:4 */}

        {/*  BEGIN:result */}

        {loading && (
          <div className="fixed inset-0 z-50 bg-black opacity-75">
            <div className="flex items-center justify-center h-screen">
              <div className="loading-result"></div>
            </div>
          </div>
        )}
        {/*  END:result */}

        <div className="divider-custom"></div>
        {tapIndex < 6 && (
          <div className="flex justify-center space-x-5">
            {tapIndex > 1 && (
              <button
                className="btn-v2 btn-cancel-v2 px-4"
                onClick={() => HandleMove(1)}
              >
                {translation.btn}
              </button>
            )}
            <button
              className="btn-v2 btn-black-v2 px-4"
              onClick={() => HandleMove(2)}
            >
              <span>{translation.btn2}</span>
            </button>
          </div>
        )}

        <div className="divider-custom"></div>
      </div>
    </Container>
  );
}
