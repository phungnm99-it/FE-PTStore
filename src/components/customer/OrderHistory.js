import React, { useState, useEffect } from "react";
import FilterOrderTab from "./FilterOrderTab";
import "../../css/customer/orderHistory.css";
import OrderDetail from "./orderDetail/OrderDetail";
import userApi from "../../api/userApi";
import { priceFormat } from "../../utils/priceFormat";

function OrderHistory() {
  const [model, setModel] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    userApi.getAllOwnsOrder().then((response) => {
      setOrders(response.data);
      console.log(response.data);
    });
  }, []);
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
                          <th className="sorting" id="History-Control"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((item) => {
                          return (
                            <tr key={item.id} role="row" className="ood">
                              <td>{item.orderCode}</td>
                              <td>{new Date(item.orderTime).toDateString()}</td>
                              <td>{item?.products.map((index) => {
                                return <p key={index.productId}>{index.productNameY}</p>
                              })}</td>
                              <td>{priceFormat(item?.totalCost)}</td>
                              <td>{item.status}</td>
                              <td>
                                <button onClick={() => setModel(true)}>
                                  <i className="fas fa-list iconDetail"></i>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {model && <OrderDetail onClose={() => setModel(false)} />}
    </div>
  );
}

export default OrderHistory;
