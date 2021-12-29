import React from 'react';
import "../../../css/admin/order/CancelOrder.css"
import orderApi from '../../../api/orderApi';
function CancelOrder (props) {
    return (
        <div>
            <div className="cancelOrder">
                <div div className="jquery-modal blocker current">
                <div className="container modal modal-deleteAccount">
                    <div className="deleteAccount-form">
                    <img
                        alt="iconClose"
                        className="icon-close"
                        src="http://res.cloudinary.com/dobsh4rbw/image/upload/v1639402353/commom/iconClose121321083143.png"
                        onClick={() => props.onCLose()}
                    />
                    <div className="form">
                        <p>Xác nhận HỦY đơn hàng có mã RDFKI859?</p>
                        <div className="row">
                        <div className="mb-3 pull-right btn-group-Delete">
                            <button
                            onClick={() => props.onCLose()}
                            type="submit"
                            className="btn btn-primary btn-color btn-Cancel"
                            >
                            Hủy
                            </button>
                            <button type="submit" className="btn btn-primary btn-color">
                            Xác nhận
                            </button>
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

export default CancelOrder;