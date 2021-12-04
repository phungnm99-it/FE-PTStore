import React from "react";
import RecommendProduct from "../../common/RecommendProduct";
import SlideBrand from "./SlideBrand";
import TopCategory from "./TopCategory";
import BrandProduct from "./BrandProduct";
import Filter from "./Filter";


function BrandPage() {
  return (
    <div>
      <TopCategory />
      <SlideBrand />
      <Filter/>
      <BrandProduct />
      <RecommendProduct />
    </div>
  );
}

export default BrandPage;
