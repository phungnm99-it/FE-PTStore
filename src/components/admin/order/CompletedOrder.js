import React, { useState, useEffect } from "react";
import orderApi from "../../../api/orderApi";
import "../../../css/admin/order/Order.css";
import { priceFormat } from "../../../utils/priceFormat";

import Pagination from "react-pagination-library";
import { customStyles } from "../../../utils/cssUtils";
import CancelOrder from "./CancelOrder";
import Modal from "react-modal/lib/components/Modal";
function CompletedOrder(props) {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [modal, setModal] = useState(false);

  const [startDate, setStartDate] = useState(new Date("2000-01-01"));
  const [endDate, setEndDate] = useState(new Date("2099-01-01"));
  const [search, setSearch] = useState("");

  useEffect(() => {
    orderApi.getAll().then((res) => {
      let filterData = res.data.filter(
        (x) => x.status === "Giao hàng thành công"
      );
      console.log(filterData);
      filterData = filterData.filter(
        (x) =>
          new Date(x.orderTime.split("T")[0]) >= startDate &&
          new Date(x.orderTime.split("T")[0]) <= endDate
      );
      filterData = filterData.filter(
        (x) =>
          x.name.toLowerCase().includes(search.toLowerCase()) ||
          x.id.toString().includes(search)
      );
      if (currentPage * 5 - 1 > res.data.length) {
        setOrders(filterData.slice((currentPage - 1) * 5));
      } else {
        setOrders(filterData.slice((currentPage - 1) * 5, currentPage * 5));
      }
      if (filterData.length % 5 === 0) {
        setTotalPage(filterData.length / 5);
      } else {
        setTotalPage(Math.floor(filterData.length / 5) + 1);
      }
    });
  }, [currentPage, search, startDate, endDate]);

  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
  };

  return (
    <div>
      <section className="pageAdmin">
        <div className="account">
          <div className="order-management">
            <div className="container-fluid">
              <h4 className="c-grey-900 mT-10 mB-30">
                QUẢN LÝ ĐƠN HÀNG ĐÃ HOÀN THÀNH
              </h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="bgc-white bd bdrs-3 p-20 mB-20">
                    <div className="dataTables_wrapper">
                      <div className="row">
                        <div className=" filterOrder">
                          <p className="label-filterOrder">Từ ngày:</p>
                          <input
                            onChange={(e) =>
                              setStartDate(new Date(e.target.value))
                            }
                            type="date"
                            className="form-control start"
                            id="startDay"
                            placeholder="Ngày bắt đầu"
                          />
                          <p className="label-filterOrder">Đến ngày:</p>
                          <input
                            type="date"
                            onChange={(e) =>
                              setEndDate(new Date(e.target.value))
                            }
                            className="form-control end"
                            id="endDay"
                            placeholder="Ngày kết thúc"
                          />
                        </div>
                        <div
                          id="dataTable_filter"
                          className="dataTables_filter"
                        >
                          <input
                            type="search"
                            onChange={(e) => setSearch(e.target.value)}
                            className="inputSearch"
                            placeholder="Bạn cần tìm..."
                            aria-controls="dataTable"
                          />
                        </div>
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
                            <th className="sorting" id="Order-TimeCol">
                              Thời gian giao hàng
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
                                <td>{item.updateTime}</td>
                                <td>
                                  <button
                                    onClick={() => {
                                      props.setOrder(item);
                                      props.switch(30);
                                    }}
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
      <Modal isOpen={modal} style={customStyles}>
        <CancelOrder onCLose={() => setModal(false)} />
      </Modal>
    </div>
  );
}

export default CompletedOrder;
