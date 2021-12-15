import React, { useEffect, useState } from 'react';
import feedbackApi from '../../../api/feedback';
import "../../../css/admin/feedback/Feedback.css"
import { timeFormat } from '../../../utils/dateUtils';
function FeedbackHasBeenReplied (props) {
    const [feedbacks, setFeedbacks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    useEffect(() => {
        feedbackApi.getAll().then((res) => { let filterData = res.data.filter((ac) => ac.isReplied === "False")
          if (currentPage * 5 - 1 > filterData.length) {
            setFeedbacks(filterData.slice((currentPage - 1) * 5));
          } else {
            setFeedbacks(filterData.slice((currentPage - 1) * 5, currentPage * 5));
          }
          setTotalPage(Math.round(filterData.length / 5) + 1);
        });
      }, [currentPage]);
    return (
        <div>
            <section className="pageAdmin">
                <div className="account">
                    <div className="feedback-management">
                        <div className="container-fluid">
                        <h4 className="c-grey-900 mT-10 mB-30">QUẢN LÝ GÓP Ý ĐÃ PHẢN HỒI</h4>
                        <div className="row">
                            <div className="col-md-12">
                            <div className="bgc-white bd bdrs-3 p-20 mB-20">
                                <h4 className="c-grey-900 mB-20">Danh sách</h4>
                                <div className="dataTables_wrapper">
                                
                                <div className="dataTables_length" id="dataTable_length">
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
                                </div>
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
                                        <th className="sorting col-md-3" id="Feedback-IDCol">
                                        Mã góp ý
                                        </th>
                                        <th className="sorting col-md-4" id="Feedback-UserCol">
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
                                            return(
                                            <tr role="row" className="ood">
                                                <td>{item.id}</td>
                                                <td>{item.fullName}</td>
                                                <td>{item.email}</td>
                                                <td>{item.topic}</td>
                                                <td>
                                                {item.content}
                                                </td>
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
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <div
                                    className="dataTables_paginate paging_simple_numbers"
                                    id="dataTable_paginate"
                                >
                                    <a
                                    className="paginate_button previous disabled"
                                    id="dataTable_previous"
                                    >
                                    Số trang
                                    </a>
                                    <span>
                                    <a
                                        className="paginate_button current"
                                        aria-controls="dataTable"
                                        data-dt-idx="1"
                                        tabindex="0"
                                    >
                                        1
                                    </a>
                                    <a
                                        className="paginate_button "
                                        aria-controls="dataTable"
                                        data-dt-idx="2"
                                        tabindex="0"
                                    >
                                        2
                                    </a>
                                    <a
                                        className="paginate_button "
                                        aria-controls="dataTable"
                                        data-dt-idx="3"
                                        tabindex="0"
                                    >
                                        3
                                    </a>
                                    <a
                                        className="paginate_button "
                                        aria-controls="dataTable"
                                        data-dt-idx="4"
                                        tabindex="0"
                                    >
                                        4
                                    </a>
                                    <a
                                        className="paginate_button "
                                        aria-controls="dataTable"
                                        data-dt-idx="5"
                                        tabindex="0"
                                    >
                                        5
                                    </a>
                                    <a
                                        className="paginate_button "
                                        aria-controls="dataTable"
                                        data-dt-idx="6"
                                        tabindex="0"
                                    >
                                        6
                                    </a>
                                    </span>
                                    <a
                                    className="paginate_button next"
                                    aria-controls="dataTable"
                                    data-dt-idx="7"
                                    tabindex="0"
                                    id="dataTable_next"
                                    >
                                    <i className="fas fa-forward"></i>
                                    </a>
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