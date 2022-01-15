import axiosClient from "../config/axios";

const subscriberApi = {
  getAll: () => {
    const url = "/subscriber";
    return axiosClient.get(url);
  },

  add: (formData) => {
    const url = "/subscriber/add";
    return axiosClient.post(url, formData);
  },

  sendNew: (formData) => {
    const url = "/subscriber/sendNews";
    return axiosClient.post(url, formData);
  },
};

export default subscriberApi;
