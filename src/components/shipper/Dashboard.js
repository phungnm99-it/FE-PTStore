import React, { useState, useEffect } from "react";
import "../../css/shipper/Dashboard.css";
import OrderItem from "./OrderItem";
import orderApi from "../../api/orderApi";
function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderApi.getOrderCanDeliverByShipper().then((res) => {
      setOrders(res.data);
    });
  }, []);
  return (
    <div>
      <div className="pageMainShipper">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-6 col-lg-3">
              <div className="full counterSection">
                <div className="counterIcon">
                  <i className="far fa-calendar-check yellow_color"></i>
                </div>
                <div className="counterNo">
                  <p className="totalNo">100</p>
                  <p className="headCounter">Ngày làm việc</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="full counterSection">
                <div className="counterIcon">
                  <i className="fas fa-check green_color"></i>
                </div>
                <div className="counterNo">
                  <p className="totalNo">10</p>
                  <p className="headCounter">Đơn đã giao</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="full counterSection">
                <div className="counterIcon">
                  <i className="fas fa-box-open red_color"></i>
                </div>
                <div className="counterNo">
                  <p className="totalNo">10</p>
                  <p className="headCounter">Đơn hôm nay</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="full counterSection">
                <div className="counterIcon">
                  <i className="fas fa-bell blue_color"></i>
                </div>
                <div className="counterNo">
                  <p className="totalNo">10</p>
                  <p className="headCounter">Theo dõi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <h4 className="c-grey-900 mT-10 mB-30">
              ĐƠN HÀNG ĐANG CHỜ BẠN NHẬN
            </h4>
          </div>
          <div className="col-md-12">
            {orders.map((item, index) => {
              return <OrderItem key={index} detail={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
