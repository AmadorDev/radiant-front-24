import { getProductsCategory } from "../../api/productApi";
import Container from "../../components/layouts/Container";

import ModalDefault from "../../components/modals/ModalDefault";
import { useState } from "react";
import { ItemCardProduct } from "../../components/ItemCardProduct";

function Index({ products, query, locale }) {
  const [modal, setModal] = useState(false);
  const [detail, seDetail] = useState({});

  const HandleDetail = (item) => {
    seDetail(item);
    setModal(true);
  };
  const ToggleModal = () => {
    setModal(!modal);
  };
  return (
    <Container>
      <div className="container mx-auto ">
        <div className="relative">
          <img
            src="/images/v2/bg-hair-color.png"
            alt=""
            className="w-full"
            style={{ borderRadius: 13 }}
          />
          <div className="absolute bottom-0  w-full  flex justify-center items-end ">
            <div className="xs:text-base sm:text-2xl md:text-6xl font-normal text-white  font-['Varela'] uppercase">
              {query.slug}
            </div>
          </div>
        </div>
        <div className="divider-custom"></div>
        <div className="flex flex-wrap justify-evenly">
          {products.map((p, index) => (
            <ItemCardProduct
              key={index}
              item={p}
              HandleDetail={HandleDetail}
            ></ItemCardProduct>
          ))}
        </div>

        <div className="divider-custom"></div>
      </div>
      <ModalDefault showModal={modal} setShowModal={ToggleModal}>
        <div className="p-2 mb-4">
          <div className="flex flex-col md:flex-row  md:justify-between px-5 space-y-5 md:space-x-5  items-center">
            <div className="modal-prod modal-prod-border ">
              <img src={detail.image} alt="" className="modal-prod" />
            </div>
            <div>
              <div className="text-stone-950 text-[22px] font-normal font-['Varela']">
                {detail?.name}
              </div>
              <div className=" text-stone-950 text-[15px] font-normal font-['Varela'] mt-3  prod-detail-desc scroll-for" dangerouslySetInnerHTML={{ __html: detail?.description}}>
              </div>
              <button className="btn-v2 btn-black-v2 mt-3">
                <span>Contáctanos</span>
              </button>
            </div>
          </div>
        </div>
      </ModalDefault>
    </Container>
  );
}

export async function getServerSideProps({ query, locale }) {
  const product = await getProductsCategory(query.slug, locale);
  const products = product.data;
  console.log(products);
  if (products.length > 0) {
    return { props: { products, query, locale } };
  }
  return {
    redirect: {
      permanent: false,
      destination: "/products",
    },
    props: {},
  };
}
export default Index;
