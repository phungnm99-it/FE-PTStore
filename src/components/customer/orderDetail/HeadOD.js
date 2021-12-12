import React from "react";
import { timeFormatDetail } from "../../../utils/dateUtils";

function HeadOD(props) {
  console.log(props.status);
  return (
    <div>
      <div className="headerOrderDetail">
        <p className="text-muted">
          {" "}
          Mã đơn hàng{" "}
          <span className="font-weight-bold text-dark">
            {props.status?.orderCode}
          </span>
        </p>
        <p className="text-muted">
          {" "}
          Ngày đặt{" "}
          <span className="font-weight-bold text-dark">
            {timeFormatDetail(props.status?.orderTime ?? 0)}
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default HeadOD;
