import React from "react";
import Detail from "./Detail";
import RecommendProduct from "../common/RecommendProduct";
import ProductInfo from "./ProductInfo";
import SimilarProduct from "../common/SimilarProduct";

function ProductDetail() {
  return (
    <div>
      <Detail />
      <ProductInfo />
      <SimilarProduct />
      <RecommendProduct />
    </div>
  );
}

export default ProductDetail;
