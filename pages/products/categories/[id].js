// /pages/products/categories/[id].js

import { useRouter } from "next/router";
import { getProductsBySubCategory } from "../../../api/productApi";
import { ItemCardProduct } from "../../../components/ItemCardProduct";
import ModalDefault from "../../../components/modals/ModalDefault";
import { useState } from "react";
import Container from "../../../components/layouts/Container";
import CateCustom from "../../../components/home/CateCustom";
import translations from "../../../staticTranslations.json";
const ProductByCategory = ({ products, line, id, locale }) => {
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
      <CateCustom translation={translations?.categories}></CateCustom>
      <div className="divider-custom"></div>
      <div className="container">
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

      <ModalDefault showModal={modal} setShowModal={ToggleModal}>
        <div className="p-2 ">
          <div className="flex flex-col md:flex-row  md:justify-between px-3 space-y-5 md:space-x-5  items-center">
            <div className="products___line_img">
              <img src={detail.image_url} alt="" className="" />
            </div>
            <div className="flex-1 ">
              <div className="products__modal_title valera__font">
                {detail?.name}
              </div>
              <div
                className=" products__modal_content  modal__product_content"
                dangerouslySetInnerHTML={{ __html: detail?.description }}
              ></div>
              <button className="btn-v2 btn-black-v2 mt-3">
                <span>Contáctanos</span>
              </button>
            </div>
          </div>
        </div>
      </ModalDefault>
    </Container>
  );
};

export async function getServerSideProps({ query, locale }) {
  const response = await getProductsBySubCategory(query.id, locale);
  if (response) {
    return {
      props: {
        products: response,
        id: query.id,
        locale,
      },
    };
  }
  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
    props: {},
  };
}

export default ProductByCategory;
