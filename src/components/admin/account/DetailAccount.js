import React from "react";
import "../../../css/admin/account/DetailAccount.css";
import { timeFormat } from "../../../utils/dateUtils";

function DetailAccount(props) {
  console.log(props.account);
  return (
    <div>
      <div className="detailAccount">
        <div className="title-addAccount">
          <h2>Thông tin chi tiết tài khoản</h2>
        </div>
        <div className="form">
          <div className="body-detailAccount">
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
                        <li>{props.account.id}</li>
                        <li>{timeFormat(props.account.createdDate)}</li>
                        <li>{props.account.username}</li>
                        <li>{props.account.fullName}</li>
                        <li>{props.account.email}</li>
                        <li>{props.account.phoneNumber}</li>
                        <li>{timeFormat(props.account.birthday)}</li>
                        <li>{props.account.gender}</li>
                        <li>{props.account.address}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <img
                  className="align-self-center img-fluid"
                  src={
                    props.account.imageUrl === ""
                      ? "http://res.cloudinary.com/dobsh4rbw/image/upload/v1639403956/commom/no-avt121321085832.png"
                      : props.account.imageUrl
                  }
                ></img>
              </div>
            </div>
          </div>
          <div className="btn-detailAccount">
            {props.account.isDisable === true ? (
              <button
                type="submit"
                onClick={() => props.switch(4)}
                className="btn btn-primary btn-color btn-comeback"
              >
                Quay trở lại danh sách
              </button>
            ) : props.account.roleName === "User" ? (
              <button
                type="submit"
                onClick={() => props.switch(2)}
                className="btn btn-primary btn-color btn-comeback"
              >
                Quay trở lại danh sách
              </button>
            ) : props.account.roleName === "Admin" ? (
              <button
                type="submit"
                onClick={() => props.switch(1)}
                className="btn btn-primary btn-color btn-comeback"
              >
                Quay trở lại danh sách
              </button>
            ) : (
              <button
                type="submit"
                onClick={() => props.switch(3)}
                className="btn btn-primary btn-color btn-comeback"
              >
                Quay trở lại danh sách
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailAccount;
