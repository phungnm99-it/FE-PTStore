import React from "react";
import orderApi from "../../../api/orderApi";
import "../../../css/common/orderDetail.css";
import { useHistory } from "react-router-dom";
function CancelOD(props) {
  const history = useHistory();

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
  return (
    <div>
      <div className="cancel-orderDetail">
        <button onClick={(e) => handleSubmit(e)} className="btnCancel">
          Hủy đơn hàng
        </button>
      </div>
    </div>
  );
}

export default CancelOD;
