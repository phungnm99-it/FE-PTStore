import React from "react";
import Filter from "./Filter";
import Products from "./Product";
import RecommendProduct from "../../common/RecommendProduct";
import SlideBrand from "./SlideBrand";
import TopCategory from "./TopCategory";
import { ProductProvider } from "./ProductContext";

function ProductPage() {
  return (
    <ProductProvider>
      <TopCategory />
      <SlideBrand />
      <Filter />
      <Products />
      <RecommendProduct />
    </ProductProvider>
  );
}

export default ProductPage;
