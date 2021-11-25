import React from 'react';
import '../../css/common/ResetPassword.css'
function ResetPassword () {
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
                                />
                            </div>

                            <div className="row">
                                <button type="submit">
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