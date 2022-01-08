import React, { useState, useEffect } from "react";
import "../../../css/admin/account/Account.css";
import userApi from "../../../api/userApi";
import Pagination from "react-pagination-library";
import { timeFormat } from "../../../utils/dateUtils";
function LockedAccount(props) {
  const [admins, setAdmins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");
  const [change, setChange] = useState("");

  const handleUnlock = (e) => {
    e.preventDefault();
    console.log(admins.find((x) => x.id == e.target.id));
    if (window.confirm("Bạn muốn mở khoá tài khoản id là " + e.target.id)) {
      userApi.unlockUser(e.target.id).then((res) => {
        if (res.code === 200) {
          alert("Mở khoá user thành công!");
          setChange(e.target.id.toString());
        } else {
          alert("Mở khoá user thất bại!");
        }
      });
    }
  };

  useEffect(() => {
    userApi.getLockedAccount().then((res) => {
      let filterData = res.data.filter((ac) => ac.isDisable === true);
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
  }, [currentPage, search, change]);

  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
  };
  return (
    <div>
      <div className="pageAdmin">
        <div className="account">
          <div className="account-management">
            <div className="container-fluid">
              <h4 className="c-grey-900 mT-10 mB-30">QUẢN LÝ TÀI KHOẢN KHÓA</h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="bgc-white bd bdrs-3 p-20 mB-20">
                    <div className="dataTables_wrapper">
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
                              <option value="Admin">Admin</option>
                              <option value="User">
                                User
                              </option>
                              <option value="Shipper">
                                Shipper
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
                          {admins.map((item) => {
                            return (
                              <tr role="row" className="ood">
                                <td>{item.id}</td>
                                <td>{item.fullName}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{timeFormat(item.birthday)}</td>
                                <td>{item.gender}</td>
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
                                    className="iconUnlock"
                                    id={item.id}
                                    onClick={(e) => handleUnlock(e)}
                                  >
                                    <i
                                      className="fas fa-unlock"
                                      id={item.id}
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
      </div>
    </div>
  );
}

export default LockedAccount;
