import axiosClient from "../config/axios";

const shipperApi = {
  login: (formData) => {
    const url = "/user/loginShipper";
    return axiosClient.post(url, formData);
  },
};

export default shipperApi;
