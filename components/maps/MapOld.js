import Map from "google-map-react";
import React, { useState } from "react";
import Button from "../widtgets/Button";

export default function MapOld({ points,setSalonSelect }) {
  const defaultProps = {
    center: {
      lat: -11.9129786,
      lng: -76.9562446,
    },
    zoom: 10,
  };

  let aaaa=[
    { lat: '-12.17574', lng: '-76.93092',id:1 }
  ]
  // function renderMarkers(map, maps) {
  // }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Map
        bootstrapURLKeys={{ key: process.env.MAP_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        // onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
        {points.map((salon,index) => {
          return (
            <MyMarker
              key={index}
              lat={parseFloat(salon?.lat)}
              lng={parseFloat(salon?.lng)}
              id={salon?.id}
              salon={salon}
              setSalonSelect={setSalonSelect}
            />
          );
        })}


        
      </Map>
    </div>
  );
}

const MyMarker = ({ id, $hover, salon ,setSalonSelect}) => {
  console.log('-potin',salon)
  return (
    <div className="flex " onClick={()=>setSalonSelect(salon)}>
      <div className="pin"></div>
      <div className="pulse"></div>
    </div>
  );
};
