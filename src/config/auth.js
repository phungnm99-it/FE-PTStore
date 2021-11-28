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
};

export default Auth;
