import axios from "axios";
import { callFetch } from "../utils/CallFetch";

export async function getProductsDetail(line, product, locale) {
  try {
    const params = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        locale: locale,
      },
    };
    const res = await callFetch(
      `${process.env.BACK_API}/products/${line}/${product}`,
      params
    );
    return res ? res : null;
  } catch (error) {
    return null;
  }
}

export async function getProductsCategory(category, locale) {
  try {
    locale = locale.split("-")[0] || "es";
    const response = await axios.get(
      `${process.env.BACK_API}/products/${category}?locale=${locale}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("--", response.data);
    return response.data;
  } catch (error) {
    console.log("error: ");
    return null;
  }
}


export async function getProductsByLine(line, locale) {
  try {
    locale = locale.split("-")[0] || "es";
    const response = await axios.get(
      `${process.env.BACK_API}/products/lines/${line}?locale=${locale}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response.data : ", response.data);
    return response.data;
  } catch (error) {
    console.log("error: ",error);
    return null;
  }
}



export async function getProductsBySubCategory(SubcategoryId, locale) {
  try {
    locale = locale.split("-")[0] || "es";
    const response = await axios.get(
      `${process.env.BACK_API}/products/subcategories/${SubcategoryId}?locale=${locale}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response.data : ", response.data);
    return response.data;
  } catch (error) {
    console.log("error: ",error);
    return null;
  }
}


export async function getProducts(locale) {
  try {
    locale = locale.split("-")[0] || "es";
    const response = await axios.get(
      `${process.env.BACK_API}/products?locale=${locale}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error: ");
    return null;
  }
}



export async function getProductsSearch(id,locale) {
  try {
    locale = locale.split("-")[0] || "es";
    const response = await axios.get(
      `${process.env.BACK_API}/products/search/${id}/?locale=${locale}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("error: ");
    return null;
  }
}


//*********************************Event************************************/

export async function getEventByProductAndLine(
  line,
  product,
  page = 1,
  locale
) {
  try {
    const params = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        locale: locale,
      },
    };
    const res = await callFetch(
      `${process.env.BACK_API}/products/events/${line}/${product}?page=${page}`,
      params
    );
    return res ? res : null;
  } catch (error) {
    return null;
  }
}
export async function getEventByProductAndLineDetail(
  line,
  product,
  event,
  locale
) {
  try {
    const params = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        locale: locale,
      },
    };
    const res = await callFetch(
      `${process.env.BACK_API}/products/events/${line}/${product}/${event}`,
      params
    );
    return res ? res : null;
  } catch (error) {
    return null;
  }
}

//*********************************Videos************************************/

export async function getVideosByProductAndLine(line, product, locale) {
  try {
    const params = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        locale: locale,
      },
    };
    const res = await callFetch(
      `${process.env.BACK_API}/products/videos/${line}/${product}?`,
      params
    );
    return res ? res : null;
  } catch (error) {
    return null;
  }
}
