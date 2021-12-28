import React, { useState, useEffect } from "react";
import reviewApi from "../../../api/reviewApi";
import "../../../css/admin/review/Review.css";
import Pagination from "react-pagination-library";
import { timeFormat } from "../../../utils/dateUtils";
import DeleteReview from "./DeleteReview";
import Modal from "react-modal/lib/components/Modal";
import { customStyles } from "../../../utils/cssUtils";
function Review(props) {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    reviewApi.getAll().then((res) => {
      let ft = res.data.filter(
        (x) =>
          x.userName.toLowerCase().includes(search.toLowerCase()) ||
          x.productName.toLowerCase().includes(search.toLowerCase())
      );
      if (currentPage * 5 - 1 > ft.length) {
        setReviews(ft.slice((currentPage - 1) * 5));
      } else {
        setReviews(ft.slice((currentPage - 1) * 5, currentPage * 5));
      }
      setTotalPage(Math.round(ft.length / 5) + 1);
    });
  }, [currentPage, search]);

  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
  };
  return (
    <div>
      <section className="pageAdmin">
        <div className="account">
          <div className="review-management">
            <div className="container-fluid">
              <h4 className="c-grey-900 mT-10 mB-30">QUẢN LÝ ĐÁNH GIÁ</h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="bgc-white bd bdrs-3 p-20 mB-20">
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
                          onChange={(e) => setSearch(e.target.value)}
                          aria-controls="dataTable"
                        />
                      </div>
                      <table className="table table-striped table-bordered dataTable">
                        <thead>
                          <tr role="row">
                            <th className="sorting" id="Review-IDCol">
                              Mã đánh giá
                            </th>
                            <th className="sorting" id="Review-UserCol">
                              Tên người dùng
                            </th>
                            <th className="sorting" id="Review-ProductCol">
                              Sản phẩm đánh giá
                            </th>
                            <th className="sorting" id="Review-ContentCol">
                              Nội dung đánh giá
                            </th>
                            <th className="sorting" id="Review-TimeCol">
                              Thời gian đánh giá
                            </th>
                            <th className="sorting" id="Review-ControlCol">
                              Tác vụ
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {reviews.map((item) => {
                            return (
                              <tr role="row" className="ood">
                                <td>{item.id}</td>
                                <td>{item.userName}</td>
                                <td>{item.productName}</td>
                                <td>{item.content}</td>
                                <td>{timeFormat(item.reviewTime)}</td>
                                <td>
                                  <button
                                    onClick={() => props.switch(19)}
                                    className="iconDetail"
                                  >
                                    <i className="fas fa-list"></i>
                                  </button>
                                  {/* <button
                                    onClick={() => setModal(true)}
                                   className="iconDelete">
                                    <i className="fas fa-backspace"></i>
                                  </button> */}
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
        <DeleteReview onCLose={() => setModal(false)} />
      </Modal>
    </div>
  );
}

export default Review;
