import React, { useState, useEffect } from "react";
import "../../../css/admin/product/ProductStatus.css";
import productApi from "../../../api/productApi";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import DeleteProduct from "./DeleteProduct";
import Modal from "react-modal/lib/components/Modal";
import { customStyles } from "../../../utils/cssUtils";
function ProductStatus(props) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");

  const [selectOption, setSelectOption] = useState("");
  useEffect(() => {
    productApi.getAllManager().then((res) => {
      let rs = res.data.filter((x) =>
        x.name.toLowerCase().includes(search.toLowerCase())
      );

      if (document.getElementById("mySelect").value !== "") {
        rs = rs.filter(
          (x) => x.status === document.getElementById("mySelect").value
        );
      }

      if (currentPage * 5 - 1 > rs.length) {
        setProducts(rs.slice((currentPage - 1) * 5));
        console.log(1);
      } else {
        setProducts(rs.slice((currentPage - 1) * 5, currentPage * 5));
      }
      setTotalPage(Math.round(rs.length / 5) + 1);
    });
  }, [currentPage, search, selectOption]);

  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
  };

  const handleSearch = (value) => {
    setSelectOption(value);
  };
  return (
    <div>
      <section className="pageAdmin">
        <div className="account">
          <div className="productStatus-management">
            <div className="container-fluid">
              <h4 className="c-grey-900 mT-10 mB-30">
                QUẢN LÝ TÌNH TRẠNG SẢN PHẨM
              </h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="bgc-white bd bdrs-3 p-20 mB-20">
                    <div className="dataTables_wrapper">
                      <div className="row">
                        <div className=" filterPriceProduct">
                          <select
                            id="mySelect"
                            onChange={(e) => handleSearch(e.target.value)}
                          >
                            <option value="">Tình trạng</option>
                            <option value="Đang kinh doanh">
                              Đang kinh doanh
                            </option>
                            <option value="Ngừng kinh doanh">
                              Ngừng kinh doanh
                            </option>
                          </select>
                        </div>
                        <div
                          id="dataTable_filter"
                          className="dataTables_filter pull-right"
                        >
                          <input
                            type="search"
                            className="inputSearch"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Bạn cần tìm..."
                            aria-controls="dataTable"
                          />
                        </div>
                      </div>
                      <table className="table table-striped table-bordered dataTable">
                        <thead>
                          <tr role="row">
                            <th className="sorting" id="ProductStatus-IDCol">
                              Mã sản phẩm
                            </th>
                            <th className="sorting" id="ProductStatus-NameCol">
                              Tên sản phẩm
                            </th>
                            <th className="sorting" id="ProductStatus-ImageCol">
                              Hình ảnh
                            </th>
                            <th
                              className="sorting"
                              id="ProductStatus-CurrentQuantityCol"
                            >
                              Số lượng hiện tại
                            </th>
                            {/* <th
                                            className="sorting"
                                            id="ProductStatus-SoldQuantityCol"
                                            >
                                            Số lượng đã bán
                                            </th> */}
                            <th
                              className="sorting"
                              id="ProductStatus-StatusCol"
                            >
                              Tình trạng
                            </th>
                            <th
                              className="sorting"
                              id="ProductStatus-FeaturedProductCol"
                            >
                              Sản phẩm nổi bật
                            </th>
                            <th
                              className="sorting"
                              id="ProductStatus-ControlCol"
                            >
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
                                <td>
                                  <img src={item.imageUrl} alt="imgProduct" />
                                </td>
                                <td>{item.stock}</td>
                                {/* <td>12</td> */}

                                <td>{item.status}</td>
                                <td className="checkboxFeatured">
                                  <input
                                    type="checkbox"
                                    id="checkboxInput"
                                    name=""
                                    checked={item.isFeatured}
                                  />
                                </td>
                                <td>
                                  <button
                                    onClick={() => {
                                      props.setProduct(item);
                                      props.switch(29);
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

export default ProductStatus;
