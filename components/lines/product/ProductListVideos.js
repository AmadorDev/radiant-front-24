import { useContext,useState } from 'react'

import menuContext from '../../../contexts/menu/menuContext'
import Divider from '../../utils/Divider'
import DividerDos from '../../utils/DividerDos'
import FullScreenVideo from '../../utils/FullScreenVideo'
import ItemVideo from '../../utils/ItemVideo'
import ModalAnimate from '../../utils/ModalAnimate'
import TitleAndSubtitle from '../../utils/TitleAndSubtitle'
import Button from '../../widtgets/Button'

export default function ProductListVideos({videos}) {
    const {line_st} = useContext(menuContext)

    const [ytLink, setYyLink] = useState(null);
    const [showModal, setShowModal] = useState(false);

    function setLinkVideo(link) {
        setYyLink(link);
        setShowModal(true);
      }
  return (
    <>
      {videos ? (
        <>
          <Divider></Divider>
          <TitleAndSubtitle
            title={`${line_st?.video}`}
            description={``}
          ></TitleAndSubtitle>
          <DividerDos></DividerDos>

          <div className="row h-100 w-100">
            <ModalAnimate
              show={showModal}
              setShow={setShowModal}
              setYyLink={setYyLink}
            >
              {ytLink ? (
                <FullScreenVideo
                  link={ytLink}
                  setYyLink={setYyLink}
                ></FullScreenVideo>
              ) : null}
            </ModalAnimate>
          </div>
          <div className="row justify-around">
            {videos?.map((item, index) => (
              <ItemVideo key={index} link={item?.link}>
                <p className="item_title text-center my-4">{item?.title}</p>
                <p className="mx-3">{item?.content}</p>
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                  <Button
                    className="mt-3"
                    onClick={() => setLinkVideo(item?.link)}
                  >
                   {line_st?.watch}
                  </Button>
                  <a href={`https://youtu.be/${item?.link}`} target="_blank">
                    <Button className=" mt-3">{line_st?.yt}</Button>
                  </a>
                </div>
              </ItemVideo>
            ))}
          </div>
        </>
      ) : null}
    </>
  )
}
