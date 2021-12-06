import React, {useState} from "react";
import "../../css/common/ResetPassword.css";
import { useParams, useHistory } from "react-router-dom";
import userApi from "../../api/userApi";
function ResetPassword(props) {
  const [checkPassword, setCheckPass] = useState(true);
  let { id } = useParams();
  const history = useHistory();
  const handleSubmit = (e) => {
    let newPassword = document.getElementById("NewPassword").value;
    let formData = new FormData();
    formData.append("HashId", id);
    formData.append("NewPassword", newPassword);
    userApi.resetPassword(formData).then((res) => {
      if (res.code === "200") {
        alert("Thay đổi mật khẩu thành công. Vui lòng đăng nhập!");
        history.push("/login");
      } else {
        alert("Error");
      }
    });
  };
  //check new pass and confirm pass
  const validate = () => {
    let password = document.getElementById("NewPassword")?.value || '';
    let rePass = document.getElementById("ConfirmPassword")?.value || '';
    setCheckPass(password === rePass);
  };
  return (
    <div>
      <div className="pageResetPass">
        <div className="midResetPass">
          <div className="resetPassForm">
            <div className="form">
              <div className="title-resetPass">
                <p>Tạo lại mật khẩu của bạn</p>
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
                <label>Xác nhận mật khẩu</label>
                <input
                  className="form-control"
                  type="Password"
                  id="ConfirmPassword"
                  name="ConfirmPassword"
                  placeholder="Nhập lại mật khẩu mới"
                  onChange={(e) => validate()}
                />
                {checkPassword ? null : <p className="messageError">Nhập lại password không trùng khớp.</p>}
              </div>

              <div className="row">
                <button type="submit" onClick={(e) => handleSubmit(e)}>
                  <p className="btn-resetPass">Tạo lại mật khẩu</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
