import Container from "../components/layouts/Container";
import LinesDest from "../components/home/LinesDest";
import Galery from "../components/home/Galery";
import TestInfo from "../components/home/TestInfo";
import LastInfo from "../components/home/LastInfo";
import translations from "../staticTranslations.json";
import Banner from "../components/layouts/Banner";
import Videos from "../components/Videos";
import Contador from "../components/widtgets/Contador";
import CateCustom from "../components/home/CateCustom";
import Whatsapp from "../components/home/Whatsapp";
import FindProducts from "../components/home/FindProducts";
import HairTest from "../components/home/HairTest";
import ServicesCustom from "../components/home/ServicesCustom";

export default function index() {
  const translation = translations?.text_home;
  const services = translations?.services;

  return (
    <Container>
      <Banner></Banner>
      <CateCustom translation={translations?.categories}></CateCustom>
      {/* <LinesDest text={text_home?.line}></LinesDest> */}
      {/* <Galery text={text_home?.galery}></Galery> */}
      {/* <Videos></Videos> */}

      
      <TestInfo text={translation?.test}></TestInfo>
      {/* <FindProducts translation={translation?.find_product}></FindProducts> */}
      <HairTest translation={translation?.test_hair}></HairTest>
      {/* <ServicesCustom translation={services}></ServicesCustom> */}
      {/* <LastInfo
        textLeft={text_home?.left}
        textRight={text_home?.right}
      ></LastInfo> */}
      {/* <Contador></Contador> */}

      <Whatsapp />
    </Container>
  );
}
{
  /* <div className="container">
<div className="row m-0 p-0 d-flex justify-content-center ">
  {novedades?.map((item, index) => (
    <ItemList image={item.image} key={index}>
      {item.description}
    </ItemList>
  ))}
</div>
</div> */
}
