import React, { useEffect } from "react";
import "../../../css/common/orderDetail.css";
import iconClose from "../../../images/iconClose.png";
import HeadOD from "./HeadOD";
import BodyOD from "./BodyOD";
import StatusOD from "./StatusOD";

function OrderDetail(props) {
  useEffect(()=>{
    console.log(props.bill)
  },[props])
  return (
    <div>
      <div className="orderDetail">
        <div className="jquery-modal blocker current">
          <div className="container modal modal-orderDetail">
            <div className="orderSuccess-form">
              <img
                alt="iconClose"
                className="icon-close"
                src={iconClose}
                onClick={() => props.onCLose()}
              />
              <div className="form">
                <HeadOD />
                <StatusOD status={parseInt("3")} />
                {
                  props?.bill?.products ? props.bill.products.map((item, idx)=>{
                    return <BodyOD product={item} />
                  }) : null
                }

              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default OrderDetail;
