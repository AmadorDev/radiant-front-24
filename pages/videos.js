
import TitleAndSubtitle from "../components/utils/TitleAndSubtitle";
import ItemProd from "../components/List/ItemProd";
import Button from "../components/widtgets/Button";

import Divider from "../components/utils/Divider";
import Breakcrums from "../components/layouts/Breakcrums";
import Link from "next/link";
import DividerDos from "../components/utils/DividerDos";
import Container from "../components/layouts/Container";

export default function details() {
  return (
    <Container>
      <Breakcrums>
        {" "}
        <li className="flex items-center">
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
      </Breakcrums>
      <Divider></Divider>
      <TitleAndSubtitle
        title="Videos destacados"
        subtitle={`“Entérate todo lo que tenemos para ti”`}
      ></TitleAndSubtitle>
      <DividerDos></DividerDos>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <img src="/dev/video.png"></img>
          </div>
        </div>

        <DividerDos></DividerDos>

        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <ItemProd
              title={`Título del video`}
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
              imagefile="/dev/video.png"
            >
             <div className="item p-0">
             <Button
                className="px-2" >
                VER video
              </Button>
              <Button className="px-2 ml-1">
               ver en youtube
              </Button>
             </div>
            </ItemProd>
          </div>
          <div className="col-12 col-md-4">
            <ItemProd
              title={`Título del video`}
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
              imagefile="/dev/video.png"
            >
            <div className="item p-0">
             <Button
                className="px-2" >
                VER video
              </Button>
              <Button className="px-2 ml-1">
               ver en youtube
              </Button>
             </div>
            </ItemProd>
          </div>
          <div className="col-12 col-md-4">
            <ItemProd
              title={`Título del video`}
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
              imagefile="/dev/video.png"
            >
             <div className="item p-0">
             <Button
                className="px-2" >
                VER video
              </Button>
              <Button className="px-2 ml-1 my-2 md:px-0">
               ver en youtube
              </Button>
             </div>
            </ItemProd>
          </div>
        </div>
      </div>
    </Container>
  );
}
