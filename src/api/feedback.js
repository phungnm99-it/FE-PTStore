import axiosClient from "../config/axios";

const feedbackApi = {
  getAll: () => {
    const url = "/feedback";
    return axiosClient.get(url);
  },
  getFeedbackHasReply: () => {
    const url = "/feedback/getFeedbackHasReply";
    return axiosClient.get(url);
  },
  getFeedbackNoReply: () => {
    const url = "/feedback/getFeedbackNoReply";
    return axiosClient.get(url);
  },

  create: (formData) => {
    const url = "/feedback/create";
    return axiosClient.post(url, formData);
  },
};

export default feedbackApi;
