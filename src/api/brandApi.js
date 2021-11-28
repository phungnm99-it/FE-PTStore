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
};

export default brandApi;
