import React, { useState, useEffect } from "react";
import "../../css/shipper/Dashboard.css";
import OrderItem from "./OrderItem";
import orderApi from "../../api/orderApi";
import userApi from "../../api/userApi";
function Dashboard(props) {
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
                  <p id="workingDate" className="totalNo">
                    0
                  </p>
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
                  <p id="deliveredOrder" className="totalNo">
                    0
                  </p>
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
                  <p id="deliveringOrder" className="totalNo">
                    0
                  </p>
                  <p className="headCounter">Đơn đang giao</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="full counterSection">
                <div className="counterIcon">
                  <i className="fas fa-bell blue_color"></i>
                </div>
                <div className="counterNo">
                  <p id="totalOrder" className="totalNo">
                    10
                  </p>
                  <p className="headCounter">Đơn sẵn sàng</p>
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
              return (
                <OrderItem
                  switchPage={props.switch}
                  key={index}
                  detail={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
