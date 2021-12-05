import axiosClient from "../config/axios";

const subscriberApi = {
  getAll: (id = null) => {
    let idString = id ? `/${id}` : "";
    const url = "/subscriber" + idString;
    return axiosClient.get(url);
  },

  
};

export default subscriberApi;