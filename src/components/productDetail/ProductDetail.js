import React from "react";
import Detail from "./Detail";
import RecommendProduct from "../common/RecommendProduct";
import ProductInfo from "./ProductInfo";

function ProductDetail() {
  return (
    <div>
      <Detail />
      <ProductInfo />
      <RecommendProduct />
    </div>
  );
}

export default ProductDetail;
