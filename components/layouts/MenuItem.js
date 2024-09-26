import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ItemCategory from "../categorie/ItemCategory";
import HoverCate from "../categorie/HoverCate";

export default function MenuItem({ item, className = "" }) {
  const { asPath, pathname } = useRouter();
console.log(item);
  return (
    <>
      {
        <li className={className + " " + ""}>
          <Link href={item.link} className="text__li_final">
            <a
              className={
                asPath.startsWith(item.link) ? "active nav__item" : null
              }
              target={item.ex ? "_blank" : null}
            >
              {" "}
              {item.name} 
            </a>
          </Link>
        </li>
      }
    </>
  );
}
