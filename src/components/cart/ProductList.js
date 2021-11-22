import React from "react";
import "../../css/cart/ProductList.css";
import UserInfo from "./UserInfo";
import ProductItem from "./ProductItem";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";

function ProductList() {
  const context = useContext(AuthContext);
  return context.cart.length > 0 ? (
    <div>
      <div className="backgroundCart">
        <div className="midCart">
          <div className="listProduct">
            <ul className="listing-cart">
              {context.cart.map((item) => (
                <ProductItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  currentPrice={item.currentPrice}
                  quantity={item.quantity}
                />
              ))}
            </ul>
          </div>
          <UserInfo />
        </div>
      </div>
    </div>
  ) : (
    <h1>Chưa có sản phẩm</h1>
  );
}

export default ProductList;
