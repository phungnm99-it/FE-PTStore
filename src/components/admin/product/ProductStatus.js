import React, { useState, useEffect } from 'react';
import "../../../css/admin/product/ProductStatus.css"
import productApi from '../../../api/productApi';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
function ProductStatus (props) {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    useEffect(() => {
        productApi.getAll().then((res) => {
            if (currentPage * 5 - 1 > res.data.length) {
                setProducts(res.data.slice((currentPage - 1) * 5));
                console.log(1);
              } else {
                setProducts(res.data.slice((currentPage - 1) * 5, currentPage * 5));
              }
              setTotalPage(Math.round(res.data.length / 5) + 1);
        });
    }, [currentPage]);

    const changeCurrentPage = (numPage) => {
        setCurrentPage(numPage);
    };
    return (
        <div>
            <section className="pageAdmin">
                <div className="account">
                    <div className="productStatus-management">
                        <div className="container-fluid">
                            <h4 className="c-grey-900 mT-10 mB-30">QUẢN LÝ TÌNH TRẠNG SẢN PHẨM</h4>
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
                                            <th className="sorting" id="ProductStatus-IDCol">
                                            Mã sản phẩm
                                            </th>
                                            <th className="sorting" id="ProductStatus-NameCol">
                                            Tên sản phẩm
                                            </th>
                                            <th className="sorting" id="ProductStatus-ImageCol">
                                            Hình ảnh
                                            </th>
                                            <th className="sorting" id="ProductStatus-CurrentQuantityCol">
                                            Số lượng hiện tại
                                            </th>
                                            <th
                                            className="sorting"
                                            id="ProductStatus-SoldQuantityCol"
                                            >
                                            Số lượng đã bán
                                            </th>
                                            <th className="sorting" id="ProductStatus-StatusCol">
                                            Tình trạng
                                            </th>
                                            <th
                                            className="sorting"
                                            id="ProductStatus-FeaturedProductCol"
                                            >
                                            Sản phẩm nổi bật
                                            </th>
                                            <th className="sorting" id="ProductStatus-ControlCol">
                                            Tác vụ
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((item)=>{
                                                return(
                                                    <tr role="row" className="ood">
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td><img src={item.imageUrl} alt="imgProduct"/></td>
                                                        <td>{item.stock}</td>
                                                        <td>12</td>
                                                        
                                                        <td>{item.status}</td>
                                                        <td className="checkboxFeatured">
                                                            <input type="checkbox" id="checkboxInput" name=""/>
                                                            
                                                        </td>
                                                        <td>
                                                        <button
                                                            onClick={() => props.switch(29)}
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
                                                
                                                className="iconDelete"
                                            
                                            >
                                                <i className="fas fa-backspace"></i>
                                            </button> */}
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

export default ProductStatus;