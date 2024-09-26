import React, { useState } from "react";
import Container from "../components/layouts/Container";
import { useRouter } from "next/router";
import ModalDefault from "../components/modals/ModalDefault";

export default function advisors() {
  const [tab, setTab] = useState(1);
  const [modal, setModal] = useState(true);

  function tabHandle(value) {
    console.log(value);
    setTab(value);
  }

  const HandleDetail = (item) => {
    seDetail(item);
    setModal(true);
  };
  const ToggleModal = () => {
    setModal(!modal);
  };

  const { locale } = useRouter();

  const lag = locale.split("-")[0] || "es";
  const advisorsData = [
    {
      id: 1,
      name: "Concepción Madrid",
      phone: "997 540 325",
      address: "Callao",
      type: 1,
    },
    {
      id: 1,
      name: "Doris Machado",
      phone: "932 817 384",
      address:
        "Rimac, San Martín de Porres,(HASTA DUEÑAS Y TOMÁS VALLE)Independencia, los OLIVOS",
      type: 1,
    },
    {
      id: 1,
      name: "Emma Chávez",
      phone: "991 951 677",
      address: "Villa el Salvador, Lurín,Pachacamac",
      type: 1,
    },
    {
      id: 1,
      name: "EriKa de Lama",
      phone: "913 702 800",
      address: "San Miguel, Magdalena, Lince, San Isidro",
      type: 1,
    },
    {
      id: 1,
      name: "Jacqueline LeZaMa",
      phone: "997 851 254",
      address: "San Juan de Lurigancho",
      type: 1,
    },
    {
      id: 1,
      name: "YANINA ARANGUREN",
      phone: "924 788 825",
      address: "SAN BORJA, SAN LUIS, SALAMANCA, MIRAFLORES",
      type: 1,
    },
    {
      id: 1,
      name: "JHOSELYN VALQUI",
      phone: "974 489 917",
      address: "SURCO, SURQUILLO",
      type: 1,
    },
    {
      id: 1,
      name: "EDWIN LEÓN",
      phone: "983 119 036",
      address: "San Martín de Porres,(DESDE TOMÁS VALLE) VENTANILLA, ANCÓN",
      type: 1,
    },
    {
      id: 1,
      name: "SUSSY CCOLCE",
      phone: "971 559 238",
      address: "CHORRILLOS, BARRANCO",
      type: 1,
    },
    {
      id: 1,
      name: "ALEX ESPINOZA",
      phone: "904 538 441",
      address: "LA MOLINA, SANTA ANITA, CIENEGUILLA, MANCHAY",
      type: 1,
    },
    {
      id: 1,
      name: "JOSÉ COLLAZOS",
      phone: "997 531 039",
      address:
        "LA VICTORIA, JESÚS MARÍA,PUEBLO LIBRE, BREÑA, CERCADO DE LIMA, EL AGUSTINO",
      type: 1,
    },
    {
      id: 1,
      name: "KARLO VILLAVICENCIO",
      phone: "997 500 042",
      address: "COMAS, CARABAYLLO",
      type: 1,
    },
    {
      id: 1,
      name: "MARCO CARREÑO",
      phone: "997 597 861",
      address: "ATE, CHACLACAYO, CHOSICA, CARAPONGO",
      type: 1,
    },
    {
      id: 1,
      name: "JILMAR SANGANA",
      phone: "925 431 929",
      address: "VILLA MARÍA, SAN JUAN DE MIRAFLORES",
      type: 1,
    },
    {
      id: 1,
      name: "MIRIAM JUSTINIANO",
      phone: "950 476 900",
      address: "PUENTE PIEDRA",
      type: 1,
    },
    {
      id: 1,
      name: "ALINA ASCENCIO",
      phone: "916 625 791",
      address:
        "HUANCAYO, SELVA CENTRAL, SELVA ORIENTAL, IQUITOS, CERRO DE PASCO, HUANCAVELICA",
      type: 2,
    },
    {
      id: 1,
      name: "MARIELLA CAMPOS",
      phone: "939 632 143",
      address: "CHICLAYO, LAMBAYEQUE, CAJamarca, PIURA",
      type: 2,
    },
    {
      id: 1,
      name: "MERY SILVA",
      phone: "932 818 668",
      address:
        "CUZCO, ANDAHUAYLAS, ABANCAY,CONVENCION, QUILLABAMBA, PUNO, PUERTO MALDONADO, SICUANI",
      type: 2,
    },
    {
      id: 1,
      name: "MILAGROS ULLOA",
      phone: "997 501 232",
      address: "TRUJILLO, CHIMBOTE",
      type: 2,
    },
    {
      id: 1,
      name: "NOELIA CHARCA",
      phone: "984 845 761",
      address: "AREQUIPA",
      type: 2,
    },
    {
      id: 1,
      name: "JENNY CALLE",
      phone: "996 962 585",
      address: "TACNA, MOQUEGUA, ILO",
      type: 2,
    },
    {
      id: 1,
      name: "VICTOR ASCENCIO",
      phone: "997 597 974",
      address: "ICA",
      type: 2,
    },
    {
      id: 1,
      name: "VERÓNICA RAMIREZ",
      phone: "986 511 555",
      address:
        "TARAPOTO, CHACHAPOYAS, JAEN,MOYOBAMBA, NUEVO CAJAMARCA,RIOJA, JUANJI, BAGUA CHICA, BAGUA GRANDE, YURIMAGUAS",
      type: 2,
    },
  ];

  return (
    <Container>
      <div style={{ background: "#F6F6F6" }}>
        <div className="container">
          <div className="divider-custom"></div>
          <div className="flex  justify-center space-x-10">
            <div
              className={`valera__font advisor__title cursor-pointer ${
                tab === 1 ? "active" : ""
              }`}
              onClick={() => tabHandle(1)}
            >
              {lag == "es" ? "ASESORES LIMA " : "LIMA ADVISORS"}
            </div>
            <div
              className={`valera__font advisor__title   cursor-pointer ${
                tab === 2 ? "active" : ""
              }`}
              onClick={() => tabHandle(2)}
            >
              {lag == "es" ? "ASESORES PROVINCIA " : "PROVINCE ADVISORS"}
            </div>
          </div>

          <div className="table-container mt-5">
            <table className=" mx-auto table__">
              <thead>
                <tr className="table___thead valera__font">
                  <th className="border-rl"></th>
                  <th>
                    {lag == "es" ? "Asesores Radiant" : "Radiant Advisors"}
                  </th>
                  <th>{lag == "es" ? "Contacto" : "Contact"}</th>
                  <th className="border-rll">
                    {lag == "es" ? "Zonas" : "Zones"}
                  </th>
                </tr>
              </thead>
              <tbody className="table___body">
                {advisorsData
                  ?.filter((x) => x.type === tab)
                  .map((item, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : ""}
                    >
                      <td width={"10%"} className="text-center">
                        {index + 1}
                      </td>
                      <td className="text-center  w-[200px]">
                        <div className="w-[200px] text-center flex justify-center">
                          {item.name}
                        </div>
                      </td>
                      <td className="text-center">{item.phone}</td>
                      <td className="w-[400px] text-center">
                        <div className="h-16 items-center flex w-[400px] text-center justify-center flex-wrap">
                          {item.address}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="divider-custom"></div>
        </div>
      </div>

      <ModalDefault showModal={modal} setShowModal={ToggleModal}>
        <div className="p-10 ">
          <div className="modal__contact">
            {" "}
            {lag == "es" ? "SALON RADIANT" : "RADIANT SALON"}
          </div>

          <div className="modal__contact_text mt-2 mb-4">
            {" "}
            {lag == "es" ? "CONTÁCTATE CON" : " CONTACT US"}
          </div>

          <div className="modal__contact_adv px-5 py-2">
            <div className="a">JOSSELINE CHUICA</div>
            <div className="b">
              {" "}
              {lag == "es" ? "JEFA DE VENTAS" : "SALES HEAD"}
            </div>
            <div className="a flex items-center mt-2">
              <a
                href="https://api.whatsapp.com/send?phone=946591197&text=Hola"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <img
                  src="/images/categories/whatsapp.svg"
                  alt=""
                  className="mr-2"
                />
                946 591 197
              </a>
            </div>
          </div>
        </div>
      </ModalDefault>
    </Container>
  );
}
