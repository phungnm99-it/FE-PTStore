import React from "react";
import "../../css/common/ForgotPassword.css";

function ForgotPassword() {
  return (
    <div>
      <div className="pageForgotPass">
        <div className="midForgotPass">
          <div className="forgotPassForm">
            <div className="form">
              <div className="title-forgotPass">
                <h4>CẤP LẠI MẬT KHẨU</h4>
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
                <button type="submit">
                  <i className="si si-envelope-open pull-right"></i> Cấp lại mật
                  khẩu
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
