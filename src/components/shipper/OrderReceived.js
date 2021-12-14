import React, { useState, useEffect } from "react";
import "../../css/shipper/OrderReceived.css";
import OrderItem from "./OrderItem";
import orderApi from "../../api/orderApi";
function OrderReceived() {
  const [model, setModel] = useState(false);
  const [orders, setOrders] = useState([]);
  const [noOder, setNoOrder] = useState([]);

  useEffect(() => {
    orderApi.getOrderDeliveringByShipper().then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div>
      <div className="orderReceived">
        <h4>ĐƠN HÀNG ĐANG GIAO</h4>
        {orders.map((item, index) => {
          return <OrderItem key={index} detail={item} />;
        })}
      </div>
    </div>
  );
}

export default OrderReceived;
