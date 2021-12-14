import React, { useEffect, useState } from "react";
import { priceFormat } from "../../utils/priceFormat";
import "../../css/shipper/OrderDetail.css";
import { timeFormatDetail } from "../../utils/dateUtils";
import orderApi from "../../api/orderApi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function OrderDetail(props) {
  console.log(props.bill);
  const history = useHistory();
  const [status, setStatus] = useState(props.bill.status || 2);
  const changeStatus = (status, index) => {
    let newStatus = status + index;
    setStatus(newStatus > 1 && newStatus <= 4 ? newStatus : status);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("Bạn chắc chắn muốn huỷ đơn?")) {
      orderApi.cancelByUser(props.id).then((res) => {
        if (res.code === 200) {
          alert("Huỷ đơn hàng thành công!");
          history.push("/");
        } else {
          alert("Huỷ đơn không thành công!");
        }
      });
    }
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
                <div
                  className="headerOrderDetailShipper"
                  
                >
                  <p className="text-muted">
                    {" "}
                    Mã đơn hàng{" "}
                    <span className="font-weight-bold text-dark">
                      {props.bill?.orderCode}
                    </span>
                  </p>
                  <p className="text-muted">
                    {" "}
                    Ngày đặt{" "}
                    <span className="font-weight-bold text-dark">
                      {timeFormatDetail(props.bill.orderTime ?? 0)}
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
                          Đặt thành công
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

                {props?.bill?.products
                  ? props.bill.products.map((item, idx) => {
                      return (
                        <div className="bodyOrderDetailShipper">
                          <div className="row">
                            <div className="col-sm-8 ">
                              <h5 className="bold">{item.productName}</h5>
                              <p className="text-muted">
                                {" "}
                                Số lượng: {item.quantity}
                              </p>
                              <h4 className="mt-3 mb-4 bold">
                                <strong>
                                  {priceFormat(item.price || 0)}
                                </strong>
                              </h4>
                            </div>
                            <div className="col-sm-4">
                              <img
                                alt="product"
                                className="align-self-center img-fluid"
                                src={item.imageUrl}
                              />{" "}
                            </div>
                          </div>
                        </div>
                      )
                    })
                  : null}

                {props.bill.status === "3" ? <div className="cancel-orderDetail">
                    <button onClick={(e) => handleSubmit(e)} className="btnCancel">
                      Hủy đơn hàng
                    </button>
                </div> : null}
                
                  

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
