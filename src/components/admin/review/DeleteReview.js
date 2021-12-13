import React, { Component } from "react";
import "../../../css/admin/review/DeleteReview.css";
function DeleteReview(props) {
  return (
    <div>
      <div className="deleteReview">
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
                <p>Xác nhận KHÓA đánh giá có mã NH5ISDO?</p>
                <h6>
                  Sau khi thực hiện thao tác Khóa, đánh giá sẽ bị khóa và ẩn
                  khỏi phần đánh giá sản phẩm của người dùng.
                </h6>
                <div className="row">
                  <div className="mb-3 pull-right btn-group-Delete">
                    <button className="btn btn-primary btn-color btn-Cancel">
                      Hủy
                    </button>
                    <button className="btn btn-primary btn-color">Khóa</button>
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

export default DeleteReview;
