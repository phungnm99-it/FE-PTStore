import axiosClient from "../../config/axios";

const loginApi = {
  login: (formData) => {
    const url = "/user/loginAdmin";
    return axiosClient.post(url, formData);
  },
};

export default loginApi;
