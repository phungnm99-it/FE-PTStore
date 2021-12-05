import axiosClient from "../config/axios";

const subscriberApi = {
  getAll: () => {
    const url = "/subscriber";
    return axiosClient.get(url);
  },
};

export default subscriberApi;
