import React, { useState, useContext } from "react";
import "../../css/cart/ProductItem.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import { priceFormat } from "../../utils/priceFormat";

function ProductItem(props) {
  const [quantities, setQuantities] = useState(props.quantity || 1);
  let price = props.currentPrice;
  let link = "/chitiet/" + props.id;
  let href = "localhost:3000" + link;
  const context = useContext(AuthContext);
  const handleAdd = () => {
    setQuantities(quantities + 1);
    let product = {
      id: props.id,
      name: props.name,
      imageUrl: props.imageUrl,
      price: props.price,
      currentPrice: props.currentPrice,
      quantity: quantities + 1,
    };
    context.addToCart({ product });
  };

  return (
    <li className="product-item">
      <div className="imgsp">
        <Link to={link}>
          <img
            data-src={props.imageUrl}
            src={props.imageUrl}
            alt={props.name}
            loading="lazy"
            className=" ls-is-cached lazyloaded"
          />
        </Link>
        <button onClick={() => context.removeItem(props.id)}> Xóa </button>
      </div>
      <div className="infosp">
        <div className="name-price">
          <div className="name-container">
            <Link to={link} className="product-item__name">
              {" "}
              {props.name}{" "}
            </Link>
          </div>
          <span>
            {" "}
            {priceFormat(price * quantities)}
            <strike>{priceFormat(props.price * quantities)}</strike>
          </span>
        </div>
        <hr />
        <div className="quality">
          <div className="choosenumber">
            <div
              className={"minus" + (quantities < 2 ? " disable-button" : "")}
              onClick={() => setQuantities(quantities - 1)}
            >
              <i></i>
            </div>
            <div className="number">{quantities}</div>
            <div className="plus" onClick={handleAdd}>
              <i></i>
              <i></i>
            </div>
            <input type="hidden" />
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
