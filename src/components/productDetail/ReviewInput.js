import React from "react";
import { useParams } from "react-router-dom";
import reviewApi from "../../api/reviewApi";

function ReviewInput() {
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    let content = document.getElementById("content").value;
    if (content === "" || content.length < 20)
      alert("Nội dung phải chứa ít nhất 20 kí tự!");
    else {
      let formData = new FormData();
      formData.append("ProductId", id);
      formData.append("Content", content);
      reviewApi.create(formData).then((res) => {
        if (res.code === 401) {
          alert("Review thất bại, vui lòng thử lại sau");
        } else {
          alert("Review thành công!");
        }
      });
    }
  };
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
                  id="content"
                  spellCheck="false"
                  data-required="1"
                  data-minlength="20"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-end">
              <button onClick={(e) => handleSubmit(e)}>Gửi bình luận</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewInput;
