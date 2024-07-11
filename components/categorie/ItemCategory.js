import React from "react";

export default function ItemCategory({ title, onClick }) {
  return (
    <li className="nav-item " role="presentation" onClick={onClick}>
      <a
        className={`
nav-link
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
nav-item-cate-li
`}
        // ${active ? 'active':''}

        data-bs-toggle="pill"
        data-bs-target="#tabs-home"
        role="tab"
        aria-controls="tabs-home"
        aria-selected="true"
      >
        {title}
      </a>
    </li>
  );
}
