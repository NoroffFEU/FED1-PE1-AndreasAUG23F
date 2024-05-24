export const doFetch = async (method, urlApiLink, body) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let accessToken = "";
  if (userInfo) {
    accessToken = userInfo.accessToken;
  }

  console.log("doing fetch call towards:", urlApiLink);
  try {
    const response = await fetch(urlApiLink, {
      method: method,
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ` + accessToken,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("Error:", error);
  }
};
