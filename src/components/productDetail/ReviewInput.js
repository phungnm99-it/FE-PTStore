import React from "react";

function ReviewInput() {
  return (
    <div>
      <div className="rc-form review-form">
        <div className="rc-form comment-form">
          <div className="row">
            <div className="col">
              <div className="control">
                <textarea
                  title="Nội dung"
                  placeholder="Nội dung đánh giá (tối thiểu 20 ký tự)"
                  name="Content"
                  spellCheck="false"
                  data-required="1"
                  data-minlength="20"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-end">
              <button type="submit">Gửi bình luận</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewInput;
