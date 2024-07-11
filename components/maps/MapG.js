import React from "react";
import GoogleMap  from "google-map-react";
export default function MapG() {
  const defaultProps = {
    center: {
      lat: -12.046373,
      lng: -77.042755,
    },
    zoom: 11,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 },
  };
  function renderMarkers(map, maps) {
    
    let marker = new maps.Marker({
      position: { lat: -12.17574, lng: -76.93092 },
      map,
      title: "Hello World!",
    });

    let markerq = new maps.Marker({
      position: { lat: -12.2366102, lng: -76.9156681 },
      map,
      title: "Hello sdf!",
    });
  }

  function onChildClick(key, childProps){
    console.log(key)
  }
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.MAP_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChildClick={({key, childProps})=>onChildClick(key, childProps)}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
        {/* <AnyReactComponent onMarkerClick={()=>ss} lat={-12.17574} lng={-76.93092} text="ESIKA" />
        <AnyReactComponent onMarkerClick={()=>ss} lat={-12.2366102} lng={-76.9156681} text="LABEL" /> */}
      
      </GoogleMap>
    </div>
  );
}
function ss(){
    console.log("dsfsdfsdfsdf")
}
function AnyReactComponent({ text }) {
    
  // const syleMarker = {
  //     position: "absolute",
  //     width: 50,
  //     height: 50,
  //     left: -50 / 2,
  //     top: -50 / 2,

  //     border: "5px solid #f44336",
  //     borderRadius: 50,
  //     backgroundColor: "white",
  //     textAlign: "center",
  //     color: "#3f51b5",
  //     fontSize: 16,
  //     fontWeight: "bold",
  //     padding: 4,
  //   };

  return <div className="marker" >{text}</div>;
}
