import axios from "axios";

const callApi = (method, path, data, token) => {
  const headers = {
    Authorization: `X-JWT ${token}`,
    "Content-Type": "application/json",
  };
  const baseUrl = "http://localhost:8000/api/v1/";
  const fullUrl = `${baseUrl}${path}`;
  if (method === "get" || method === "delete") {
    return axios[method](fullUrl, { headers });
  } else {
    return axios[method](fullUrl, data, { headers });
  }
};

export const createAccount = form => {
  callApi("post", "users/", form);
};

export const getFavsRequest = (id, token) =>
  callApi("get", `users/${id}/favs/`, null, token);

export const toggleFavRequest = async (userId, roomId, token) =>
  callApi("put", `users/${userId}/favs/`, { pk: roomId }, token);

export default callApi;
