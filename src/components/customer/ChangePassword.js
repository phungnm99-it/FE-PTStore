import React from "react";
import iconClose from "../../images/iconClose.png";
function ChangePasswordForm(props) {
  //const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <div className="forgotPassword">
        <div className="jquery-modal blocker current">
          <div className="container modal">
            <div className="forgotPassword-form">
              <img
                alt="icon-close"
                className="icon-close"
                src={iconClose}
                onClick={() => props.onCLose()}
              />
              <div className="form">
                <div className="forgot">
                  <div>
                    <h4>ĐỔI MẬT KHẨU</h4>
                  </div>
                  <form
                    method="post"
                    action="/Account/ForgotPassword"
                    class="js-validation-reminder form-horizontal push-30-t push-50"
                  >
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
                      />
                    </div>
                    <div className="row">
                      <button type="submit">
                        <i class="si si-envelope-open pull-right"></i>Đổi mật
                        khẩu
                      </button>
                    </div>
                  </form>
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
