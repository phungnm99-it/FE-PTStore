import React from "react";

function StatusOD(props) {
  if (props.status === 0) return null;
  else
    return (
      <div className="status-orderDetail">
        <div className="row px-3">
          <div className="col">
            <ul id="progressbar">
              <li
                className={"step0" + (props.status >= 1 ? " active" : "")}
                id="step1"
              >
                Đặt thành công
              </li>
              <li
                className={
                  "step0 text-center" + (props.status >= 2 ? " active" : "")
                }
                id="step2"
              >
                Đã xác nhận
              </li>
              <li
                className={
                  "step0 text-center" + (props.status >= 3 ? " active" : "")
                }
                id="step3"
              >
                Đang giao hàng
              </li>
              <li
                className={
                  "step0 text-muted text-right" +
                  (props.status >= 4 ? " active" : "")
                }
                id="step4"
              >
                Giao thành công
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default StatusOD;
