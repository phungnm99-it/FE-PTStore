import React from "react";
import { priceFormat } from "../../../utils/priceFormat";

function BodyOD(props) {
  return (
    <div>
      <div className="bodyOrderDetail">
        <div className="row">
          <div className="col-sm-8 ">
            <h5 className="bold">{props.product?.productName}</h5>
            <p className="text-muted"> Số lượng: {props.product?.quantity}</p>
            <h4 className="mt-3 mb-4 bold">
              <strong>Đơn giá: {priceFormat(props.product?.price || 0)}</strong>
            </h4>
          </div>
          <div className="col-sm-4">
            <img
              alt="product"
              className="align-self-center img-fluid"
              src={props.product?.imageUrl}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyOD;
