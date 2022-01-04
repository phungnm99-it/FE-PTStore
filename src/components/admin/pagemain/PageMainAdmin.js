import React, { useEffect, useState } from "react";
import orderApi from "../../../api/orderApi";
import userApi from "../../../api/userApi";
import "../../../css/admin/pageMain/pageMainAdmin.css";
import { CChart } from "@coreui/react-chartjs";

function PageMainAdmin() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    orderApi.getOrderCanDeliverByShipper().then((res) => {
      setOrders(res.data);
    });
    userApi.getCommonAdminInfo().then((res) => {
      document.getElementById("totalBrand").innerText = res.data.totalBrand;
      document.getElementById("totalOrder").innerText = res.data.totalOrder;
      document.getElementById("totalProduct").innerText = res.data.totalProduct;
      document.getElementById("totalAccount").innerText = res.data.totalAccount;
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
              <p id="totalAccount" className="totalNo">
                100
              </p>
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
              <p id="totalOrder" className="totalNo">
                10
              </p>
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
              <p id="totalBrand" className="totalNo">
                0
              </p>
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
              <p id="totalProduct" className="totalNo">
                10
              </p>
              <p className="headCounter">Sản phẩm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ChartSale">
        <p className="title-chart">Thống kê doanh thu</p>
        <div className="row">
          <div id="lineChart" className="col-md-10 chartSale">
            <CChart
              type="line"
              data={{
                labels: [
                  "Tháng 1",
                  "Tháng 2",
                  "Tháng 3",
                  "Tháng 4",
                  "Tháng 5",
                  "Tháng 6",
                  "Tháng 7",
                  "Tháng 8",
                  "Tháng 9",
                  "Tháng 10",
                  "Tháng 11",
                  "Tháng 12",
                ],
                datasets: [
                  {
                    label: "Doanh thu (triệu đồng)",
                    backgroundColor: "blue",
                    borderColor: "blue",
                    pointBackgroundColor: "blue",
                    pointBorderColor: "blue",
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 40, 50, 60],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>

      <div className="ChartStatusOrder">
        <p>Thống kê trạng thái đơn hàng</p>
        <div className="row chartStatusOrder">
          <div
            id="donutChart"
            style={{ height: "380px", width: "380px" }}
            className="col-md-10"
          >
            <CChart
              type="doughnut"
              data={{
                labels: [
                  "Đặt hàng thành công",
                  "Đã xác nhận",
                  "Đang giao hàng",
                  "Giao hàng thành công",
                ],
                datasets: [
                  {
                    backgroundColor: [
                      "#41B883",
                      "#E46651",
                      "#00D8FF",
                      "#DD1B16",
                    ],
                    data: [40, 20, 80, 10],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>

      <br />
    </div>
  );
}

export default PageMainAdmin;
