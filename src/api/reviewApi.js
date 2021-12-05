import axiosClient from "../config/axios";

const reviewApi = {
  getAll: () => {
    const url = "/product/review/getAll";
    return axiosClient.get(url);
  },
};

export default reviewApi;
