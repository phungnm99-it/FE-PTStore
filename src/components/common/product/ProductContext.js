import { useState, createContext } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [brandName, setBrandName] = useState("all");
  const changeBrandName = (brand) => {
    return setBrandName(brand);
  };

  const value = {
    brandName,
    changeBrandName,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
