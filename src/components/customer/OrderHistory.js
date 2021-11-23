import React from "react";
import FilterOrderTab from "./FilterOrderTab";
import "../../css/customer/orderHistory.css";
import { Link } from "react-router-dom";

function OrderHistory() {
  return (
    <div>
      <section className="orderHistory">
        <div className="body-content">
          <h1>Đơn hàng của bạn</h1>
          <div className="account-layout">
            <div className="row equaHeight" data-obj=".col .box-bg-white">
              <div className="col col-lg">
                <div className="box-bg-white">
                  <FilterOrderTab />
                  <div className="box-order">
                    <table className="table table-striped table-bordered dataTable">
                      <thead>
                        <tr role="row">
                          <th className="sorting" id="History-IDOrderCol">
                            Mã đơn hàng
                          </th>
                          <th className="sorting" id="History-ProductCol">
                            Sản phẩm
                          </th>
                          <th className="sorting" id="History-DateCol">
                            Ngày đặt
                          </th>
                          <th className="sorting" id="History-TotalCol">
                            Tổng tiền
                          </th>
                          <th className="sorting" id="History-StatusCol">
                            Tình trạng
                          </th>
                          <th className="sorting" id="History-ControlCol"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="ood">
                          <td>
                            <Link to="/orderDetail">1234</Link>
                          </td>
                          <td>thuytienpn106@gmail.com</td>
                          <td>0858679912</td>
                          <td>06/10/1999</td>
                          <td>Nữ</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <NoOrders/> */}
    </div>
  );
}

export default OrderHistory;
