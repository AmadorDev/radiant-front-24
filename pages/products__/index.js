import { useState } from "react";
import Container from "../../components/layouts/Container";
import { getProducts } from "../../api/productApi";
import { ItemCardProduct } from "../../components/ItemCardProduct";
import ModalDefault from "../../components/modals/ModalDefault";

function index({ products }) {
  const [modal, setModal] = useState(false);
  const [detail, seDetail] = useState({});

  const HandleDetail = (item) => {
    seDetail(item);
    setModal(true);
  };
  const ToggleModal = () => {
    setModal(!modal);
  };
  console.log(products);
  return (
    <Container>
      <div className="divider-custom"></div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-evenly">
          {products.map((p, index) => (
            <ItemCardProduct
              key={index}
              item={p}
              HandleDetail={HandleDetail}
            ></ItemCardProduct>
          ))}
        </div>
      </div>
      <div className="divider-custom"></div>
      <ModalDefault showModal={modal} setShowModal={ToggleModal}>
        <div className="p-2 mb-4">
          <div className="flex flex-col md:flex-row  md:justify-between px-5 space-y-5 md:space-x-5 md:space-x-5 items-center">
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
  const product = await getProducts(locale);
  const products = product.data;
  console.log(products);
  if (products.length > 0) {
    return { props: { products, query, locale } };
  }
  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
    props: {},
  };
}
export default index;
