import React from 'react';
import "../../css/shipper/ShipperLogin.css"
import shipperImg from "../../images/shipper.png"
function ShipperLogin () {
    return (
        <div className="shipperLogin">
            <div className="container">
                <div className="loginForm">
                    <div className="wrap-loginAdmin">
                        <div className="loginAdmin-pic js-tilt" data-tilt="">
                            <img src={shipperImg} alt="imgShipperLogin" />
                        </div>

                        <form className="loginAdmin-form validate-form">
                            <span className="loginAdmin-form-title">
                                <b>ĐĂNG NHẬP HỆ THỐNG SHIPPER PT-STORE</b>
                            </span>

                            <div className="wrap-input100 validate-input">
                                <input
                                className="inputLoginAdmin"
                                type="text"
                                
                                placeholder="Tài khoản shipper"
                                name="userNameShipper"
                                id="userNameShipper"
                                />

                                <span className="symbol-input100">
                                <i className="fas fa-user"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input">
                                <input
                                autoComplete="off"
                                className="inputLoginAdmin"
                                type="password"
                                
                                placeholder="Mật khẩu"
                                name="passwordShipper"
                                id="passwordShipper"
                                />
                                <span
                                toggle="#password-field"
                                className="bx fa-fw bx-hide field-icon click-eye"
                                ></span>

                                <span className="symbol-input100">
                                <i className="fas fa-lock"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button
                                
                                type="button"
                                className="btn-LoginAdmin"
                                value="Đăng nhập"
                                id="submitLoginShipper"
                                >
                                Đăng nhập
                                </button>
                            </div>

                            {/* <div className="text-right p-t-12">
                                <Link to="" className="textForgotPassAdmin">
                                Bạn quên mật khẩu?
                                </Link>
                            </div> */}
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default ShipperLogin;