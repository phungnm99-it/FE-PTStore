import React from "react";
import Filter from "./Filter";
import Products from "./Product";
import RecommendProduct from "../../common/RecommendProduct";
import SlideBrand from "./SlideBrand";
import TopCategory from "./TopCategory";

function ProductPage() {
  return (
    <div>
      <TopCategory />
      <SlideBrand />
      <Filter />
      <Products />
      <RecommendProduct />
    </div>
  );
}

export default ProductPage;
