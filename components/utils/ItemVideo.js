import React from "react";

export default function ItemVideo({ link, children }) {
  return (
    <div className="col-12 col-md-4 my-5">
      <div className="container-responsive-iframe" style={{borderRadius:'5%'}}>
      <iframe
        width={320}
        height={240}
        className="responsive-iframe"
        src={`https://www.youtube.com/embed/${link}?controls=0`}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
        
        
      />
      </div>
      {children}
    </div>
  );
}
