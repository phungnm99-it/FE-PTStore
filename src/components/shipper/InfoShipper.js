import React from 'react';
import "../../css/shipper/ShipperInfo.css"
import noAvt from "../../images/no-avt.png"
function InfoShipper (props) {
    return (
        <div>
            <div className="accountInfo">
                <div className="title-addAccount">
                    <h2>Thông tin chi tiết tài khoản</h2>
                </div>
                <div className="form">
                    <div className="body-accountInfo">
                        <div className="row">
                        <div className="col-sm-9">
                            <div className="media-body">
                            <div className="col-sm-5">
                                <div className="list-left">
                                <ul className="nav">
                                    <li>Mã tài khoản:</li>
                                    <li>Ngày tạo tài khoản:</li>
                                    <li>Tên đăng nhập:</li>
                                    <li>Họ và tên:</li>
                                    <li>Email:</li>
                                    <li>Số điện thoại:</li>
                                    <li>Ngày sinh:</li>
                                    <li>Giới tính</li>
                                    <li>Địa chỉ:</li>
                                    
                                </ul>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="list-right">
                                <ul className="nav">
                                    <li>HIDSF890e30</li>
                                    <li>29/11/2021</li>
                                    <li>tienphan</li>
                                    <li>Phan Nguyễn Thủy Tiên</li>
                                    <li>thuytienpn106@gmail.com</li>
                                    <li>0858679912</li>
                                    <li>06/10/1999</li>
                                    <li>Nữ</li>
                                    <li>264 đường Linh Trung, TP.Thủ Đức, TPHCM</li>
                                    
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <img
                            className="align-self-center img-fluid"
                            src={noAvt}
                            ></img>
                        </div>
                        </div>
                    </div>
                    <div className="btn-accountInfo">
                        <button
                        onClick={() => props.switch(3)}
                        className="btnEdit-accountInfo"
                        >
                        Chỉnh sửa
                        </button>
                        <button
                        onClick={() => props.switch(2)}
                        className="btnChangePass-accountInfo"
                        >
                        Đổi mật khẩu
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoShipper;