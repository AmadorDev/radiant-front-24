import React from 'react'
import Link from "next/link"
export default function LinkUrl({url,children}) {
  return (
   <li>
        <Link href={url}>{children}</Link>
   </li>
  )
}
