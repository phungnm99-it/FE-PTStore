import React, { useState, useEffect } from 'react';
import "../../css/shipper/OrderReceived.css"
import Modal from "react-modal";
import OrderDetail from '../customer/orderDetail/OrderDetail';
import {customStyles} from "../../utils/cssUtils"
import OrderItem from './OrderItem';
function OrderReceived () {
    const [model, setModel] = useState(false);
    const [orders, setOrders] = useState([]);
    const [noOder, setNoOrder] = useState([]);
    return (
        <div>
            <div className="orderReceived">
            <h4>ĐƠN HÀNG ĐANG THEO DÕI</h4>
                <OrderItem/>
                <OrderItem/>
            </div>
            <Modal isOpen={model} style={customStyles}>
                <OrderDetail onCLose={() => setModel(false)} />
            </Modal>
        </div>
    );
}

export default OrderReceived;