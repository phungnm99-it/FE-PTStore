import React, { useState, useEffect } from "react";
import "../../../css/admin/subscriber/subscriber.css";
import subscriberApi from "../../../api/subscriberApi";
import Pagination from "react-pagination-library";
function Subscriber(props) {
  const [subscribers, setSubscribers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const [search, setSearch] = useState("");

  useEffect(() => {
    subscriberApi.getAll().then((res) => {
      let rs = res.data.filter((x) =>
        x.email.toLowerCase().includes(search.toLowerCase())
      );
      if (currentPage * 5 - 1 > rs.length) {
        setSubscribers(rs.slice((currentPage - 1) * 5));
      } else {
        setSubscribers(rs.slice((currentPage - 1) * 5, currentPage * 5));
      }
      setTotalPage(Math.round(rs.length / 5));
    });
  }, [currentPage, search]);

  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
  };
  return (
    <div>
      <section className="pageAdmin">
        <div className="account">
          <div className="subscriber-management">
            <div className="container-fluid">
              <h4 className="c-grey-900 mT-10 mB-30">QUẢN LÝ ĐĂNG KÝ THEO DÕI</h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="bgc-white bd bdrs-3 p-20 mB-20">
                    <div className="dataTables_wrapper">
                      <div className="buttonControl">
                          <button
                            className="sendMail"
                            onClick={() => props.switch(45)}
                          >
                            Gửi thông báo
                          </button>
                      </div>
                      <div className="row">
                        <div className=" filterOrder">
                            <label>
                              Trạng thái
                              <select
                                name="dataTable_length"
                                aria-controls="dataTable"
                                className="form-control select-Status"
                                id="select"
                                
                              >
                                <option value="">Tất cả</option>
                                <option value="Đã đăng ký">Đã đăng ký</option>
                                <option value="Hủy đăng ký">
                                  Hủy đăng ký
                                </option>
                                
                              </select>
                            </label>
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
                            <th className="sorting" id="Subscriber-IDCol">
                              Mã Subscriber
                            </th>
                            <th className="sorting" id="Subscriber-EmailCol">
                              Email
                            </th>
                            <th className="sorting" id="Subscriber-StatusCol">
                              Trạng thái
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {subscribers.map((item) => {
                            return (
                              <tr role="row" className="ood">
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>
                                  {item.status
                                    ? "Đang đăng ký"
                                    : "Ngừng đăng ký"}
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

export default Subscriber;
