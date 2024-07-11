import Image from "next/image";
import React from "react";

export default function ItemList({ children, image, title = "" }) {
//   return (
//     <div className="col-12 col-md-4  d-flex justify-content-center mt-5">
//       <div className="card p-2" style={{ width: "25rem" }}>
//         <img src={image} className="card-img-top" alt={title} />
//         <div className="card-body">
//           {/* <h5 className="card-title">Card title</h5> */}
//           <p className="card-text mt-4">
//             {children}
//           </p>
          
//         </div>
//       </div>
//     </div>
//   );

  return (
    <div className="col-12 col-md-4  align-self-center mt-3 mt:md-0">
      <div className="">
        {" "}
        <img
          src={image}
          alt=""
          // width={500}
          // height={500}
          className="img-fluid img-novedades"
        ></img>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}
