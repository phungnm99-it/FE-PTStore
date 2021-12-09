import jwt_decode from "jwt-decode";

const Auth = {
  setAccessToken: function (token) {
    localStorage.setItem("access_token", token);
  },

  setGoogleLogin: function () {
    localStorage.setItem("isSocial", true);
  },

  getAccessToken: function () {
    return localStorage.getItem("access_token");
  },

  isAuthenticated: function () {
    return localStorage.getItem("access_token") ? true : false;
  },

  logout: function () {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    localStorage.removeItem("isSocial");
    localStorage.clear();
  },

  isValidateToken: function () {
    return this.getCurrentUser()["exp"] * 1000 > Date.now();
  },

  isLogin: function () {
    return this.getAccessToken() != null && this.isValidateToken();
  },

  isGoogleLogin: function () {
    return localStorage.getItem("isSocial") ? true : false;
  },

  getCurrentUser: function () {
    const token = this.getAccessToken();
    return jwt_decode(token);
  },
};

export default Auth;
