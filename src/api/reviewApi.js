import axiosClient from "../config/axios";

const reviewApi = {
  getAll: () => {
    const url = "/product/review/getAll";
    return axiosClient.get(url);
  },

  create: (formData) => {
    const url = "/product/review/create";
    return axiosClient.post(url, formData);
  },
};

export default reviewApi;
