import { useRouter } from "next/router";
import Link from "next/link";

export default function CateCustom({ translation }) {
  const { locale } = useRouter();
  const trans = translation?.filter((item, ind) => item.locale === locale)[0];
  return (
    <div className="bg-gray">
      <div className="divider-custom"></div>
      <div className="container mx-auto">
        <div className="w-full mx-auto flex justify-center">
          <div>
            <div className="relative">
              <img src="/images/bg_hc.png" alt="" />
              <Link href="/products/hair-color">
                <button className="btn-v2 btn-white-v2 absolute bottom-3 right-4">
                  <span>Hair Color</span>
                  <img src="/images/right.png" alt="" className="ml-5" />
                </button>
              </Link>
            </div>
            <div className="relative">
              <img src="/images/bg_hcare.png" alt="" />
              <Link href="/products/hair-care">
                <button className="btn-v2 btn-white-v2 absolute bottom-3 right-4">
                  <span>Hair Care</span>
                  <img src="/images/right.png" alt="" className="ml-5" />
                </button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img src="/images/products.png" alt="" />
            <Link href="/products">
              <button className="btn-v2 btn-white-v2 absolute bottom-3  right-4">
                <span className="">{trans?.product}</span>
                <img src="/images/right.png" alt="" className="md:ml-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="divider-custom"></div>
    </div>
  );
}
