import { useContext, useState } from "react";
import Container from "../../components/layouts/Container";
import { getProducts } from "../../api/productApi";
import Banner from "../../components/layouts/Banner";
import GroupSwiper from "../../components/utils/GroupSwiper";
import menuContext from "../../contexts/menu/menuContext";



function index({ products ,locale}) {
  const [modal, setModal] = useState(false);
  const [detail, seDetail] = useState({});
  const lag = locale.split("-")[0] || "es";
  const { menu_options } = useContext(menuContext);

  const lines = menu_options?.filter((p) => p.locale === lag && p.category_id == 1);
  const cabs = menu_options?.filter((p) => p.locale === lag && p.category_id == 2);

  return (
    <Container>
      <Banner></Banner>
      
      <div className="container">
        <div className="products__title">{lag == 'en'?'LINES':'LINEAS'}</div>
        <GroupSwiper data={lines}></GroupSwiper>

        <div className="line__x mt-5"></div>
        <div className="divider-custom"></div>

        <div className="products__title"> {lag == 'en'?'CABIN PRODUCTS':'PRODUCTOS DE CABINA'}</div>
        <GroupSwiper data={cabs}></GroupSwiper>

      </div>
      <div className="divider-custom"></div>
    </Container>
  );
}
export async function getServerSideProps({ query, locale }) {
  // const product = await getProducts(locale);
  // const products = product.data;
  // console.log(products);
  // if (products.length > 0) {
  //   return { props: { products, query, locale } };
  // }
  // return {
  //   redirect: {
  //     permanent: false,
  //     destination: "/",
  //   },
  //   props: {},
  // };

  const products = [];
  return { props: { products, query, locale } };
}
export default index;
