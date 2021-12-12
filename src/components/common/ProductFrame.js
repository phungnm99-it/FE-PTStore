import React from "react";
import "../../css/common/ProductFrame.css";
import { Link } from "react-router-dom";
import { priceFormat } from "../../utils/priceFormat";
function ProductFrame(props) {
  return (
    <div className="productFrame">
      <div className="item">
        <div className="img">
          <Link to={`/chitiet/${props.id}`} title={props.name}>
            <img src={props.imageUrl} alt={props.name} title={props.name} />
          </Link>
        </div>
        <div className="info">
          <Link
            to={`/chitiet/${props.id}`}
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
