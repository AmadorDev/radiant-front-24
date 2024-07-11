

export async function callFetch(url, params,token='') {
  const paramsTemp = {
    ...params,
    headers: {
      ...params?.headers,
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, paramsTemp);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
}
