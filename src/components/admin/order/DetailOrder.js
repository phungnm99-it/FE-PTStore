import React from 'react';
import "../../../css/admin/order/DetailOrder.css"
import ProductItem from './ProductItem';
function DetailOrder (props) {
    return (
        <div>
            <div className="detailOrder">
                <div className="title-addAccount">
                <h2>Thông tin chi tiết đơn hàng</h2>
                </div>
                <div className="form">
                    <div className="body-detailProduct">
                       
                        <div className="row">
                            <div className="media-body">
                                <div className="col-sm-5">
                                <div className="list-left">
                                    <ul className="nav">
                                    <li>Mã đơn hàng:</li>
                                    <li>Ngày đặt hàng:</li>
                                    <li>Tên người đặt:</li>
                                    <li>Số điện thoại:</li>
                                    <li>Địa chỉ nhận hàng:</li>
                                    <li>Hình thức thanh toán:</li>
                                    <li>Tình trạng đơn:</li>
                                    <li>Tổng đơn:</li>
                                    </ul>
                                </div>
                                </div>
                                <div className="col-sm-7">
                                <div className="list-right">
                                    <ul className="nav">
                                    <li>HIDSF890e30</li>
                                    <li>29/12/2021</li>
                                    <li>Nguyễn Văn A</li>
                                    <li>0858679912</li>
                                    <li>Số 1, Võ Văn Ngân, TP Thủ Đức, TPHCM</li>         
                                    <li>Thanh toán khi nhận hàng</li> 
                                    <li>Giao hàng thành công</li>   
                                    <li>43.990.000</li>                 
                                    </ul>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="box-order">
                        <table className="table table-striped table-bordered dataTable">
                            <thead>
                                <tr role="row">
                                <th className="sorting" id="Detail-ProductCol">
                                    Tên sản phẩm
                                </th>
                                <th className="sorting" id="Detail-StockCol">
                                    Số lượng
                                </th>
                                <th className="sorting" id="Detail-PriceCol">
                                    Giá
                                </th>
                                <th className="sorting" id="Detail-TotalCol">
                                    Tổng tiền
                                </th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr role="row" className="ood">
                                    <td>Iphone 13 ProMax 512GB Xanh dương</td>
                                    <td>1</td>
                                    <td>43.990.000</td>
                                    <td>43.990.000</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        {/* <div className="row">
                            <div className="productItem">
                                <ProductItem/>
                                <ProductItem/>
                            </div>
                        </div> */}
                        

                        <div className="mb-3">
                            <button
                            onClick={() => props.switch(21)}
                            className="btn btn-primary btn-color btn-comeback"
                            >
                            Quay trở lại danh sách
                            </button>
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default DetailOrder;