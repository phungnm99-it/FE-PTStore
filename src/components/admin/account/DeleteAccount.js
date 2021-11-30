import React from "react";
import "../../../css/admin/account/DeleteAccount.css";

function DeleteAccount() {
  return (
    <div>
      <div className="deleteAccount">
          <div className="form">
              <p>Xác nhận KHÓA tài khoản có mã NH5ISDO?</p>
              <h6>
                Sau khi thực hiện thao tác Khóa, tài khoản sẽ bị khóa và chuyển
                vào mục tài khoản đã khóa.
              </h6>
              <div className="row">
                <div className="mb-3 pull-right btn-group-Delete">
                  <button
                    
                    className="btn btn-primary btn-color btn-Cancel"
                  >
                    Hủy
                  </button>
                  <button  className="btn btn-primary btn-color">
                    Khóa
                  </button>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default DeleteAccount;
