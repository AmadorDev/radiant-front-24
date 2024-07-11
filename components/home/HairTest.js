import { useRouter } from "next/router";

import Link from "next/link";

export default function HairTest({ translation }) {
  const { locale } = useRouter();
  const trans = translation?.filter((item, ind) => item.locale === locale)[0];
  return (
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
              <span className="text-white text-base font-normal font-['Varela']" dangerouslySetInnerHTML={{ __html: trans?.sub }}>
               
              </span>
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

      <div className="text-center text-stone-950 text-3xl font-normal font-['Varela']">
        ¡CONOCE MÁS DE NUESTROS RESULTADOS RADIANT !
      </div>
      <div className="divider-custom"></div>
      <div className="flex flex-col md:flex-row md:justify-around lg:justify-between space-y-3 md:space-y-0 md:flex-wrap">
        <img src="/images/v2/tb1.png" alt="" className=" mb-3" />
        <img src="/images/v2/tb2.png" alt="" className=" mb-3" />
        <img src="/images/v2/tb3.png" alt="" className=" mb-3" />
      </div>
      <div className="divider-custom"></div>
    </div>
  );
}
