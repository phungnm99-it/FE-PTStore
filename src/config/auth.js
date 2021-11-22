const Auth = {
  isAuthenticated: false,
  signin(cb) {
    Auth.isAuthenticated = true;
    cb();
  },
  signout(cb) {
    Auth.isAuthenticated = false;
    cb();
  },
  getAccessToken: function () {
    return sessionStorage.getItem("access_token");
  },
};

export default Auth;
