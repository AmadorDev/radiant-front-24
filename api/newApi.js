import { callFetch } from "../utils/CallFetch";

export async function getNews(locale) {
  try {
    const params = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        locale: locale,
      },
    };
    const res = await callFetch(`${process.env.BACK_API}/news`, params);
    return res ? res : null;
  } catch (error) {
      
    return null;
  }
}

export async function getNewsDetail(locale,slug) {
    try {
      const params = {
        method: "GET",
        headers: {
          "content-type": "application/json",
          locale: locale,
        },
      };
      const res = await callFetch(`${process.env.BACK_API}/news/${slug}`, params);
      return res ? res : null;
    } catch (error) {
        
      return null;
    }
  }


  //**************** events */

  export async function getEvents(locale) {
    try {
      const params = {
        method: "GET",
        headers: {
          "content-type": "application/json",
          locale: locale,
        },
      };
      const res = await callFetch(`${process.env.BACK_API}/events`, params);
      return res ? res : null;
    } catch (error) {
        
      return null;
    }
  }

   //**************** events */

   export async function getGalery(locale=null) {
    try {
      const params = {
        method: "GET",
        headers: {
          "content-type": "application/json",
          locale: locale,
        },
      };
      const res = await callFetch(`${process.env.BACK_API}/galleries`, params);
      return res ? res : null;
    } catch (error) {
        
      return null;
    }
  }

  export async function getEventDetail(locale,slug) {
    try {
      const params = {
        method: "GET",
        headers: {
          "content-type": "application/json",
          locale: locale,
        },
      };
      const res = await callFetch(`${process.env.BACK_API}/events/${slug}`, params);
      return res ? res : null;
    } catch (error) {
        
      return null;
    }
  }

//?:latest--------//
  export async function getLatest(locale) {
    try {
      const params = {
        method: "GET",
        headers: {
          "content-type": "application/json",
          locale: locale,
        },
      };
      const res = await callFetch(`${process.env.BACK_API}/latest`, params);
      return res ? res : null;
    } catch (error) {
        
      return null;
    }
  }

  //?:banner--------//
  export async function getBanner(locale) {
    try {
      const params = {
        method: "GET",
        headers: {
          "content-type": "application/json",
          locale: locale,
        },
      };
      const res = await callFetch(`${process.env.BACK_API}/banners`, params);
      return res ? res : null;
    } catch (error) {
        
      return null;
    }
  }