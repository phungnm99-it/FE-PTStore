import React from "react";
import "../../css/productDetail/ProductInfo.css";
import MainInfo from "./MainInfo";
import Review from "./Review";

function ProductInfo() {
  return (
    <div>
      <div className="product-info">
        <div className="container">
          <div className="product-layout product-layout-grid">
            <div className="product-left">
              <Review />
            </div>
            <div className="product-right">
              <MainInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
