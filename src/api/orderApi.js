import axiosClient from "../config/axios";

const orderApi = {
  getAll: () => {
    const url = "/order/getAll";
    return axiosClient.get(url);
  },
};

export default orderApi;
