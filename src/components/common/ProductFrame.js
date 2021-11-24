import React from "react";
import "../../css/common/ProductFrame.css";
import { Link } from "react-router-dom";
import { priceFormat } from "../../utils/priceFormat";
function ProductFrame(props) {
  return (
    <div className="productFrame">
      <div className="item">
        <div className="img">
          <Link
            to={`/home/phone/detail/${props.id}`}
            title="Apple iPhone 12 mini - Chính hãng VN/A"
          >
            <img
              src={props.imageUrl}
              alt="Apple iPhone 12 mini - Chính hãng VN/A"
              title="Apple iPhone 12 mini - Chính hãng VN/A"
            />
          </Link>
        </div>
        <div className="info">
          <Link
            to={`/home/phone/detail/${props.id}`}
            className="nameProduct"
            title={props.name}
          >
            {props.name}
          </Link>
          <span className="priceProduct">
            <strong>{priceFormat(props?.price)}</strong>
            <strike>{priceFormat(props?.price)}</strike>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductFrame;
