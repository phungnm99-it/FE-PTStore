import axios from "axios";

const provincesProvider = "https://provinces.open-api.vn/api/?depth=2";
const url = {
  /// tat ca cac duong dan thi nam o day
  baseURL: "http://localhost:7000/user",
};
const instance = axios.create({
  baseURL: url.baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const provinceApi = {
  provincesProvider,
  url: url,
  axios: instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default provinceApi;
