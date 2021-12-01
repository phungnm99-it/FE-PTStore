import React from "react";
import "../../css/productDetail/Review.css";
import ReviewContent from "./ReviewContent";
import ReviewInput from "./ReviewInput";
import { useParams } from "react-router";
import { useState } from "react";
import productApi from "../../api/productApi";
import { useEffect } from "react";

function Review() {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    getReview();
  }, [id]);

  const getReview = () => {
    productApi.getReviewByProductId(id).then((response) => {
      setReview(response.message);
      console.log(response.message);
    });
  };
  return (
    <div>
      <div className="product-review">
        <form id="reviewForm">
          <div className="heading">
            <h3>Đánh giá sản phẩm</h3>
          </div>
          <ReviewInput />
        </form>
        {review.map((item, index) => {
          <ReviewContent
            key={index + 1}
            userName={item.userName}
            imageUrl={item.imageUrl}
            context={item.content}
          />;
        })}
      </div>
    </div>
  );
}

export default Review;
