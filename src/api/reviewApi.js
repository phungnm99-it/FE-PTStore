import axiosClient from "../config/axios";

const reviewApi = {
  getAll: (id = null) => {
    let idString = id ? `/${id}` : ""; 
    const url = "/product/review/getAll" + idString;
    return axiosClient.get(url);
  },

  
};

export default reviewApi;
