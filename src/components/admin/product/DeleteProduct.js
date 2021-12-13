import React from "react";
import "../../../css/admin/product/DeleteProduct.css";

function DeleteProduct(props) {
  return (
    <div>
      <div className="deleteProduct">
        <div className="jquery-modal blocker current">
          <div className="container modal modal-deleteAccount">
            <div className="deleteAccount-form">
              <img
                alt="iconClose"
                className="icon-close"
                src="http://res.cloudinary.com/dobsh4rbw/image/upload/v1639402353/commom/iconClose121321083143.png"
                onClick={() => props.onCLose()}
              />
              <div className="form">
                <p>Xác nhận KHÓA sản phẩm có mã NH5ISDO?</p>
                <h6>
                  Sau khi thực hiện thao tác Khóa, sản phẩm sẽ bị khóa và không
                  hiển thị trên trang người dùng.
                </h6>
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
    </div>
  );
}

export default DeleteProduct;
