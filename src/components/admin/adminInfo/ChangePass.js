import React, {useState} from 'react';
import "../../../css/admin/adminInfo/ChangePass.css"
function ChangePass () {
    const [checkPassword, setCheckPass] = useState(true);

    const validate = () => {
      let password = document.getElementById("NewPassword")?.value || '';
      let rePass = document.getElementById("inputConfirmPass")?.value || '';
      setCheckPass(password === rePass);
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
                            id="inputCurrentPass"
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
                            id="inputNewPass"
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
                            id="inputConfirmPass"
                            placeholder="Nhập lại mật khẩu mới"
                            onChange={(e) => validate()}
                            />
                        </div>
                        {checkPassword ? null : <p className="messageError">Nhập lại password không trùng khớp.</p>}

                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary btn-color">
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