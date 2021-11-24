import React from "react";
import "../../../css/admin/account/DetailAccount.css";
import iconClose from "../../../images/iconClose.png";
import noAvt from "../../../images/no-avt.png";
import { Link } from "react-router-dom";

function DetailAccount() {
  return (
    <div>
      <div className="detailAccount">
        <div className="jquery-modal blocker current">
          <div className="container modal">
            <div className="loginForm">
              <img className="icon-close" src={iconClose} />
            </div>
            <div className="form">
              <div className="title-addAccount">
                <h2>Thông tin chi tiết</h2>
              </div>
              <div className="body-detailAccount">
                <div className="row">
                  <div className="col-sm-9">
                    <div className="media-body">
                      <div className="col-sm-5">
                        <div className="list-left">
                          <ul className="nav">
                            <li>Mã tài khoản:</li>
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
              <div className="btn-detailAccount">
                <Link
                  to="/admin/home/editAccount"
                  type="submit"
                  className="btnEdit-detailAccount"
                >
                  Chỉnh sửa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailAccount;