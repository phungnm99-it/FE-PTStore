import React, { useState, useEffect } from "react";
import FilterOrderTab from "./FilterOrderTab";
import "../../css/customer/orderHistory.css";
import OrderDetail from "./orderDetail/OrderDetail";
import userApi from "../../api/userApi";
import { priceFormat } from "../../utils/priceFormat";
import { customStyles } from "../../utils/cssUtils";
import noOrder from "../../images/noOder.png";
import Modal from "react-modal";
function OrderHistory() {
  const [model, setModel] = useState(false);
  const [orders, setOrders] = useState([]);
  const [noOder, setNoOrder] = useState([]);

  useEffect(() => {
    getAllOwnsOrder();
  }, []);

  const getAllOwnsOrder = () => {
    userApi.getAllOwnsOrder().then((res) => {
      if (res.data !== null) {
        setNoOrder(res.data);
      }
    });
  };

  useEffect(() => {
    userApi.getAllOwnsOrder().then((response) => {
      setOrders(response.data);
      console.log(response.data);
    });
  }, []);

  return noOder.length === 0 ? (
    <section className="orderHistory">
        <div className="body-content">
          <h1>Đơn hàng của bạn</h1>
          <div className="account-layout">
            <div className="row equaHeight" data-obj=".col .box-bg-white">
              <div className="col col-lg">
                <div className="box-bg-white">
                  <div className="not-found-list">
                    <a>
                      <img src={noOrder} alt="not-found-list" />
                    </a>
                    <p>Bạn chưa có đơn hàng nào</p>
                    <a className="button_direct" href="/">
                      Về trang chủ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  ) : (
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
                              <td>
                                {item.products.map((index) => {
                                  return (
                                    <p key={index.productId}>
                                      {index.productName}
                                    </p>
                                  );
                                })}
                              </td>
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
      {/* kiểm tra state nào để mở modal - trong trường hợp này là model */}
      {/* oke t off */}
      <Modal isOpen={model} style={customStyles}>
        <OrderDetail onCLose={() => setModel(false)} />
      </Modal>
    </div>
  );
}

export default OrderHistory;
