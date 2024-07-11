import { callFetch } from "../utils/CallFetch";

export async function getResultTest(locale,line) {
  try {
    const params = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        locale: locale,
      },
    };
    
    const res = await callFetch(`${process.env.BACK_API}/test/${line}`, params);
    return res ? res : null;
  } catch (error) {
    return null;
  }
}
