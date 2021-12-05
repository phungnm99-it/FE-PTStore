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

  getSimilarProduct: (id) => {
    const url = "/product/similar/" + id;
    return axiosClient.get(url);
  },

  getProductByFilter: (data) => {
    const url = "/product";
    return axiosClient.post(url, data);
  },

  getSaleProduct: () => {
    const url = "/product/sale";
    return axiosClient.get(url);
  },

  getReviewByProductId: (id) => {
    const url = "/product/review/" + id;
    return axiosClient.get(url);
  },

  checkCanReview: (id) => {
    const url = "/product/checkCanReview/" + id;
    return axiosClient.get(url);
  },

  findByBrandName: (brandName) => {
    const url = "/product/brand/" + brandName;
    return axiosClient.get(url);
  },

  getByFilter: (filter) => {
    const url ="/product/filter?" + filter;
    return axiosClient.post(url);
  }
};

export default productApi;
