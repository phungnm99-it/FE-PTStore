import React, { useState, useEffect } from "react";
import "../../../css/admin/order/Order.css";
import { priceFormat } from "../../../utils/priceFormat";
import orderApi from "../../../api/orderApi";
import Pagination from "react-pagination-library";
function CompletedOrder(props) {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    orderApi.getAll().then((res) => {
      let filterData = res.data.filter((x) => x.status === "Đã xác nhận");
      if (currentPage * 5 - 1 > filterData.length) {
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
  }, [currentPage]);

  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
  };

  const handleCancelOrder = (e) => {
    e.preventDefault();

    if (window.confirm("Bạn muốn huỷ đơn hàng " + e.target.id)) {
      orderApi.cancelByAdmin(e.target.id).then((res) => {
        if (res.code === 200) {
          alert("Huỷ đơn hàng thành công!");
          props.switch(43);
        } else {
          alert("Huỷ đơn hàng thất bại!");
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
              <h4 className="c-grey-900 mT-10 mB-30">
                QUẢN LÝ ĐƠN HÀNG ĐÃ XÁC NHẬN
              </h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="bgc-white bd bdrs-3 p-20 mB-20">
                    <div className="dataTables_wrapper">
                      <div className="row">
                        <div className=" filterOrder">
                          <p className="label-filterOrder">Từ ngày:</p>
                          <input
                            type="date"
                            className="form-control start"
                            id="startDay"
                            placeholder="Ngày bắt đầu"
                          />
                          <p className="label-filterOrder">Đến ngày:</p>
                          <input
                            type="date"
                            className="form-control end"
                            id="endDay"
                            placeholder="Ngày kết thúc"
                          />
                        </div>
                        <div
                          id="dataTable_filter"
                          className=" dataTables_filter"
                        >
                          <input
                            type="search"
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
                              Thời gian xác nhận
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
                                <td>19/12/2021</td>
                                <td>
                                  <button
                                    onClick={() => props.switch(30)}
                                    className="iconDetail"
                                  >
                                    <i className="fas fa-list"></i>
                                  </button>
                                  <button
                                    onClick={(e) => handleCancelOrder(e)}
                                    className="iconCancel"
                                    id={item.id}
                                  >
                                    <i
                                      id={item.id}
                                      className="fas fa-window-close"
                                    ></i>
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

export default CompletedOrder;
