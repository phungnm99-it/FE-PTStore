import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import orderApi from "../../api/orderApi";
import "../../css/shipper/OderItem.css";
import { customStyles } from "../../utils/cssUtils";
import { timeFormatDetail } from "../../utils/dateUtils";
import { priceFormat } from "../../utils/priceFormat";
import OrderDetail from "./OrderDetail";
import { useHistory } from "react-router-dom";

function OrderItem(props) {
  const history = useHistory();
  const [details, setDetails] = useState({});
  console.log(props.detail);
  const [model, setModel] = useState(false);

  const handleDeliverSubmit = (e) => {
    e.preventDefault();

    if (window.confirm("Bạn muốn nhận đơn này?")) {
      orderApi.deliverOrderByShipper(props.detail.id).then((res) => {
        if (res.code === 200) {
          alert("Nhận đơn hàng thành công!");
          history.push("/shipper");
        } else {
        }
      });
    }
  };

  const handleCompleteOrderSubmit = (e) => {
    e.preventDefault();

    if (window.confirm("Bạn đã giao đơn hàng này thành công?")) {
      orderApi.completeOrderByShipper(props.detail.id).then((res) => {
        if (res.code === 200) {
          alert("Xác nhận thành công!");
          history.push("/shipper");
        } else {
        }
      });
    }
  };

  return (
    <div>
      <div className="orderItem">
        <div className="orderItem-form">
          <div className="row">
            <div className="col-sm-8">
              <div className="left-OrderItem">
                <p className="textIDOrder" onClick={() => {
                                    setDetails(props.details);
                                    setModel(true);}}>
                  {props.detail.orderCode}
                </p>
                <p className="labelOrder">
                  Ngày đặt:
                  <span className="textOrder">
                    {timeFormatDetail(props.detail.orderTime || new Date())}
                  </span>
                </p>
                <p className="labelOrder">
                  Tên khách hàng:
                  <span className="textOrder">{props.detail.name}</span>
                </p>
                <p className="labelOrder">
                  Giao đến:
                  <span className="textOrder">{props.detail.address}</span>
                </p>
                <p className="labelOrder">
                  Tổng đơn:
                  <span className="textOrder">
                    {priceFormat(props.detail.totalCost || 0)}
                  </span>
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="right-OrderItem">
                {/* <p className="labelTimeOrder">4 giờ trước</p> */}
                {props.detail.status === "2" ? (
                  <button
                    className="btn-accept"
                    onClick={(e) => handleDeliverSubmit(e)}
                  >
                    Nhận đơn
                  </button>
                ) : (
                  <button
                    onClick={(e) => handleCompleteOrderSubmit(e)}
                    className="btn-complete"
                  >
                    Giao thành công
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={model} style={customStyles}>
        <OrderDetail bill={details} onCLose={() => setModel(false)} />
      </Modal>
    </div>
  );
}

export default OrderItem;
