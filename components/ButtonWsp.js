import React from "react";
import Link from "next/link";

export default function ButtonWsp() {
  return (
    <Link href="https://wa.me/51941840858?text=¡Hola! Deseo mas información sobre la gama de productos de Radiant ">
      <a className="whatsapp" target="_blank">
        <i className="fa fa-whatsapp  whatsapp-icon"></i>
      </a>
    </Link>

    // <div className="btn-whatsapp">
    //  <div className=" bg-green-700 children-w shadow-sm">
    //  <div className="flex items-center justify-center content-center cursor-pointer">
    //  <i className="fa fa-whatsapp fa-3x flex text-white " aria-hidden="true"></i>
    //  </div>
    //  </div>
    // </div>
  );
}
