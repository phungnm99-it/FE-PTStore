import React from "react";
import "../../../css/admin/account/Account.css"
function AccountAdmin (props){

  return (
    <div>
      <div className="pageAdmin">
          <div className="account">
            <div className="account-management">
              <div className="container-fluid">
                <h4 className="c-grey-900 mT-10 mB-30">
                  QUẢN LÝ TÀI KHOẢN ADMIN
                </h4>
                <div className="row">
                  <div className="col-md-12">
                    <div className="bgc-white bd bdrs-3 p-20 mB-20">
                      <h4 className="c-grey-900 mB-20">Danh sách</h4>
                      <div className="dataTables_wrapper">
                        <div className="buttonControl">
                          <button
                            className="Add"
                            onClick={() => props.switch(5)}
                          >
                            Thêm tài khoản
                          </button>
                        </div>
                        <div
                          className="dataTables_length"
                          id="dataTable_length"
                        >
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
                        <div
                          id="dataTable_filter"
                          className="dataTables_filter"
                        >
                          <label>
                            Tìm kiếm:
                            <input
                              type="search"
                              className=""
                              placeholder=""
                              aria-controls="dataTable"
                            />
                          </label>
                        </div>
                        <table className="table table-striped table-bordered dataTable">
                          <thead>
                            <tr role="row">
                              <th className="sorting" id="Account-IDCol">
                                Mã tài khoản
                              </th>
                              <th className="sorting" id="Account-UserNameCol">
                                Tài khoản
                              </th>
                              <th className="sorting" id="Account-EmailCol">
                                Email
                              </th>
                              <th className="sorting_desc" id="Account-PhoneCol">
                                Số điện thoại
                              </th>
                              <th className="sorting" id="Account-BirthdayCol">
                                Ngày sinh
                              </th>
                              <th className="sorting" id="Account-SexCol">
                                Giới tính
                              </th>
                              <th className="sorting" id="Account-AddressCol">
                                Địa chỉ
                              </th>
                              <th className="sorting" id="Account-ControlCol">
                                Tác vụ
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row" className="ood">
                              <td>HSLF348502</td>
                              <td>tienphan</td>
                              <td>thuytienpn106@gmail.com</td>
                              <td>0858679912</td>
                              <td>06/10/1999</td>
                              <td>Nữ</td>
                              <td>Thủ Đức</td>
                              <td>
                                <button
                                  className="iconEdit"
                                  onClick={() => props.switch(6)}
                                >
                                  <i className="fas fa-edit"></i>
                                </button>
                                <button
                                  onClick={() => props.switch(7)}
                                  className="iconDetail"
                                >
                                  <i class="fas fa-list"></i>
                                </button>
                                <button
                                  to="/admin/home/deleteAccount"
                                  className="iconDelete"
                                >
                                  <i className="fas fa-backspace"></i>
                                </button>
                              </td>
                            </tr>
                            
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
      </div>
    </div>
  );
}

export default AccountAdmin;
