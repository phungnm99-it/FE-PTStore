import React from 'react';
import "../../../css/admin/order/EditOrder.css"
import ProductItem from './ProductItem';
function EditOrder () {
    const handleSubmit = (e) => {
        e.preventDefault();
        let id = document.getElementById("inputIDOrder").value;
        let dateOrder = document.getElementById("inputDateOrder").value;
        let status = document.getElementById("selectStatus").value;
        let userName = document.getElementById("inputUserName").value;
        let phoneNumber = document.getElementById("inputPhone").value;
        let email = document.getElementById("inputEmail").value;
        let address = document.getElementById("inputAddress").value;
        let totalPrice = document.getElementById("inputTotalPrice").value;
        let paymentMethod = document.getElementById("inputPaymentMethod").value;
        if(
            status.length < 1 
        ){alert("Vui lòng nhập đúng và đầy đủ thông tin");}
        else{
            let formData = new FormData();
            formData.append("Id", id);
            formData.append("DateOrder", dateOrder);
            formData.append("Status", status);
            formData.append("UserName", userName);
            formData.append("PhoneNumber", phoneNumber);
            formData.append("Email", email);
            formData.append("Address", address);
            formData.append("TotalPrice", totalPrice);
            formData.append("PaymentMethod", paymentMethod);
        }
        
    };
    return (
        <div>
            <div className="editOrder">
                <div className="title-addAccount">
                <h2>Chỉnh sửa đơn hàng</h2>
                </div>
                <div className="form">
                    <div className="input-addAccount">
                        <form>
                        <div className="mb-3">
                            <label className="form-label" for="inputIDOrder">
                            Mã đơn hàng
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            id="inputIDOrder"
                            placeholder="Mã đơn hàng"
                            readOnly
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="inputDateOrder">
                            Ngày đặt hàng
                            </label>
                            <input
                            type="date"
                            className="form-control"
                            id="inputDateOrder"
                            placeholder="Ngày đặt hàng"
                            readOnly
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="inputStatusOrder">
                            Trạng thái đơn hàng
                            </label>
                            <select
                            id="selectStatus"
                            name="dataTable_length"
                            aria-controls="dataTable"
                            className="form-control"
                          >
                            <option value="1">Chưa xác nhận</option>
                            <option value="2">Đã xác nhận</option>
                            <option value="3">Đang giao hàng</option>
                            <option value="4">Đã hoàn thanh</option>
                          </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="inputUserName">
                                Tên khách hàng
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputUserName"
                                placeholder="Tên khách hàng"
                                readOnly
                            />
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label className="form-label" for="inputPhone">
                                    Số điện thoại
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPhone"
                                    placeholder="Số điện thoại"
                                    readOnly
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="form-label" for="inputEmail">
                                Email
                                </label>
                                <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                placeholder="Email"
                                readOnly
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="inputAddress">
                            Địa chỉ
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="Địa chỉ"
                            readOnly
                            />
                        </div>
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label className="form-label" for="inputTotalPrice">
                                Tổng tiền
                                </label>
                                <input
                                type="text"
                                className="form-control"
                                id="inputTotalPrice"
                                placeholder="Tổng tiền"
                                readOnly
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="form-label" for="inputPaymentMethod">
                                Hình thức thanh toán
                                </label>
                                <input
                                type="text"
                                className="form-control"
                                id="inputPaymentMethod"
                                placeholder="Hình thức thanh toán"
                                readOnly
                                />
                            </div>
                        </div>
                        <ProductItem/>
                        <div className="mb-3">
                            <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary btn-color">
                            Cập Nhật
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditOrder;