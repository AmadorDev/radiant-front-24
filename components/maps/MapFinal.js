import React from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => (
  <div className="">
    <div className="pin">
    </div>
    <div className="pulse"></div>
    {/* <div className="marker_one" />
    <div className="marker_two">{text}</div> */}
  </div>
);

const MapFinal = ({ center, zoom, text }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAP_KEY }}
        center={center}
        zoom={zoom}
      >
        <Marker lat={center.lat} lng={center.lng} text={text} />
      </GoogleMapReact>
    </div>
  );
};

export default MapFinal;
