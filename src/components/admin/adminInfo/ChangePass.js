import React, {useContext, useState} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import userApi from '../../../api/userApi';
import Auth from '../../../config/auth';
import "../../../css/admin/adminInfo/ChangePass.css"
import {AdminContext} from "../../../AdminContext"
function ChangePass () {
    const [checkPassword, setCheckPass] = useState(true);
    const history = useHistory();
    const context = useContext(AdminContext);

    const validate = () => {
      let password = document.getElementById("NewPassword")?.value || '';
      let rePass = document.getElementById("NewPasswordAgain")?.value || '';
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
                      history.push("/admin/login");
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
            <div className="changePassAdmin">
                <div className="title-addAccount">
                    <h2>Đổi mật khẩu</h2>
                </div>
                <div className="form">             
                    <div className="input-addAccount">
                        <form>
                        <div className="mb-3">
                            <label className="form-label" for="inputCurrentPass">
                            Nhập mật khẩu cũ
                            </label>
                            <input
                            type="password"
                            className="form-control"
                            id="OldPassword"
                            placeholder="Nhập mật khẩu cũ" 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="inputNewPass">
                            Nhập mật khẩu mới
                            </label>
                            <input
                            type="password"
                            className="form-control"
                            id="NewPassword"
                            placeholder="Nhập mật khẩu mới"
                            onChange={(e) => validate()}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="inputConfirmPass">
                            Nhập lại mật khẩu mới
                            </label>
                            <input
                            type="password"
                            className="form-control"
                            id="NewPasswordAgain"
                            placeholder="Nhập lại mật khẩu mới"
                            onChange={(e) => validate()}
                            />
                        </div>
                        {checkPassword ? null : <p className="messageError">Nhập lại password không trùng khớp.</p>}

                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary btn-color" onClick={(e) => handleSubmit(e)}>
                            Đổi mật khẩu
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePass;