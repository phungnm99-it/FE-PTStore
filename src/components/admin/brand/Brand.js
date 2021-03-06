import React, { useState, useEffect } from "react";
import "../../../css/admin/brand/Brands.css";
import brandApi from "../../../api/brandApi";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import "../../../css/admin/paging.css";
import DeleteBrand from "./DeleteBrand";
import { customStyles } from "../../../utils/cssUtils";
import Modal from "react-modal/lib/components/Modal";
function Brand(props) {
  window.scrollTo(0, 0);
  const [brands, setBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    brandApi.getAll().then((res) => {
      let rs = res.data.filter((x) =>
        x.name.toLowerCase().includes(search.toLowerCase())
      );
      if (currentPage * 5 - 1 > rs.length) {
        setBrands(rs.slice((currentPage - 1) * 5));
      } else {
        setBrands(rs.slice((currentPage - 1) * 5, currentPage * 5));
      }
      setTotalPage(Math.round(rs.length / 5) + 1);
    });
  }, [currentPage, search]);

  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
  };

  return (
    <div>
      <section className="pageAdmin">
        <div className="account">
          <div className="brands-management">
            <div className="container-fluid">
              <h4 className="c-grey-900 mT-10 mB-30">QUẢN LÝ THƯƠNG HIỆU</h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="bgc-white bd bdrs-3 p-20 mB-20">
                    <div className="dataTables_wrapper">
                      <div className="row">
                        <div className="buttonControl">
                          <button
                            className="Add"
                            onClick={() => props.switch(9)}
                          >
                            Thêm thương hiệu
                          </button>
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
                          {/* <button className="btn-Search">Tìm kiếm</button> */}
                        </div>
                      </div>
                      <table className="table table-striped table-bordered dataTable">
                        <thead>
                          <tr role="row">
                            <th className="sorting" id="Brand-IDCol">
                              Mã thương hiệu
                            </th>
                            <th className="sorting" id="Brand-NameCol">
                              Tên thương hiệu
                            </th>
                            <th className="sorting_desc" id="Brand-ImgCol">
                              Hình ảnh
                            </th>
                            <th className="sorting" id="Brand-ControlCol">
                              Tác vụ
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {brands.map((item) => {
                            return (
                              <tr role="row" className="ood">
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                {/* ???? */}
                                <td>
                                  <img src={item.imageUrl} alt="imgBrand" />
                                </td>
                                <td>
                                  <button
                                    onClick={() => {
                                      props.setBrand(item);
                                      props.switch(10);
                                    }}
                                    className="iconEdit"
                                  >
                                    <i className="fas fa-edit"></i>
                                  </button>
                                  <button
                                    onClick={() => {
                                      props.setBrand(item);
                                      props.switch(11);
                                    }}
                                    className="iconDetail"
                                  >
                                    <i className="fas fa-list"></i>
                                  </button>
                                  {/* <button
                                    onClick={() => setModal(true)}
                                    className="iconDelete"
                                  >
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
                        {/* <a
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
                          </span> */}
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
        <DeleteBrand onCLose={() => setModal(false)} />
      </Modal>
    </div>
  );
}

export default Brand;
