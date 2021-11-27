import React, { Component } from 'react';
import "../../../css/admin/order/ProductItem.css"
function ProductItem () {
    return (
        <div>
            <div className = "productItem">
                <div className="row">
                    <div className="col-sm-8 ">
                        <h5 className="bold">Điện thoại Iphone 13 - 512GB</h5>
                        <p className="text-muted"> Số lượng: 1</p>
                        <h4 className="mt-3 mb-4 bold">
                        <strong>9,490,000 ₫ </strong>
                        </h4>
                    </div>
                    <div className="col-sm-4">
                        <img
                        alt="product"
                        className="align-self-center img-fluid"
                        src="https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-black-2.jpg"
                        />{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;