import React from "react";
import "../../css/common/ForgotPassword.css";
import userApi from "../../api/userApi";

function ForgotPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = document.getElementById("Email").value;
    let formData = new FormData();
    formData.append("email", email);
    userApi.forgetPassword(formData).then((res) => {
      if (res.code === "200") {
        alert("Vui lòng kiểm tra email và làm theo hướng dẫn để đổi mật khẩu!");
      } else {
        alert("Email sai!");
      }
    });
  };
  return (
    <div>
      <div className="pageForgotPass">
        <div className="midForgotPass">
          <div className="forgotPassForm">
            <div className="form">
              <div className="title-forgotPass">
                <p>CẤP LẠI MẬT KHẨU</p>
              </div>
              <div className="comment-forgotPass">
                <p>
                  Để cập nhật lại mật khẩu mới bạn vui lòng nhập Email đã dùng
                  để đăng ký tài khoản vào khung bên dưới.
                </p>
              </div>

              <div className="row">
                <label>Email</label>
                <input
                  className="form-control"
                  type="Email"
                  id="Email"
                  name="Email"
                  placeholder="Nhập địa chỉ email"
                />
              </div>
              <div className="row">
                <button type="submit" onClick={(e) => handleSubmit(e)}>
                  Cấp lại mật khẩu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
