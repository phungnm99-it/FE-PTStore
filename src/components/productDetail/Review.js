import React from "react";
import "../../css/productDetail/Review.css";
import ReviewContent from "./ReviewContent";
import ReviewInput from "./ReviewInput";

function Review() {
  return (
    <div>
      <div className="product-review">
        <form id="reviewForm">
          <div className="heading">
            <h3>Đánh giá sản phẩm</h3>
          </div>
          <ReviewInput />
        </form>
        <ReviewContent />
      </div>
    </div>
  );
}

export default Review;
