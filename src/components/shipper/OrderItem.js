import React from 'react';
import "../../css/shipper/OderItem.css"
function OrderItem () {
    return (
        <div>
            <div className= "orderItem">
                <div className= "orderItem-form">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="left-OrderItem">
                            <p className="textIDOrder">
                             HRHNDI99474
                            </p>
                            <p className="labelOrder">Ngày đặt:
                                <span className="textOrder">09/12/2021</span>
                            </p>
                            <p className="labelOrder">Tên khách hàng:
                                <span className="textOrder">Phan Nguyễn Thủy Tiên</span>
                            </p>
                            <p className="labelOrder">Giao đến:
                                <span className="textOrder">Số 1, Võ Văn Ngân, TP Thủ Đức, TP Hồ Chí Minh</span>
                            </p>
                            <p className="labelOrder">Tổng đơn:
                                <span className="textOrder">30.000.000đ</span>
                            </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="right-OrderItem">
                                <p className="labelTimeOrder">4 giờ trước
                                </p>
                                <button className="btn-accept">Nhận đơn</button>
                                <button className="btn-complete">Giao thành công</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;