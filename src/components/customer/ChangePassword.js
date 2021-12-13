import React, { useState, useContext } from "react";
import "../../css/customer/changePassword.css";
import userApi from "../../api/userApi";
import { AuthContext } from "../../AuthContext";
import { useHistory } from "react-router-dom";
import Auth from "../../config/auth";

function ChangePasswordForm(props) {
  //const [isLogin, setIsLogin] = useState(true);
  const [checkPassword, setCheckPass] = useState(true);
  const history = useHistory();
  const context = useContext(AuthContext);

  const validate = () => {
    let password = document.getElementById("NewPassword")?.value || "";
    let rePass = document.getElementById("NewPasswordAgain")?.value || "";
    setCheckPass(password === rePass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let oldPassword = document.getElementById("OldPassword").value;
    if (oldPassword === "") alert("Vui lòng nhập mật khẩu cũ !");
    else {
      let newPassword = document.getElementById("NewPassword").value;
      if (newPassword === "") {
        alert("Vui lòng nhập mật khẩu mới!");
      } else {
        let newPasswordAgain =
          document.getElementById("NewPasswordAgain").value;
        if (newPasswordAgain === "") {
          alert("Vui lòng nhập nhập lại mật khẩu!");
        } else {
          if (newPassword !== newPasswordAgain) {
            alert("Mật khẩu mới và nhập lại mật khẩu phải giống nhau!");
          } else {
            let regex =
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
            if (regex.test(newPassword) === false) {
              alert(
                "Mật khẩu mới không hợp lệ! Mật khẩu phải có 8 kí tự trở lên, có ít nhất 1 kí tự thường, 1 kí tự in hoa, 1 ký tự đặc biệt và 1 kí tự số!"
              );
            } else {
              let formData = new FormData();
              formData.append("OldPassword", oldPassword);
              formData.append("NewPassword", newPassword);
              userApi.changePassword(formData).then((res) => {
                if (res.code === "401") {
                  alert("Mật khẩu cũ không chính xác!");
                } else {
                  alert("Đổi mật khẩu thành công! Vui lòng đăng nhập lại!");
                  context.logout();
                  Auth.logout();
                  history.push("/login");
                }
              });
            }
          }
        }
      }
    }
  };

  return (
    <div>
      <div className="changePassword">
        <div className="jquery-modal blocker current">
          <div className="container modal modal-changePassword">
            <div className="changePassword-form">
              <img
                alt="icon-close"
                className="icon-close"
                src="http://res.cloudinary.com/dobsh4rbw/image/upload/v1639402353/commom/iconClose121321083143.png"
                onClick={() => props.onCLose()}
              />
              <div className="changePassword">
                <div>
                  <p>ĐỔI MẬT KHẨU</p>
                </div>
                <div className="js-validation-reminder form-horizontal push-30-t push-50">
                  <div className="row">
                    <label>Nhập mật khẩu cũ</label>
                    <input
                      className="form-control"
                      type="Password"
                      id="OldPassword"
                      name="OldPassword"
                      placeholder="Nhập mật khẩu cũ"
                    />
                  </div>
                  <div className="row">
                    <label>Mật khẩu mới</label>
                    <input
                      className="form-control"
                      type="Password"
                      id="NewPassword"
                      name="NewPassword"
                      placeholder="Nhập mật khẩu mới"
                      onChange={(e) => validate()}
                    />
                  </div>
                  <div className="row">
                    <label>Nhập lại mật khẩu mới</label>
                    <input
                      className="form-control"
                      type="Password"
                      id="NewPasswordAgain"
                      name="NewPasswordAgain"
                      placeholder="Nhập lại mật khẩu mới"
                      onChange={(e) => validate()}
                    />

                    {checkPassword ? null : (
                      <p className="messageError">
                        Nhập lại password không trùng khớp.
                      </p>
                    )}
                  </div>
                  <div className="row">
                    <button onClick={(e) => handleSubmit(e)}>
                      <i class="si si-envelope-open pull-right"></i>Đổi mật khẩu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordForm;
