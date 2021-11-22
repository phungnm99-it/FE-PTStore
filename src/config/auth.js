const Auth = {
  isAuthenticated: false,
  signin(cb) {
    Auth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    Auth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
  getAccessToken: function () {
    return sessionStorage.getItem("access_token");
  },
};

export default Auth;
