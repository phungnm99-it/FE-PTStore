import React from 'react';
import orderApi from '../../../api/orderApi';
import "../../../css/admin/order/ModalChangeStatus.css"
function ModalChangeStatus (props) {
    const handleVerifyOrder = (e) => {
        e.preventDefault();
    
        if (window.confirm("Bạn muốn xác nhận đơn hàng " + e.target.id)) {
          orderApi.verifyOrderByAdmin(e.target.id).then((res) => {
            if (res.code === 200) {
              alert("Xác nhận đơn hàng thành công!");
              props.switch(38);
            } else {
              alert("Xác nhận đơn hàng thất bạn!");
            }
          });
        }
      };
    return (
        <div>
            <div className="changeStatusOrder">
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
                        <p>Đơn hàng ELFINR8999 sẽ thay đổi trạng thái sang: Đã xác nhận </p>
                        
                        <div className="row">
                        <div className="mb-3 pull-right btn-group-Delete">
                            <button
                            type="submit"
                            className="btn btn-primary btn-Cancel"
                            >
                            Hủy
                            </button>
                            <button type="submit" className="btn btn-primary btn-color" onClick={(e) => handleVerifyOrder(e)}>
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

export default ModalChangeStatus;