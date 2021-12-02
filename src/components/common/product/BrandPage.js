import React from "react";
import RecommendProduct from "../../common/RecommendProduct";
import SlideBrand from "./SlideBrand";
import TopCategory from "./TopCategory";
import BrandProduct from "./BrandProduct";

function BrandPage() {
  return (
    <div>
      <TopCategory />
      <SlideBrand />
      <BrandProduct />
      <RecommendProduct />
    </div>
  );
}

export default BrandPage;
