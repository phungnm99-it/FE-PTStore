import axiosClient from "../config/axios";

const orderApi = {
  getAll: (id = null) => {
    let idString = id ? `/${id}` : "";
    const url = "/order/getAll" + idString;
    return axiosClient.get(url);
  },

  
};

export default orderApi;
