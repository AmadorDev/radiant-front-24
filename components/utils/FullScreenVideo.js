import React from "react";

export default function FullScreenVideo({ link }) {
  return (
    <div className="container-responsive-iframe">
      <iframe
        //  width={560}
        //  height={315}
        className="responsive-iframe"
        src={`https://www.youtube.com/embed/${link}`}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={1}
      />
    </div>
  );
}
