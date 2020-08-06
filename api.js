import axios from "axios";

const callApi = (method, path, data, jwt) => {
  const headers = {
    Authrization: jwt,
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

export default callApi;
