import React, { useContext } from "react";
import "../../css/admin/loginAdmin.css";
import loginAdmin from "../../images/loginAdmin.jpg";
import { Link, useHistory } from "react-router-dom";
import { AdminContext } from "../../AdminContext";

function AdminLogin() {
  const context = useContext(AdminContext);
  const history = useHistory();
  const handleLogin = () => {
    context.login(() => {
      history.push("/admin");
    });
  };
  return (
    <div className="loginAdmin">
      <div className="jquery-modal blocker current">
        <div className="container modal modal-signin-admin">
          <div className="wrap-loginAdmin">
            <div className="loginAdmin-pic js-tilt" data-tilt="">
              <img src={loginAdmin} alt="imgLoginAdmin" />
            </div>

            <form className="loginAdmin-form validate-form">
              <span className="loginAdmin-form-title">
                <b>ĐĂNG NHẬP HỆ THỐNG PT-STORE</b>
              </span>

              <div className="wrap-input100 validate-input">
                <input
                  className="inputLoginAdmin"
                  type="text"
                  placeholder="Tài khoản quản trị"
                  name="userNameAdmin"
                  id="userNameAdmin"
                />

                <span className="symbol-input100">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <div className="wrap-input100 validate-input">
                <input
                  autoComplete="off"
                  className="inputLoginAdmin"
                  type="password"
                  placeholder="Mật khẩu"
                  name="passwordAdmin"
                  id="passwordAdmin"
                />
                <span
                  toggle="#password-field"
                  className="bx fa-fw bx-hide field-icon click-eye"
                ></span>

                <span className="symbol-input100">
                  <i className="fas fa-lock"></i>
                </span>
              </div>

              <div className="container-login100-form-btn">
                <button
                  onClick={handleLogin}
                  type="button"
                  className="btn-LoginAdmin"
                  value="Đăng nhập"
                  id="submitLoginAdmins"
                >
                  Đăng nhập
                </button>
              </div>

              <div className="text-right p-t-12">
                <Link to="" className="textForgotPassAdmin">
                  Bạn quên mật khẩu?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
