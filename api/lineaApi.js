import { callFetch } from "../utils/CallFetch";

export default async function getDetailLinea(slug,locale) {
  try {
    const params = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "locale":locale
      },
    };

    const res = await callFetch(
      `${process.env.BACK_API}/lineas/${slug}`,
      params
    );
    return res ? res : null;
  } catch (error) {
    return null;
  }
}

export async function getProductsByLinea(slug,locale) {
  try {
    const params = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "locale":locale,
      },
    };

    const res = await callFetch(
      `${process.env.BACK_API}/products/linea/${slug}`,
      params
    );
    return res ? res : null;
  } catch (error) {
    return null;
  }
}


export async function getLineFeatured(locale) {
  try {
    const params = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "locale":locale,
      },
    };

    const res = await callFetch(
      `${process.env.BACK_API}/lineas/features/all`,
      params
    );
    return res ? res : null;
  } catch (error) {
    return null;
  }
}

/**
 * 
 * @param {*} linea 
 * @param {*} locale 
 * @returns 
 * ----------------------EVENTS----------------------
 */
export async function getEventByLinea(linea,page=1,locale) {
  try {
    const params = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "locale":locale,
      },
    };

    const res = await callFetch(
      `${process.env.BACK_API}/lineas/events/${linea}?page=${page}`,
      params
    );
    return res ? res : null;
  } catch (error) {
    return null;
  }
}

export async function getEventByLineaDetail(line,event,locale) {
  try {
    const params = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "locale":locale,
      },
    };
    
    const res = await callFetch(
      `${process.env.BACK_API}/lineas/events/${line}/${event}`,
      params
    );
    return res ? res : null;
  } catch (error) {
    return null;
  }
}

/**
 * 
 * @param {*} linea 
 * @param {*} locale 
 * @returns 
 * ----------------------Videos----------------------
 */

 export async function getVideoByLinea(linea,locale) {
  try {
    const params = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "locale":locale,
      },
    };

    const res = await callFetch(
      `${process.env.BACK_API}/lineas/videos/${linea}`,
      params
    );
    return res ? res : null;
  } catch (error) {
    return null;
  }
}