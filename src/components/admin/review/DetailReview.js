import React from "react";
import "../../../css/admin/review/DetailReview.css";
import { timeFormat } from "../../../utils/dateUtils";
function DetailReview(props) {
  return (
    <div className="detailReview">
      <div className="title-addAccount">
        <h2>Thông tin chi tiết đánh giá</h2>
      </div>
      <div className="form">
        <div className="body-detailReview">
          <div className="row">
            <div className="col-sm-12">
              <div className="media-body">
                <div className="col-sm-5">
                  <div className="list-left">
                    <ul className="nav">
                      <li>Mã đánh giá:</li>
                      <li>Tên sản phẩm:</li>
                      <li>Mã tài khoản:</li>
                      <li>Họ và tên:</li>

                      <li>Thời gian đánh giá:</li>
                      <li>Nội dung đánh giá:</li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="list-right">
                    <ul className="nav">
                      <li>{props.review.id}</li>
                      <li>{props.review.productName}</li>
                      <li>{props.review.userId}</li>
                      <li>{props.review.userName}</li>
                      <li>{timeFormat(props.review.reviewTime)}</li>
                      <li>{props.review.content}</li>
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => props.switch(18)}
                  className="btn btn-primary btn-color btn-comeback"
                >
                  Quay trở lại danh sách
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailReview;
