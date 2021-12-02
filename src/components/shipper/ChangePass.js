import React from 'react';
import "../../css/shipper/ChangePass.css"
function ChangePass () {
    return (
        <div>
            <div className="changePassShipper">
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
                            />
                        </div>
                        

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