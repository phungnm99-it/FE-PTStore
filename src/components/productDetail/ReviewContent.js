import React from "react";
import "../../css/productDetail/ReviewContent.css";
import { timeFormatDetail } from "../../utils/dateUtils";

function ReviewContent(item) {
  if (!item) {
    return <div>{"Chưa có đánh giá"}</div>;
  } else {
    return (
      <div>
        <div className="review-content" id="reviewContent">
          <div className="item">
            <div className="avt">
              <img
                src={
                  item.imageUrl ||
                  "http://res.cloudinary.com/dobsh4rbw/image/upload/v1639403956/commom/no-avt121321085832.png"
                }
                alt="noAvt"
              />
            </div>
            <div className="info">
              <p
                itemProp="author"
                itemType="http://schema.org/Person"
                itemScope=""
              >
                <strong className="name" itemProp="name" content="Fred Benson">
                  {item.userName}
                </strong>
              </p>
              <p>
                <label>
                  <i>{timeFormatDetail(item.reviewTime ?? 0)}</i>
                </label>
              </p>
              <div className="content">
                {item.content}
                <br />
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}

export default ReviewContent;
