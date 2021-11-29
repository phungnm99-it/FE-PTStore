import React from 'react';
import "../../../css/admin/product/ProductStatus.css"
function ProductStatus (props) {
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
                                        <tr role="row" className="ood">
                                            <td>NH9385392</td>
                                            <td>Iphone 13 ProMax 512GB</td>
                                            <td>...</td>
                                            <td>15</td>
                                            <td>12</td>
                                            
                                            <td>Còn hàng</td>
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

export default ProductStatus;