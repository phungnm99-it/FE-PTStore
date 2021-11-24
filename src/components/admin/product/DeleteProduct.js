import React from "react";
import "../../../css/admin/product/DeleteProduct.css";
import iconClose from "../../../images/iconClose.png";

function DeleteProduct() {
  return (
    <div>
      <div className="deleteProduct">
        <div className="jquery-modal blocker current">
          <div className="container modal">
            <div className="loginForm">
              <img className="icon-close" src={iconClose} />
            </div>
            <div className="form">
              <h2>Xác nhận KHÓA sản phẩm có mã NH5ISDO?</h2>
              <h4>
                Sau khi thực hiện thao tác Khóa, sản phẩm sẽ bị khóa và không
                hiển thị trên trang người dùng.
              </h4>
              <div className="row">
                <div className="mb-3 pull-right btn-group-Delete">
                  <button
                    type="submit"
                    className="btn btn-primary btn-color btn-Cancel"
                  >
                    Hủy
                  </button>
                  <button type="submit" className="btn btn-primary btn-color">
                    Khóa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
