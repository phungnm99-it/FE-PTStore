import provinceApi from "./api-config";
export const getProvinces = () => {
  return provinceApi.get(provinceApi.provincesProvider);
};
