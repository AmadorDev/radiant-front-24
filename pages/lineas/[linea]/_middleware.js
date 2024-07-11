import { useRouter } from "next/router";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import getDetailLinea from "../../../api/lineaApi";

export async function middleware(NextRequest, NextFetchEvent) {

  let response = NextResponse.next()


  const res = await getDetailLinea(NextRequest.page.params?.linea,'en-US');
  if (res.rows > 0) {
    return response
  } else {
    return NextResponse.redirect('/')
  }
}
