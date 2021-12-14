import React, { useEffect, useState } from "react";
import { priceFormat } from "../../utils/priceFormat";
import "../../css/shipper/OrderDetail.css";
import { timeFormatDetail } from "../../utils/dateUtils";
function OrderDetail(props) {
  console.log(props.status);
  const [status, setStatus] = useState(props.status || 2);
  const changeStatus = (status, index) => {
    let newStatus = status + index;
    setStatus(newStatus > 1 && newStatus <= 4 ? newStatus : status);
  };
  useEffect(() => {}, [props]);

  return (
    <div>
      <div className="orderDetailShipper">
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
                <div className="headerOrderDetailShipper" status={props.bill}>
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

                <div className="status-orderDetailShipper">
                  <div className="row px-3">
                    <div className="col">
                      <i
                        className="fas fa-chevron-circle-left left"
                        onClick={() => changeStatus(status, -1)}
                      ></i>
                      <ul id="progressbar">
                        <li
                          className={"step0" + (status >= 1 ? " active" : "")}
                          id="step1"
                        >
                          Chờ xác nhận
                        </li>
                        <li
                          className={
                            "step0 text-center" + (status >= 2 ? " active" : "")
                          }
                          id="step2"
                        >
                          Đã xác nhận
                        </li>
                        <li
                          className={
                            "step0 text-center" + (status >= 3 ? " active" : "")
                          }
                          id="step3"
                        >
                          Đang giao hàng
                        </li>
                        <li
                          className={
                            "step0 text-muted text-right" +
                            (status >= 4 ? " active" : "")
                          }
                          id="step4"
                        >
                          Giao thành công
                        </li>
                      </ul>
                      <i
                        className="fas fa-chevron-circle-right right"
                        onClick={() => changeStatus(status, 1)}
                      ></i>
                    </div>
                  </div>
                </div>

                <div className="bodyOrderDetailShipper">
                  <div className="row">
                    <div className="col-sm-8 ">
                      <h5 className="bold">{props.product?.productName}</h5>
                      <p className="text-muted">
                        {" "}
                        Số lượng: {props.product?.quantity}
                      </p>
                      <h4 className="mt-3 mb-4 bold">
                        <strong>
                          {priceFormat(props.product?.price || 0)}
                        </strong>
                      </h4>
                    </div>
                    <div className="col-sm-4">
                      <img
                        alt="product"
                        className="align-self-center img-fluid"
                        src="https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-black-2.jpg"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
