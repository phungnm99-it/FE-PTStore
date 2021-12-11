import React, {useEffect, useState} from 'react';
import "../../../css/admin/adminInfo/AdminInfo.css"
import noAvt from "../../../images/no-avt.png"
import userApi from "../../../api/userApi"
import { timeFormat } from '../../../utils/dateUtils';
function AdminInfo (props) {
    const [info, setInfo] = useState({});
    useEffect (() => {
        userApi.getInfo().then((response) => {
            console.log(response.data);
            // debugger
            setInfo(response.data);
        });
    },[]);
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
                                            <li>{info.id}</li>
                                            <li>29/11/2021</li>
                                            <li>{info.username}</li>
                                            <li>{info.fullName}</li>
                                            <li>{info.email}</li>
                                            <li>{info.phoneNumber}</li>
                                            <li>{timeFormat(info.birthday)}</li>
                                            <li>{info.gender}</li>
                                            <li>{info.address}</li>   
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
                        onClick={() => props.switch(35)}
                        className="btnEdit-accountInfo"
                        >
                        Chỉnh sửa
                        </button>
                        <button
                        onClick={() => props.switch(36)}
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

export default AdminInfo;