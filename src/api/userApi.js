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

  updateInfo: (formData) => {
    const url = "/user/update";
    return axiosClient.post(url, formData);
  },

  getCommonShipperInfo: () => {
    const url = "/user/getCommonShipperInfo";
    return axiosClient.get(url);
  },

  getCommonRate: () => {
    const url = "/common/currencyRate";
    return axiosClient.get(url);
  },

  addAdminAccount: (data) => {
    const url = "/user/createAdminAccount";
    return axiosClient.post(url, data);
  },

  addShipperAccount: (data) => {
    const url = "/user/createShipperAccount";
    return axiosClient.post(url, data);
  },

  lockUser: (userId) => {
    const url = "/user/lockUser/" + userId;
    return axiosClient.get(url);
  },

  lockAdmin: (userId) => {
    const url = "/user/lockAdmin/" + userId;
    return axiosClient.get(url);
  },

  lockShipper: (userId) => {
    const url = "/user/lockShipper/" + userId;
    return axiosClient.get(url);
  },

  unlockUser: (userId) => {
    const url = "/user/unlockUser/" + userId;
    return axiosClient.get(url);
  },

  unlockAdmin: (userId) => {
    const url = "/user/unlockAdmin/" + userId;
    return axiosClient.get(url);
  },

  unlockShipper: (userId) => {
    const url = "/user/unlockShipper/" + userId;
    return axiosClient.get(url);
  },
};

export default userApi;
