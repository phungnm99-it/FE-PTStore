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
            to={`/phone/${props.id}`}
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
            to={`/phone/${props.id}`}
            className="nameProduct"
            title={props.name}
          >
            {props.name}
          </Link>
          <span className="priceProduct">
            <strong>{priceFormat(props?.currentPrice)}</strong>
            {props?.price !== props?.currentPrice ? (
              <strike>{priceFormat(props?.price)}</strike>
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductFrame;
