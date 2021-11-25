import axiosClient from "../config/axios";

const brandApi = {
  getAll: (id = null) => {
    let idString = id ? `/${id}` : "";
    const url = "/brand" + idString;
    return axiosClient.get(url);
  },

  getActive: () => {
    const url = "/brand/active";
    return axiosClient.get(url);
  },
};

export default brandApi;
