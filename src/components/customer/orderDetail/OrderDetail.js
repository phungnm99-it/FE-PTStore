import React, { useEffect } from "react";
import "../../../css/common/orderDetail.css";
import HeadOD from "./HeadOD";
import BodyOD from "./BodyOD";
import StatusOD from "./StatusOD";
import CancelOD from "./CancelOD";

function OrderDetail(props) {
  useEffect(() => {
    console.log(props.bill);
  }, [props]);
  return (
    <div>
      <div className="orderDetail">
        <div className="jquery-modal blocker current">
          <div className="container modal modal-orderDetail">
            <div className="orderSuccess-form">
              <img
                alt="iconClose"
                className="icon-close"
                src="http://res.cloudinary.com/dobsh4rbw/image/upload/v1639402353/commom/iconClose121321083143.png"
                onClick={() => props.onCLose()}
              />
              <div className="form">
                <HeadOD status={props.bill} />
                <StatusOD status={parseInt(props.bill.status)} />
                {props?.bill?.products
                  ? props.bill.products.map((item, idx) => {
                      return <BodyOD product={item} />;
                    })
                  : null}
                <CancelOD/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
