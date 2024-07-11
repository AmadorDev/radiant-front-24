import { useRouter } from "next/router";

export default function ServicesCustom({ translation }) {
  const { locale } = useRouter();
  const trans = translation?.filter((item, ind) => item.locale === locale)[0];
  return (
    <div className="bg-gray-">
      <div className="container">
        <div className="divider-custom"></div>
        <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-5">
          <div className="md:w-1/2">
            <div className="card-service flex p-4 mb-4 items-center">
              <div className="w-28">
                <img src="/images/v2/icon1.png" alt="" />
              </div>
              <div className="ml-4 w-full">
                <span className="card-service-tile">{trans?.title1}</span>
                <p className="card-service-subtile">{trans?.sub1}</p>
              </div>
            </div>
            <div className="card-service flex p-4 mb-4 items-center">
              <div className="w-28">
                <img src="/images/v2/icon2.png" alt="" className="" />
              </div>
              <div className="ml-4 w-full">
                <span className="card-service-tile">{trans?.title2}</span>
                <p className="card-service-subtile">{trans?.sub2}</p>
              </div>
            </div>
            <div className="card-service flex p-4 items-center">
              <div className="w-28 ">
                <img src="/images/v2/icon3.png" alt="" />
              </div>
              <div className="ml-4 w-full">
                <span className="card-service-tile">{trans?.title3}</span>
                <p className="card-service-subtile">{trans?.sub3}</p>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/v2/service.png" alt="" />
          </div>
        </div>
        <div className="divider-custom"></div>
      </div>
    </div>
  );
}
