import React, { useEffect, useState } from "react";
import feedbackApi from "../../../api/feedback";
import "../../../css/admin/feedback/Feedback.css";
import Pagination from "react-pagination-library";
import { timeFormat } from "../../../utils/dateUtils";
function FeedbackHasBeenReplied(props) {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");

  const [startDate, setStartDate] = useState(new Date("2000-01-01"));
  const [endDate, setEndDate] = useState(new Date("2099-01-01"));
  useEffect(() => {
    feedbackApi.getAll().then((res) => {
      let filterData = res.data.filter((ac) => ac.isReplied === true);
      filterData = filterData.filter(
        (x) =>
          new Date(x.feedbackTime.split("T")[0]) >= startDate &&
          new Date(x.feedbackTime.split("T")[0]) <= endDate
      );
      filterData = filterData.filter((x) =>
        x.email.toLowerCase().includes(search.toLowerCase())
      );
      if (currentPage * 5 - 1 > filterData.length) {
        setFeedbacks(filterData.slice((currentPage - 1) * 5));
      } else {
        setFeedbacks(filterData.slice((currentPage - 1) * 5, currentPage * 5));
      }
      setTotalPage(Math.round(filterData.length / 5) + 1);
    });
  }, [currentPage, startDate, endDate, search]);
  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
  };
  return (
    <div>
      <section className="pageAdmin">
        <div className="account">
          <div className="feedback-management">
            <div className="container-fluid">
              <h4 className="c-grey-900 mT-10 mB-30">
                QUẢN LÝ GÓP Ý ĐÃ PHẢN HỒI
              </h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="bgc-white bd bdrs-3 p-20 mB-20">
                    <div className="dataTables_wrapper">
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
                      <div className="row">
                        <div className=" filterOrder">
                          <p className="label-filterOrder">Từ ngày:</p>
                          <input
                            type="date"
                            onChange={(e) =>
                              setStartDate(new Date(e.target.value))
                            }
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
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Bạn cần tìm..."
                            aria-controls="dataTable"
                          />
                          <button className="btn-Search">Tìm kiếm</button>
                        </div>
                      </div>
                      <table className="table table-striped table-bordered dataTable">
                        <thead>
                          <tr role="row">
                            <th
                              className="sorting col-md-3"
                              id="Feedback-IDCol"
                            >
                              Mã góp ý
                            </th>
                            <th
                              className="sorting col-md-4"
                              id="Feedback-UserCol"
                            >
                              Tên người gửi
                            </th>
                            <th className="sorting" id="Feedback-EmailCol">
                              Email
                            </th>
                            <th className="sorting" id="Feedback-TopicCol">
                              Chủ đề
                            </th>
                            <th className="sorting" id="Feedback-ContentCol">
                              Nội dung
                            </th>
                            <th className="sorting" id="Feedback-TimeCol">
                              Thời gian gửi
                            </th>
                            <th className="sorting" id="Feedback-ControlCol">
                              Tác vụ
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {feedbacks.map((item) => {
                            return (
                              <tr role="row" className="ood">
                                <td>{item.id}</td>
                                <td>{item.fullName}</td>
                                <td>{item.email}</td>
                                <td>{item.topic}</td>
                                <td>{item.content}</td>
                                <td>{timeFormat(item.feedbackTime)}</td>
                                <td>
                                  <button
                                    onClick={() => props.switch(26)}
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

export default FeedbackHasBeenReplied;
