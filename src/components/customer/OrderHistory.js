import React from "react";
import FilterOrderTab from "./FilterOrderTab";
import "../../css/customer/orderHistory.css";

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
                          <th className="sorting" id="History-DateCol">
                            Ngày mua
                          </th>
                          <th className="sorting" id="History-ProductCol">
                            Sản phẩm
                          </th>
                          <th className="sorting" id="History-TotalCol">
                            Tổng tiền
                          </th>
                          <th className="sorting" id="History-StatusCol">
                            Trạng thái đơn hàng
                          </th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="ood">
                          <td>HSDI94985</td>
                          <td>20/11/2021</td>
                          <td>IPHONE 13 PROMAX 512GB</td>
                          <td>39.000.000đ</td>
                          <td>Giao hàng thành công</td>
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
