import React from "react";
import "../../css/common/ForgotPassword.css";
import { Link} from "react-router-dom";

function ForgotPassword() {
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
                <p>Để cập nhật lại mật khẩu mới bạn vui lòng nhập Email đã dùng để đăng ký tài khoản vào khung bên dưới.</p>
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
                  <Link to ="/resetPass" className="btn-forgotPass">Cấp lại mật khẩu</Link> 
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
