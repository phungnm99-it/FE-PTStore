import axiosClient from "../config/axios";

const productApi = {
  getAll: (id = null) => {
    let idString = id ? `/${id}` : "";
    const url = "/product" + idString;
    return axiosClient.get(url);
  },

  getFeature: () => {
    const url = "/product/featureProduct";
    return axiosClient.get(url);
  },
};

export default productApi;
