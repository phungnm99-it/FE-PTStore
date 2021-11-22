import React from "react";
import "../../css/cart/CartInfo.css";
import { Link } from "react-router-dom";
function CartInfo() {
  return (
    <div>
      <div className="backgroundCart">
        <div className="cartTopContent">
          <Link to="/" className="buyMore">
            Mua thêm sản phẩm khác
          </Link>
          <span>Giỏ hàng của bạn</span>
        </div>
      </div>
    </div>
  );
}

export default CartInfo;
