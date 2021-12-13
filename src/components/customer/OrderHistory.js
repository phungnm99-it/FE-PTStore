import React, { useState, useEffect } from "react";
import "../../css/customer/orderHistory.css";
import OrderDetail from "./orderDetail/OrderDetail";
import userApi from "../../api/userApi";
import { priceFormat } from "../../utils/priceFormat";
import { customStyles } from "../../utils/cssUtils";
import Modal from "react-modal";
import { timeFormat } from "../../utils/dateUtils";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function OrderHistory() {
  const [model, setModel] = useState(false);
  const [orders, setOrders] = useState([]);
  const [noOder, setNoOrder] = useState([]);
  const [details, setDetails] = useState({});
  const history = useHistory();
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
                    <img
                      src="http://res.cloudinary.com/dobsh4rbw/image/upload/v1639404278/commom/noOder121321090323.png"
                      alt="not-found-list"
                    />
                  </a>
                  <p>Bạn chưa có đơn hàng nào</p>
                  <button
                    className="button_direct"
                    onClick={() => history.push("/")}
                  >
                    Về trang chủ
                  </button>
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
                  {/* <FilterOrderTab /> */}
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
                              <td>{timeFormat(item.orderTime)}</td>
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
                              <td>
                                {item.status === "1"
                                  ? "Đặt hàng thành công"
                                  : item.status === "2"
                                  ? "Đã xác nhận"
                                  : item.status === "3"
                                  ? "Đang chờ giao hàng"
                                  : "Giao hàng thành công"}
                              </td>
                              <td>
                                <button
                                  onClick={() => {
                                    setDetails(item);
                                    setModel(true);
                                  }}
                                >
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
        <OrderDetail bill={details} onCLose={() => setModel(false)} />
      </Modal>
    </div>
  );
}

export default OrderHistory;
