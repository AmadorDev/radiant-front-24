import React from "react";

export default function VideoItemHome({ link, children }) {
  return (
    <div className="container-responsive-iframe">
      <iframe
        className="responsive-iframe"
        src={`https://www.youtube.com/embed/${link}?controls=0`}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      />
      
    </div>
  );
}
