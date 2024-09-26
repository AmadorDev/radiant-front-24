import { useRouter } from "next/router";
import Link from "next/link";
import GroupSwiperSimple from "../utils/GroupSwiperSimple";

export default function HairTest({ translation }) {
  const { locale } = useRouter();
  const trans = translation?.filter((item, ind) => item.locale === locale)[0];

  const lag = locale.split("-")[0] || "es";

  const images = [
    {
      image_url: "/images/slides/a.svg",
    },
    {
      image_url: "/images/slides/b.svg",
    },
    {
      image_url: "/images/slides/c.svg",
    },
  ];
  return (
    <div>
      <div className="container mx-auto ">
        <div className="divider-custom"></div>
        <div className="relative">
          <img
            src="/images/HomeHairImage.png"
            className="image-border h-full w-full "
            alt=""
          />
          <div className="absolute top-0  w-full h-full">
            <div className=" flex flex-col w-3/4  mx-auto h-full items-center   justify-center">
              <div className="text-white text-3xl font-normal font-['Varela'] text-center">
                {trans?.title}
              </div>
              <div className="text-center">
                <span
                  className="text-white text-base font-normal font-['Varela']"
                  dangerouslySetInnerHTML={{ __html: trans?.sub }}
                ></span>
              </div>
              <Link href="/capillaries">
                <button className="btn-v2 btn-white-v2 font-semibold px-3 mt-3">
                  {trans?.btn}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider-custom"></div>
      </div>

     

      <div className="container-fluid" style={{ background: "#F6F6F6" }}>
          <div className="divider-custom"></div>
          <div className="container">
            <div className="products__title">
              {lag == "en" ? "LEARN MORE ABOUT OUR RADIANT RESULTS!" : "¡CONOCE MÁS DE NUESTROS RESULTADOS RADIANT !"}
            </div>
            <GroupSwiperSimple data={images}></GroupSwiperSimple>
          </div>
          <div className="divider-custom"></div>
        </div>
    </div>
  );
}
