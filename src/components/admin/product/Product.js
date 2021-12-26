import React, { useState, useEffect } from "react";
import productApi from "../../../api/productApi";
import "../../../css/admin/product/Product.css";

import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";

import { priceFormat } from "../../../utils/priceFormat";
import DeleteProduct from "./DeleteProduct";
import Modal from "react-modal/lib/components/Modal";
import { customStyles } from "../../../utils/cssUtils";

function Product(props) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    productApi.getAllManager().then((res) => {
      let rs = res.data.filter((x) =>
        x.name.toLowerCase().includes(search.toLowerCase())
      );
      if (currentPage * 5 - 1 > rs.length) {
        setProducts(rs.slice((currentPage - 1) * 5));
        console.log(1);
      } else {
        setProducts(rs.slice((currentPage - 1) * 5, currentPage * 5));
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
          <div className="product-management">
            <div className="container-fluid">
              <h4 className="c-grey-900 mT-10 mB-30">QUẢN LÝ SẢN PHẨM</h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="bgc-white bd bdrs-3 p-20 mB-20">
                    <div className="dataTables_wrapper">
                      <div className="buttonControl">
                        <button
                          className="Add"
                          onClick={() => props.switch(15)}
                        >
                          Thêm sản phẩm
                        </button>
                      </div>
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
                            <th className="sorting" id="Product-IDCol">
                              Mã sản phẩm
                            </th>
                            <th className="sorting" id="Product-NameCol">
                              Tên sản phẩm
                            </th>
                            <th className="sorting" id="Product-ColorCol">
                              Màu sắc
                            </th>
                            <th className="sorting" id="Product-BrandCol">
                              Thương hiệu
                            </th>
                            <th className="sorting" id="Product-PriceCol">
                              Giá niêm yết
                            </th>
                            <th
                              className="sorting"
                              id="Product-CurrentPriceCol"
                            >
                              Giá hiện tại
                            </th>
                            <th className="sorting" id="Product-ImageCol">
                              Hình ảnh
                            </th>
                            <th className="sorting" id="Product-StatusCol">
                              Tình trạng
                            </th>
                            <th className="sorting" id="Product-ControlCol">
                              Tác vụ
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((item) => {
                            return (
                              <tr role="row" className="ood">
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.color}</td>
                                <td>{item.brandName}</td>
                                <td>{priceFormat(item.price ?? 0)}</td>
                                <td>{priceFormat(item.currentPrice ?? 0)}</td>
                                <td>
                                  <img src={item.imageUrl} alt="imgProduct" />
                                </td>
                                <td>{item.status}</td>
                                <td>
                                  <button
                                    onClick={() => {
                                      props.setProduct(item);
                                      props.switch(16);
                                    }}
                                    className="iconEdit"
                                  >
                                    <i className="fas fa-edit"></i>
                                  </button>
                                  <button
                                    onClick={() => props.switch(17)}
                                    className="iconDetail"
                                  >
                                    <i class="fas fa-list"></i>
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
        <DeleteProduct onCLose={() => setModal(false)} />
      </Modal>
    </div>
  );
}

export default Product;
