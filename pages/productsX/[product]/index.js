
import React from "react";
import {
  
  getProductsDetail,
} from "../../../api/productApi";
import Banner from "../../../components/layouts/Banner";
import Container from "../../../components/layouts/Container";
import Product from "../../../components/lines/product/Product";


function Detail({ product,query,locale }) {
 
  return (
    <Container>
      {/* <Banner></Banner> */}
       <Product query={query} locale={locale} product={product}></Product> 
    </Container>
  );
}

export async function getServerSideProps({ query, locale }) {
  const product = await getProductsDetail(query.line,query.product, locale);
  if (product?.rows > 0) {
    return { props: { product,query,locale } };
  }
  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
    props: {},
  };
}

export default Detail;
