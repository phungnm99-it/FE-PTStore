import React from "react";
import RecommendProduct from "../../common/RecommendProduct";
import SlideBrand from "./SlideBrand";
import TopCategory from "./TopCategory";
import BrandProduct from "./BrandProduct";
import Filter from "./Filter";
import { ProductProvider } from "./ProductContext";

function BrandPage() {
  return (
    <ProductProvider>
      <TopCategory />
      <SlideBrand />
      <Filter />
      <BrandProduct />
      <RecommendProduct />
    </ProductProvider>
  );
}

export default BrandPage;
