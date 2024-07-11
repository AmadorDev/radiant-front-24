import Head from "next/head";
import React from "react";

export default function HeadGlobal({ children }) {
  return (
    <Head>
      <>{children}</>
    </Head>
  );
}
