import React, { useState, useEffect } from "react";
import "../../../css/admin/account/Account.css";
import userApi from "../../../api/userApi";
import Pagination from "react-pagination-library";
import { timeFormat } from "../../../utils/dateUtils";
import Modal from "react-modal/lib/components/Modal";
import { customStyles } from "../../../utils/cssUtils";
import DeleteAccount from "./DeleteAccount";
function AccountShipper(props) {
  const [admins, setAdmins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    userApi.getAllShipper().then((res) => {
      let filterData = res.data.filter((ac) => ac.roleName === "Shipper");
      filterData = filterData.filter(
        (f) =>
          String(f.id).includes(String(search).toLowerCase()) ||
          String(f.name).toLowerCase().includes(String(search).toLowerCase()) ||
          String(f.email)
            .toLowerCase()
            .includes(String(search).toLowerCase()) ||
          String(f.phoneNumber)
            .toLowerCase()
            .includes(String(search).toLowerCase())
      );
      if (currentPage * 5 - 1 > filterData.length) {
        setAdmins(filterData.slice((currentPage - 1) * 5));
      } else {
        setAdmins(filterData.slice((currentPage - 1) * 5, currentPage * 5));
      }
      setTotalPage(Math.round(filterData.length / 5) + 1);
    });
  }, [currentPage, search]);

  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
  };
  return (
    <div>
      <div className="pageAdmin">
        <div className="account">
          <div className="account-management">
            <div className="container-fluid">
              <h4 className="c-grey-900 mT-10 mB-30">
                QUẢN LÝ TÀI KHOẢN SHIPPER
              </h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="bgc-white bd bdrs-3 p-20 mB-20">
                    
                    <div className="dataTables_wrapper">
                      <div className="row">
                        <div className="buttonControl">
                          <button
                            className="Add"
                            onClick={() => props.switch(41)}
                          >
                            Thêm tài khoản
                          </button>
                        </div>
                        <div id="dataTable_filter" className="dataTables_filter">
                        <input
                          type="search"
                          className="inputSearch"
                          placeholder="Bạn cần tìm..."
                          onChange={(e) => setSearch(e.target.value)}
                          aria-controls="dataTable"
                        />
                        </div>
                      </div>
                      
                      {/* <div className="dataTables_length" id="dataTable_length">
                        {/* <label>
                          Hiển thị:
                          <select
                            name="dataTable_length"
                            aria-controls="dataTable"
                            className=""
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>
                        </label> 
                      </div> */}
                      
                      <table className="table table-striped table-bordered dataTable">
                        <thead>
                          <tr role="row">
                            <th className="sorting" id="Account-IDCol">
                              Mã tài khoản
                            </th>
                            <th className="sorting" id="Account-UserNameCol">
                              Họ tên
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
                          {admins.map((item) => {
                            return (
                              <tr key={item.id} role="row" className="ood">
                                <td>{item.id}</td>
                                <td>{item.fullName}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{timeFormat(item.birthday)}</td>
                                <td>{item.gender === "Nam" ? "Nam" : "Nữ"}</td>
                                <td>{item.address}</td>
                                <td>
                                  <button
                                    onClick={() => {
                                      props.setAccount(item);
                                      props.switch(7);
                                    }}
                                    className="iconDetail"
                                  >
                                    <i class="fas fa-list"></i>
                                  </button>
                                  <button
                                    onClick={() => setModal(true)}
                                    className="iconDelete"
                                  >
                                    <i className="fas fa-lock"></i>
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
      <Modal isOpen={modal} style={customStyles}>
        <DeleteAccount onCLose={() => setModal(false)} />
      </Modal>
    </div>
  );
}

export default AccountShipper;
