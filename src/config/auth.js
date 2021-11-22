const Auth = {
  isAuthenticated: false,
  login(cb) {
    Auth.isAuthenticated = true;
    cb();
  },
  logout(cb) {
    Auth.isAuthenticated = false;
    cb();
  },
  getAccessToken: function () {
    return sessionStorage.getItem("access_token");
  },
};

export default Auth;
