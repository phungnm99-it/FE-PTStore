import axiosClient from "../config/axios";

const userApi = {
  login: (formData) => {
    const url = "/user/login";
    return axiosClient.post(url, formData);
  },

  loginWithGoogle: (tokenId) => {
    const url = "/user/loginWithGoogle";
    return axiosClient.post(url, tokenId)
  }
};

export default userApi;
