import React, { useState, useEffect } from "react";
import Modal from "react-modal/lib/components/Modal";
import "../../css/shipper/DeliveryHistory.css";
import { customStyles } from "../../utils/cssUtils";
import OrderHistoryDetail from "./OrderHistoryDetail";
import Pagination from "react-pagination-library";

import orderApi from "../../api/orderApi";
import { timeFormatDetail } from "../../utils/dateUtils";

function DeliveryHistory(props) {
  const [model, setModel] = useState(false);
  const [details, setDetails] = useState({});
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date("2000-01-01"));
  const [endDate, setEndDate] = useState(new Date("2099-01-01"));
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    orderApi.getOrderDeliveredByShipper().then((res) => {
      let filterData = res.data.filter(
        (x) =>
          new Date(x.deliverTime.split("T")[0]) >= startDate &&
          new Date(x.deliverTime.split("T")[0]) <= endDate
      );
      filterData = filterData.filter(
        (x) =>
          x.name.toLowerCase().includes(search.toLowerCase()) ||
          x.id.toString().includes(search) ||
          x.phoneNumber.includes(search)
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
      <div className="deliveryHistory">
        <div className="account">
          <div className="account-management">
            <div className="container-fluid">
              <h4 className="c-grey-900 mT-10 mB-30">LỊCH SỬ GIAO HÀNG</h4>
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
                            className="inputSearch"
                            placeholder="Bạn cần tìm..."
                            onChange={(e) => setSearch(e.target.value)}
                            aria-controls="dataTable"
                          />
                        </div>
                      </div>
                      <table className="table table-striped table-bordered dataTable">
                        <thead>
                          <tr role="row">
                            <th className="sorting" id="Shipper-IDCol">
                              Mã đơn hàng
                            </th>
                            <th className="sorting" id="Shipper-UserNameCol">
                              Tên người nhận
                            </th>
                            <th className="sorting_desc" id="Shipper-PhoneCol">
                              Số điện thoại
                            </th>
                            <th className="sorting" id="Shipper-AddressCol">
                              Địa chỉ
                            </th>
                            <th className="sorting_desc" id="Shipper-TimeCol">
                              Thời gian giao
                            </th>
                            <th className="sorting_desc" id="Shipper-StatusCol">
                              Tình trạng
                            </th>
                            <th className="sorting" id="Shipper-ControlCol">
                              Tác vụ
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {orders.map((item, index) => {
                            return (
                              <tr key={index} role="row" className="ood">
                                <td>{item.orderCode}</td>
                                <td>{item.name}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.address}</td>
                                <td>{timeFormatDetail(item.deliverTime)}</td>
                                <td>Giao thành công</td>
                                <td>
                                  <button
                                    className="btnAccept"
                                    onClick={() => {
                                      setDetails(item);
                                      setModel(true);
                                    }}
                                  >
                                    Chi tiết
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
      </div>

      <Modal isOpen={model} style={customStyles}>
        <OrderHistoryDetail bill={details} onCLose={() => setModel(false)} />
      </Modal>
    </div>
  );
}

export default DeliveryHistory;
