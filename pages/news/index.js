import React, { useEffect, useState ,useRef} from "react";

import TitleAndSubtitle from "../../components/utils/TitleAndSubtitle";
import ItemProd from "../../components/List/ItemProd";
import Button from "../../components/widtgets/Button";

import { useRouter } from "next/router";
import Divider from "../../components/utils/Divider";
import Breakcrums from "../../components/layouts/Breakcrums";
import DividerDos from "../../components/utils/DividerDos";
import Container from "../../components/layouts/Container";
import { getEvents, getNews } from "../../api/newApi";
import _tran from "../../staticTranslations.json";
import ItemBreack from "../../components/layouts/ItemBreack";
import Events from "../../components/news/Events";
import Gallery from "../../components/news/Gallery";
import SliderCover from "../../components/layouts/SliderCover";



export default function index() {
  const router = useRouter();


  const { query, locale } = useRouter();
  const [news, setNews] = useState(null);
  const [translation, setTranslation] = useState(null)
  const [events, setEvents] = useState(null)

  const SeventRef = useRef(null);
  const scrollToElement = () => SeventRef.current.scrollIntoView();

  const info = _tran?.global_locale.filter((item, ind) => item.locale === locale)[0];
  const ListNews = async () => {
    try {
      const resp = await getNews(locale);
     
      setTranslation(resp?.translation);
      if (resp?.rows > 0) {
        setNews(resp.data);
      }
    } catch (error) {}
  };

  const getEvent = async ()=>{
    try {
      const resp = await getEvents(locale);
      
      if (resp?.rows > 0) {
        setEvents(resp.data);
        if(query?.sev){
          scrollToElement()
        }
        
      }
    } catch (error) {}
  }

  useEffect(() => {
    ListNews();
    getEvent();
    
  }, []);

  return (
    
   
    <Container coverDefault={true}>
     
      <SliderCover/>
     
      <Breakcrums>
        <ItemBreack title={`${info?.home}`} ruta="/"></ItemBreack>
      </Breakcrums>
      <Divider></Divider>
      <TitleAndSubtitle
        title={translation?.title}
        // subtitle={translation?.shortname}
        // description={translation?.description}
      ></TitleAndSubtitle>
      <DividerDos></DividerDos>
     
      <div className="container">
        {/* <div className="row justify-center">
          {news?.map((item, index) => (
            <div className="col-12 col-md-4" key={index}>
              <ItemProd
                title={item?.title}
                description={item?.content}
                imagefile={item?.image}
              >
                <Button
                  className="px-5"
                  onClick={() => router.push(`/news/${item.slug}`)}
                >
                  {info?.more}
                </Button>
              </ItemProd>
            </div>
          ))}
        </div>
        <div ref={SeventRef}></div>
        <Events data={events} ></Events> */}
        
        <Gallery></Gallery>
      </div>
    </Container>
   
  );
}
