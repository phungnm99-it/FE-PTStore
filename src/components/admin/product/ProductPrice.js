import React, { useState, useEffect } from "react";
import "../../../css/admin/product/ProductPrice.css";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import productApi from "../../../api/productApi";
import { priceFormat } from "../../../utils/priceFormat";
function ProductPrice(props) {
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    productApi.getAllManager().then((res) => {
      let filterData = res.data.filter((x) =>
        x.name.toLowerCase().includes(search.toLowerCase())
      );

      let ft = document.getElementById("mySelect").value;
      if (ft !== "") {
        if (ft === "ascending") {
          filterData = filterData.sort(function (a, b) {
            if (a.price >= b.price) {
              return 1;
            } else {
              return -1;
            }
          });
        } else {
          filterData = filterData.sort(function (a, b) {
            if (a.price <= b.price) {
              return 1;
            } else {
              return -1;
            }
          });
        }
      }

      let ftPrice = document.getElementById("mySelectPrice").value;
      if (ftPrice !== "") {
        if (ftPrice === "duoi5trieu") {
          filterData = filterData.filter((x) => x.price <= 5000000);
        } else if (ftPrice === "5trieutoi10trieu") {
          filterData = filterData.filter(
            (x) => x.price >= 5000000 && x.price <= 10000000
          );
        } else if (ftPrice === "10trieutoi20trieu") {
          filterData = filterData.filter(
            (x) => x.price >= 10000000 && x.price <= 20000000
          );
        } else {
          filterData = filterData.filter((x) => x.price >= 20000000);
        }
      }

      if (currentPage * 5 - 1 > filterData.length) {
        setProducts(filterData.slice((currentPage - 1) * 5));
        console.log(1);
      } else {
        setProducts(filterData.slice((currentPage - 1) * 5, currentPage * 5));
      }
      if (filterData.length % 5 === 0) {
        setTotalPage(filterData.length / 5);
      } else setTotalPage(Math.round(filterData.length / 5) + 1);
    });
  }, [currentPage, filter, priceFilter, search]);

  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
  };
  return (
    <div>
      <section className="pageAdmin">
        <div className="account">
          <div className="productPrice-management">
            <div className="container-fluid">
              <h4 className="c-grey-900 mT-10 mB-30">QU???N L?? GI?? S???N PH???M</h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="bgc-white bd bdrs-3 p-20 mB-20">
                    <div className="dataTables_wrapper">
                      <div className="row">
                        <div className=" filterPriceProduct">
                          <select
                            id="mySelect"
                            onChange={(e) => setFilter(e.target.value)}
                          >
                            <option value="">S???p x???p</option>
                            <option value="ascending">Gi?? th???p ?????n cao</option>
                            <option value="descending">Gi?? cao ?????n th???p</option>
                          </select>
                          <select
                            id="mySelectPrice"
                            onChange={(e) => setPriceFilter(e.target.value)}
                          >
                            <option value="">Gi??</option>
                            <option value="duoi5trieu">D?????i 5 tri???u</option>
                            <option value="5trieutoi10trieu">
                              5 tri???u t???i 10 tri???u
                            </option>
                            <option value="10trieutoi20trieu">
                              10 tri???u t???i 20 tri???u
                            </option>
                            <option value="tren20trieu">Tr??n 20 tri???u</option>
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
                            placeholder="B???n c???n t??m..."
                            aria-controls="dataTable"
                          />
                        </div>
                      </div>
                      <table className="table table-striped table-bordered dataTable">
                        <thead>
                          <tr role="row">
                            <th className="sorting" id="ProductPrice-IDCol">
                              M?? s???n ph???m
                            </th>
                            <th className="sorting" id="ProductPrice-NameCol">
                              T??n s???n ph???m
                            </th>
                            <th className="sorting" id="ProductPrice-ImageCol">
                              H??nh ???nh
                            </th>
                            <th className="sorting" id="ProductPrice-PriceCol">
                              Gi?? ni??m y???t
                            </th>
                            <th
                              className="sorting"
                              id="ProductPrice-CurrentPriceCol"
                            >
                              Gi?? hi???n t???i
                            </th>
                            {/* <th className="sorting" id="ProductPrice-StatusCol">
                                            T??nh tr???ng
                                            </th> */}
                            <th
                              className="sorting"
                              id="ProductPrice-ControlCol"
                            >
                              T??c v???
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
                                <td>{priceFormat(item.price ?? 0)}</td>
                                <td>{priceFormat(item.currentPrice ?? 0)}</td>
                                {/* <td>{item.status}</td> */}
                                <td>
                                  <button
                                    onClick={() => {
                                      props.setProduct(item);
                                      props.switch(20);
                                    }}
                                    className="iconEdit"
                                  >
                                    <i className="fas fa-edit"></i>
                                  </button>
                                  <button
                                    onClick={() => {
                                      props.setProduct(item);
                                      props.switch(17);
                                    }}
                                    className="iconDetail"
                                  >
                                    <i class="fas fa-list"></i>
                                  </button>
                                  {/* <button
                                                
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
    </div>
  );
}

export default ProductPrice;
