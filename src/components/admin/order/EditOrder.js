import React from 'react';
import "../../../css/admin/order/EditOrder.css"
import ProductItem from './ProductItem';
function EditOrder () {
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
                        <ProductItem/>
                        <div className="mb-3">
                            <button type="submit" class="btn btn-primary btn-color">
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