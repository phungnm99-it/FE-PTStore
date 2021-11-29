import React from 'react';
import "../../../css/admin/order/DetailOrder.css"
import ProductItem from './ProductItem';
function DetailOrder () {
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
                                    <li>Tổng tiền:</li>
                                    <li>Hình thức thanh toán:</li>
                                    <li>Tình trạng đơn:</li>
                                    
                                    </ul>
                                </div>
                                </div>
                                <div className="col-sm-7">
                                <div className="list-right">
                                    <ul className="nav">
                                    <li>HIDSF890e30</li>
                                    <li>Iphone 13 ProMax 512GB</li>
                                    <li>Iphone</li>
                                    <li>Xanh dương</li>
                                    <li>39.000.000đ</li>                              
                                    </ul>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="productItem">
                                <ProductItem/>
                                <ProductItem/>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default DetailOrder;