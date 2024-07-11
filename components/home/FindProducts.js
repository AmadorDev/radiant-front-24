import { useRouter } from "next/router";

export default function FindProducts({ translation }) {
  const { locale } = useRouter();
  const trans = translation?.filter((item, ind) => item.locale === locale)[0];
  return (
    <div className="bg-gray">
      <div className="container">
        <div className="divider-custom"></div>
        <div className=" text-center text-stone-950 text-[32px] font-normal font-['Varela']">
          {trans?.title}
        </div>
        <div className="divider-custom"></div>

        <div className="flex flex-col md:flex-row justify-center text-center md:justify-between space-y-5 md:space-y-0">
          <div className="relative mx-auto">
            <img src="/images/p1.png" className="mb-1"></img>
            <div className="absolute bottom-0 text-center w-full  py-2 h-20">
              <div className="title-find-prod text-base text-center mx-3 border-t-2 border-gray-600 py-2">
                {trans.one}
              </div>
            </div>
          </div>
          <div className="relative mx-auto">
            <img src="/images/p2.png" className="mb-1"></img>
            <div className="absolute bottom-0 text-center w-full  py-2 h-20">
              <div className="title-find-prod text-base text-center mx-3 border-t-2 border-gray-600 py-2">
                {trans.two}
              </div>
            </div>
          </div>
          <div className="relative mx-auto">
            <img src="/images/p3.png" className="mb-1"></img>
            <div className="absolute bottom-0 text-center w-full  py-2 h-20">
              <div className="title-find-prod text-base text-center mx-3 border-t-2 border-gray-600 py-2">
                {trans.tree}
              </div>
            </div>
          </div>
          <div className="relative mx-auto">
            <img src="/images/p4.png" className="mb-1"></img>
            <div className="absolute bottom-0 text-center w-full  py-2 h-20">
              <div className="title-find-prod text-base text-center mx-3 border-t-2 border-gray-600 py-2" >
                {trans.four}
              </div>
            </div>
          </div>
        </div>
        <div className="divider-custom"></div>
      </div>
    </div>
  );
}
