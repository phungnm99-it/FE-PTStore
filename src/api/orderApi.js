import axiosClient from "../config/axios";

const orderApi = {
  getAll: () => {
    const url = "/order/getAll";
    return axiosClient.get(url);
  },

  cancelByUser: (id) => {
    const url = "/order/userCancel/" + id;
    return axiosClient.get(url);
  },

  cancelByShipper: (id) => {
    const url = "/order/shipperCancel/" + id;
    return axiosClient.get(url);
  },

  getOrderDeliveringByShipper: () => {
    const url = "/order/delivering";
    return axiosClient.get(url);
  },

  getOrderDeliveredByShipper: () => {
    const url = "/order/delivered";
    return axiosClient.get(url);
  },

  deliverOrderByShipper: (id) => {
    const url = "/order/deliver/" + id;
    return axiosClient.get(url);
  },

  getOrderCanDeliverByShipper: () => {
    const url = "/order/canDeliver";
    return axiosClient.get(url);
  },

  completeOrderByShipper: (id) => {
    const url = "/order/complete/" + id;
    return axiosClient.get(url);
  },
};

export default orderApi;
