import React, { useEffect, useState } from 'react';
import orderApi from '../../../api/orderApi';
import userApi from '../../../api/userApi';
import "../../../css/admin/pageMain/pageMainAdmin.css"


function PageMainAdmin () {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        orderApi.getOrderCanDeliverByShipper().then((res) => {
            setOrders(res.data);
          });
        userApi.getCommonShipperInfo().then((res) => {
          document.getElementById("workingDate").innerText = res.data.workingDate;
          document.getElementById("deliveredOrder").innerText =
            res.data.deliveredOrder;
          document.getElementById("deliveringOrder").innerText =
            res.data.deliveringOrder;
          document.getElementById("totalOrder").innerText = res.data.totalOrder;
        });
      }, []);
    return (
        <div className="pageMainAdmin">
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="full counterSection">
                        <div className="counterIcon">
                            <i className="fa fa-user yellow_color"></i>
                        </div>
                        <div className="counterNo">
                            <p className="totalNo">100</p>
                            <p className="headCounter">Tài khoản</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="full counterSection">
                        <div className="counterIcon">
                            <i className="fas fa-box-open green_color"></i>
                        </div>
                        <div className="counterNo">
                            <p className="totalNo">10</p>
                            <p className="headCounter">Đơn hàng</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="full counterSection">
                        <div className="counterIcon">
                            <i className="fas fa-trademark red_color"></i>
                        </div>
                        <div className="counterNo">
                            <p id="workingDate" className="totalNo">0</p>
                            <p className="headCounter">Thương hiệu</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="full counterSection">
                        <div className="counterIcon">
                            <i className="fas fa-mobile blue_color"></i>
                        </div>
                        <div className="counterNo">
                            <p className="totalNo">10</p>
                            <p className="headCounter">Sản phẩm</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
        </div>
    );
}

export default PageMainAdmin;