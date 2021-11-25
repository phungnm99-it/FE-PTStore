import React from "react";

function StatusOD() {
  return (
    <div className="status-orderDetail">
      <div className="row px-3">
        <div className="col">
          <ul id="progressbar">
            <li class="step0 active " id="step1">
              Chờ xác nhận
            </li>
            <li class="step0 active text-center" id="step2">
              Đã xác nhận
            </li>
            <li class="step0 active text-center" id="step3">
              Đang giao hàng
            </li>
            <li class="step0 text-muted text-right" id="step4">
              Giao thành công
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StatusOD;
