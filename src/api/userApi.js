import axiosClient from "../config/axios";

const userApi = {
  login: (formData) => {
    const url = "/user/login";
    return axiosClient.post(url, formData);
  },

  loginWithGoogle: (formData) => {
    const url = "/user/loginWithGoogle";
    return axiosClient.post(url, formData);
  },

  getInfo: () => {
    const url = "/user/getUser";
    return axiosClient.get(url);
  },

  updateAvatar: (formData) => {
    const url = "/user/uploadImage";
    return axiosClient.post(url, formData);
  },

  changePassword: (formData) => {
    const url = "/user/changePassword";
    return axiosClient.post(url, formData);
  },

  register: (formData) => {
    const url = "/user/register";
    return axiosClient.post(url, formData);
  },

  forgetPassword: (formData) => {
    const url = "/user/forgetPassword";
    return axiosClient.post(url, formData);
  },

  resetPassword: (formData) => {
    const url = "/user/resetPassword";
    return axiosClient.post(url, formData);
  },

  getAllOwnsOrder: () => {
    const url = "/order/getAllOwnOrders";
    return axiosClient.get(url);
  },

  getReview: () => {
    const url = "/user/getReview";
    return axiosClient.get(url);
  },

  order: (data) => {
    const url = "/order/create";
    return axiosClient.post(url, data);
  },

  getAllUsers: () => {
    const url = "/user/getAll";
    return axiosClient.get(url);
  },
};

export default userApi;
