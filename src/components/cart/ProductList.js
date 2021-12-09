import React from "react";
import "../../css/cart/ProductList.css";
import UserInfo from "./UserInfo";
import ProductItem from "./ProductItem";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import noOrder from "../../images/noOder.png";
import { useHistory } from "react-router-dom";
function ProductList() {
  const context = useContext(AuthContext);
  const history = useHistory();
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
    <div className="backgroundCart">
      <div className="midCart">
        <div className="not-found-list">
          <a>
            <img src={noOrder} alt="not-found-list" />
          </a>
          <p>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
          <button className="button_direct" onClick={() => history.push("/")}>
            Về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
