import Link from "next/link";
import { getProductsSearch } from "../../api/productApi";
import Container from "../../components/layouts/Container";
import translations from "../../staticTranslations.json";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Index({ product, query, locale }) {
  const translation = translations?.test_[locale];
  const router = useRouter();
  useEffect(() => {
    if (router.query.id) {
      // Remove the query parameter from the URL
      const newPath = router.pathname.replace("[id]", query.id);
      router.replace(newPath, undefined, { shallow: true });
    }
  }, [router]);

  useEffect(() => {
    const scrollToCenter = () => {
      const { scrollHeight, clientHeight } = document.documentElement;
      const scrollTop = (scrollHeight - clientHeight) / 2;
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    };

    scrollToCenter();
    window.addEventListener("resize", scrollToCenter);

    return () => {
      window.removeEventListener("resize", scrollToCenter);
    };
  }, []);

  return (
    <Container>
      <div className="container mx-auto">
        <div className="relative">
          <img
            src="/images/v2/test.png"
            alt=""
            className="w-full"
            style={{ borderRadius: 13 }}
          />
          <div className="absolute bottom-0  w-full  flex justify-center items-end ">
            <div className="xs:text-base sm:text-2xl md:text-6xl font-normal text-white  font-['Varela'] uppercase">
              TEST CAPILAR
            </div>
          </div>
        </div>
        <div className="divider-custom"></div>

        <div>
          <div className="text-black text-center text-q-title font-normal font-['Varela']">
            {translation.resultText}
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-x-0 sm:space-x-10 w-full md:w-3/4 mx-auto sm:mt-5 md:mt-14">
            <div className="tc-card-result">
              <img src={product?.image} alt="" className="test-result-img" />
            </div>
            <div className="">
              <div className="text-stone-950 md:text-[32px] text-[20px]  font-normal font-['Varela']">
                {product?.name}
              </div>
              <div
                className=" tc-card-result_description text-stone-950 md:text-[15px] text-[13px] font-normal font-['Varela']"
                dangerouslySetInnerHTML={{ __html: product?.description }}
              ></div>
            </div>
          </div>
        </div>
        <div className="divider-custom"></div>
        <div className="flex justify-center space-x-5">
          <Link href="/capillaries">
            <button className="btn-v2 btn-cancel-v2 px-4">
              {translation.btn3}
            </button>
          </Link>

          <Link href="/products">
            <button className="btn-v2 btn-black-v2 px-4">
              <span>{translation.btn4}</span>
            </button>
          </Link>
        </div>

        <div className="divider-custom"></div>
      </div>
    </Container>
  );
}

export async function getServerSideProps({ query, locale }) {
  const { id } = query;

  if (!id) {
    return {
      redirect: {
        permanent: false,
        destination: "/capillaries",
      },
      props: {},
    };
  }

  const product = await getProductsSearch(id, locale);

  if (product.success) {
    return { props: { product: product.items, query, locale } };
  }

  return {
    redirect: {
      permanent: false,
      destination: "/capillaries",
    },
    props: {},
  };
}
export default Index;
