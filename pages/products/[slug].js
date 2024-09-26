import { getProductsByLine, getProductsCategory } from "../../api/productApi";
import Container from "../../components/layouts/Container";

import ModalDefault from "../../components/modals/ModalDefault";
import { useContext, useState } from "react";
import { ItemCardProduct } from "../../components/ItemCardProduct";
import GroupSwiper from "../../components/utils/GroupSwiper";
import menuContext from "../../contexts/menu/menuContext";

function Index({ products, line, query, locale }) {
  const [modal, setModal] = useState(false);
  const [detail, seDetail] = useState({});

  const lag = locale.split("-")[0] || "es";
  const { menu_options } = useContext(menuContext);
  const lines = menu_options?.filter(
    (p) => p.locale === lag && p.category_id == 1 && p.line_id != line.id
  );

  const HandleDetail = (item) => {
    seDetail(item);
    setModal(true);
  };
  const ToggleModal = () => {
    setModal(!modal);
  };
  return (
    <Container>
      <div className="container mx-auto">
        <div className="divider-custom"></div>

        <div className="flex flex-col sm:flex-row justify-center items-start">
          <div className="products___line_img mb-4 sm:mb-0 sm:mr-7">
            <img
              src={line.image_url}
              alt={line.name}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full sm:w-1/2">
            <div className="products___line_title text-xl  mb-2">
              {line.name}
            </div>
            <div
              className="product-sub w-full products___line_description"
              dangerouslySetInnerHTML={{ __html: line.description }}
            ></div>
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
      </div>

      {line.category_id === 1 && (
        <div className="container-fluid" style={{ background: "#F6F6F6" }}>
          <div className="divider-custom"></div>
          <div className="container">
            <div className="products__title">
              {lag == "en" ? "RECOMMENDED PRODUCTS" : "PRODUCTOS RECOMENTADOS"}
            </div>
            <GroupSwiper data={lines}></GroupSwiper>
          </div>
          <div className="divider-custom"></div>
        </div>
      )}

      <ModalDefault showModal={modal} setShowModal={ToggleModal}>
        <div className="p-2 ">
          <div className="flex flex-col md:flex-row  md:justify-between px-3 space-y-5 md:space-x-5  items-center">
            <div className="products___line_img">
              <img src={detail.image_url} alt=""  className=""/>
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
}

export async function getServerSideProps({ query, locale }) {
  const response = await getProductsByLine(query.slug, locale);

  if (response) {
    return {
      props: {
        products: response.products,
        line: response.line,
        query,
        locale,
      },
    };
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
