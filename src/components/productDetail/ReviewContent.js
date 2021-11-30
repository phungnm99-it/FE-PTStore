import React from "react";
import noAvt from "../../images/no-avt.png";
import "../../css/productDetail/ReviewContent.css";

function ReviewContent() {
  return (
    <div>
      <div className="review-content" id="reviewContent">
        <div className="item">
          <div className="avt">
            <img src={noAvt} alt="noAvt" />
          </div>
          <div className="info">
            <p
              itemProp="author"
              itemType="http://schema.org/Person"
              itemScope=""
            >
              <strong className="name" itemProp="name" content="Fred Benson">
                Tien
              </strong>
            </p>
            <p>
              <label>
                <i>4 ngày trước</i>
              </label>
            </p>
            <div className="content">
              San pham tot, thai do nhiet tinh
              <br />
            </div>
            {/* <div className="childs">
                                <div className="replyHolder replyReviewHolder">
                                    <input type="text" placeholder="Nhập bình luận của bạn"/>
                                    <button><i className="fa fa-reply"></i></button>
                                </div>
                            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewContent;
