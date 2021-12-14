import React, { useState, useEffect } from "react";
import orderApi from "../../../api/orderApi";
import "../../../css/admin/order/Order.css";
import { priceFormat } from "../../../utils/priceFormat";

import Pagination from "react-pagination-library";
function Order(props) {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    orderApi.getAll().then((res) => {
      if (currentPage * 5 - 1 > res.data.length) {
        setOrders(res.data.slice((currentPage - 1) * 5));
      } else {
        setOrders(res.data.slice((currentPage - 1) * 5, currentPage * 5));
      }
      setTotalPage(Math.round(res.data.length / 5));
    });
  }, [currentPage]);

  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
  };

  const handleVerifyOrder = (e) => {
    e.preventDefault();

    if (window.confirm("Bạn muốn xác nhận đơn hàng " + e.target.id)) {
      orderApi.verifyOrderByAdmin(e.target.id).then((res) => {
        if (res.code === 200) {
          alert("Xác nhận đơn hàng thành công!");
          props.switch(38);
        } else {
          alert("Xác nhận đơn hàng thất bạn!");
        }
      });
    }
  };

  return (
    <div>
      <section className="pageAdmin">
        <div className="account">
          <div className="order-management">
            <div className="container-fluid">
              <h4 className="c-grey-900 mT-10 mB-30">QUẢN LÝ ĐƠN HÀNG</h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="bgc-white bd bdrs-3 p-20 mB-20">
                    <h4 className="c-grey-900 mB-20">Danh sách</h4>
                    <div className="dataTables_wrapper">
                      {/* <div className="buttonControl">
                                                <button className="Add"><Link to = "/admin/home/addAccount">Thêm tài khoản</Link></button>
                                            </div> */}
                      {/* <div className="dataTables_length" id="dataTable_length">
                        <label>
                          Hiển thị:
                          <select
                            name="dataTable_length"
                            aria-controls="dataTable"
                            class=""
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>
                        </label>
                      </div> */}
                      <div id="dataTable_filter" className="dataTables_filter">
                        <input
                          type="search"
                          className="inputSearch"
                          placeholder="Bạn cần tìm..."
                          aria-controls="dataTable"
                        />
                        <button className="btn-Search">Tìm kiếm</button>
                      </div>
                      <table className="table table-striped table-bordered dataTable">
                        <thead>
                          <tr role="row">
                            <th className="sorting" id="Order-IDOrderCol">
                              Mã đơn hàng
                            </th>
                            <th className="sorting" id="Order-NameUserCol">
                              Tên người nhận
                            </th>
                            <th className="sorting" id="Order-ProductOrderCol">
                              Sản phẩm
                            </th>
                            <th className="sorting" id="Order-StockCol">
                              Số lượng
                            </th>
                            <th className="sorting" id="Order-TotalCostCol">
                              Tổng tiền
                            </th>
                            <th className="sorting" id="Order-PaymentMethodCol">
                              Hình thức thanh toán
                            </th>
                            <th className="sorting" id="Order-StatusCol">
                              Tình trạng
                            </th>
                            <th className="sorting" id="Order-ControlCol">
                              Tác vụ
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((item) => {
                            return (
                              <tr role="row" className="ood">
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                  {item.products.map((index) => {
                                    return (
                                      <p key={index.productId}>
                                        {index.productName}
                                      </p>
                                    );
                                  })}
                                </td>
                                <td>
                                  {item.products.map((index) => {
                                    return (
                                      <p key={index.productId}>
                                        {index.quantity}
                                      </p>
                                    );
                                  })}
                                </td>
                                <td>{priceFormat(item?.totalCost)}</td>
                                <td>{item.paymentMethod}</td>
                                <td>{item.status}</td>
                                <td>
                                  {item.status === "Đặt hàng thành công" ? (
                                    <button
                                      onClick={(e) => handleVerifyOrder(e)}
                                      className="iconEdit"
                                      id={item.id}
                                    >
                                      <i
                                        id={item.id}
                                        className="fas fa-edit"
                                      ></i>
                                    </button>
                                  ) : null}
                                  <button
                                    onClick={() => props.switch(30)}
                                    className="iconDetail"
                                  >
                                    <i className="fas fa-list"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="dataTable_paginate"
                      >
                        <Pagination
                          currentPage={currentPage}
                          totalPages={totalPage}
                          changeCurrentPage={changeCurrentPage}
                          theme="square-i"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;
