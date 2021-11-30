import React from 'react';
import '../../../css/admin/review/DetailReview.css'
import noAvt from "../../../images/no-avt.png";
function DetailReview () {
    return (
        <div className="detailReview">
            <div className="title-addAccount">
                <h2>Thông tin chi tiết đánh giá</h2>
            </div>
            <div className="form">
                <div className="body-detailReview">
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="media-body">
                        <div className="col-sm-5">
                            <div className="list-left">
                            <ul className="nav">
                                <li>Mã đánh giá:</li>
                                <li>Tên sản phẩm:</li>
                                <li>Mã tài khoản:</li>
                                <li>Họ và tên:</li>
                                <li>Email:</li>
                                <li>Số điện thoại:</li>
                                
                                <li>Thời gian đánh giá:</li>
                                <li>Nội dung đánh giá:</li>
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
                    {/* <div className="col-sm-3">
                        <img
                        className="align-self-center img-fluid"
                        src={noAvt}
                        ></img>
                    </div> */}
                    </div>
                </div>
                {/* <div className="btn-detailAccount">
                    <button
                    
                    className="btnEdit-detailAccount"
                    >
                    Chỉnh sửa
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default DetailReview;