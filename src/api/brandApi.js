import axiosClient from "../config/axios";

const brandApi = {
  getAll: (id = null) => {
    let idString = id ? `/${id}` : "";
    const url = "/brand" + idString;
    return axiosClient.get(url);
  },

  getActive: () => {
    const url = "/brand/active";
    return axiosClient.get(url);
  },

  getAll: () => {
    const url = "/brand";
    return axiosClient.get(url);
  },

  create: (formData) => {
    const url = "/brand/create";
    return axiosClient.post(url, formData);
  },

  search: (name) => {
    const url = "/brand/search?name=" + name;
    return axiosClient.post(url);
  },
};

export default brandApi;
