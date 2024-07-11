import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ItemCategory from "../categorie/ItemCategory";
import HoverCate from "../categorie/HoverCate";

export default function MenuItem({ item, className = "" }) {
  const { asPath, pathname } = useRouter();


  return (
    <>
      {item.code !== "cate" ? (
        <li className={className + " " + ""}>
          <Link href={item.link}>
            <a
              className={asPath === item.link ? "active" : null}
              target={item.ex ? "_blank" : null}
            >
              {" "}
              {item.name}
            </a>
          </Link>
        </li>
      ) : (
        <>
          <Mobil item={item}></Mobil>
          <LineasMd item={item}></LineasMd>
        </>
      )}
    </>
  );
}

function LineasMd({ item }) {
  return (
    <li className="mega_items mobil_web">
      <a>
        {item.name}
        <i className="fa fa-angle-down" />
      </a>

      <div className="mega_menu">
        <ul className="mega_menu_inner">
         <HoverCate></HoverCate>
          {/* {item.cate?.map((cates, index) => (
            <li key={index}>
              <a className="item-cate">{cates.name}</a>
              <ul className="text-left">
                {cates.lineas?.map((ln, idx) => (
                  <li key={idx}>
                    <Link href={`/lineas/${ln.slug}`}>
                      <a>{ln.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))} */}
        </ul>
      </div>
    </li>
  );
}

function Mobil({ item }) {
  const [displayMenu, setDisplayMenu] = useState("none");
  function showMenu() {
    console.log(displayMenu);
    if (displayMenu === "none") {
      setDisplayMenu("block");
    } else {
      setDisplayMenu("none");
    }
  }
  return (
    <div className="mobil">
      <li className="menu-item-has-children ">
        <span className="menu-expand">
          <i
            className={
              displayMenu === "none" ? "fa fa-angle-down" : "fa fa-angle-up"
            }
          />
        </span>
        <a onClick={showMenu}>{item.name}</a>
        <ul className="sub-menu" style={{ display: displayMenu }}>
          {item.cate?.map((v, k) => (
            <li className="menu-item-has-children " key={k}>
              <SubMenu item={v}></SubMenu>
            </li>
          ))}
        </ul>
      </li>
    </div>
  );
}

function SubMenu({ item }) {
  const [displayItem, setDisplayItem] = useState("none");

  function showItem() {
    if (displayItem === "none") {
      setDisplayItem("block");
    } else {
      setDisplayItem("none");
    }
  }
  return (
    <>
      <span className="menu-expand">
        <i
          className={
            displayItem === "none" ? "fa fa-angle-down" : "fa fa-angle-up"
          }
        />
      </span>
      <a onClick={showItem}>
        {item.name} ({item.lineas?.length})
      </a>
      <ul className="sub-menu" style={{ display: displayItem }}>
        {item.lineas?.map((ln, idx) => (
          <li key={idx}>
            <Link href={`/lineas/${ln.slug}`}>
              <a>{ln.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
