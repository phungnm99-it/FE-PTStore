import React from "react";
import "../../css/productDetail/Review.css";
import ReviewContent from "./ReviewContent";
import ReviewInput from "./ReviewInput";
import { useParams } from "react-router";
import { useState } from "react";
import productApi from "../../api/productApi";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../AuthContext";

function Review() {
  const { id } = useParams();
  const context = useContext(AuthContext);
  const [review, setReview] = useState([]);
  const [canReview, setCanReview] = useState([]);
  useEffect(() => {
    getReview();
    checkCanReview();
  }, [id]);

  const getReview = () => {
    productApi.getReviewByProductId(id).then((response) => {
      setReview(response.message);
    });
  };

  const checkCanReview = () => {
    if (context.user) {
      console.log("login");
      productApi.checkCanReview(id).then((response) => {
        if (response.code === 200) setCanReview([{ index: 1 }]);
      });
    }
  };
  return (
    <div>
      <div className="product-review">
        <form id="reviewForm">
          <div className="heading">
            <h3>Đánh giá sản phẩm</h3>
          </div>
          {canReview.map((item) => {
            return <ReviewInput key={item.index} />;
          })}
        </form>
        {review.map((item, index) => {
          return (
            <ReviewContent
              key={index + 1}
              userName={item.userName}
              imageUrl={item.imageUrl}
              content={item.content}
              reviewTime={item.reviewTime}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Review;
