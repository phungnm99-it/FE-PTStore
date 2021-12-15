import axiosClient from "../config/axios";

const brandApi = {
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

  getBrandById: (id) => {
    const url = "/brand/" + id;
    return axiosClient.get(url);
  }
};

export default brandApi;
