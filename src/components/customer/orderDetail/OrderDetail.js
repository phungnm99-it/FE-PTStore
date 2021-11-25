import React from "react";
import "../../../css/common/orderDetail.css";
import iconClose from "../../../images/iconClose.png";
import HeadOD from "./HeadOD";
import BodyOD from "./BodyOD";
import StatusOD from "./StatusOD";

function OrderDetail(props) {
  return (
    <div>
      <div className="orderDetail">
        <div className="jquery-modal blocker current">
          <div className="container modal">
            <div className="orderSuccess-form">
              <img
                alt="iconClose"
                className="icon-close"
                src={iconClose}
                onClick={props.onClose}
              />
              <div className="form">
                <HeadOD />
                <BodyOD />
                <BodyOD />
                <StatusOD />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
