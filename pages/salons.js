/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";

import Container from "../components/layouts/Container";
import { getSalon } from "../api/salonApi";

import MapFinal from "../components/maps/MapFinal";

function salons({ data, translation ,locale}) {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(16);
  const [active, setActive] = useState(0);
  const [storeName, setStoreName] = useState("");

  useEffect(() => {
    if (center.lat !== 0 && center.lng !== 0) {
      const calculatedZoom = getZoomLevel(1000, center.lat);
      setZoom(calculatedZoom);
    }
  }, [center]);

  useEffect(() => {
    FirstSelected(data);
  }, []);

  const getZoomLevel = (radius, lat) => {
    const scale = radius / 5000;
    return Math.round(16 - Math.log(scale) / Math.log(2));
  };

  const handleSelected = (item) => {
    setCenter({ lat: parseFloat(item.lat), lng: parseFloat(item.lng) });
    setStoreName(item.name);
    setActive(item.id);
  };

  function FirstSelected(data) {
    if (data) {
      let item = data[0];
      if (item) {
        setCenter({ lat: parseFloat(item.lat), lng: parseFloat(item.lng) });
        setStoreName(item.name);
        setActive(item.id);
      }
    }
  }

  return (
    <Container>
      <div className="container flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-5">
        <div className="w-full lg:w-[550px]">
          <div className="text-base text-gray-600 uppercase font-semibold">
           {locale == 'en-US'?'stores':'tiendas'}  ({data.length}) 
          </div>
          <div className="border border-b border-gray-600"></div>
          <div className="map-h-content px-2 mt-2 map-scroll">
            {data.map((item, index) => (
              <div
                className={`map-card-item p-3 mb-3 cursor-pointer ${
                  active === item.id ? "active" : ""
                }`}
                key={index}
                onClick={() => handleSelected(item)}
              >
                <div className="map_name h-8">{item.name}</div>
                <div className="map_address">{item.address}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[550px]">
          {data.length > 0&&<MapFinal center={center} zoom={zoom} text={storeName} />}
        </div>
      </div>
      <div className="divider-custom"></div>
    </Container>
  );
}

export async function getServerSideProps({ locale }) {
  try {
    const res = await getSalon(locale);
    console.log("------------------------------", res);
    if (res?.status !== "Fail") {
      return {
        props: {
          data: res?.data,
          translation: res?.translation,
          locale
        },
      };
    } else {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default salons;
