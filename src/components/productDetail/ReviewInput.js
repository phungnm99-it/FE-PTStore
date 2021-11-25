import React from "react";

function ReviewInput() {
  return (
    <div>
      <div className="rc-form review-form">
        <div className="rc-form comment-form">
          {/* <div className="row">
                                            <div className="col">
                                                        <div className="control">
                                                            <input type="text" name="Title" placeholder="Họ tên (bắt buộc)" data-required="1"/>
                                                        </div>
                                            </div>
                                            <div className="col">
                                                <div className="control">
                                                    <input type="tel" name="Phone" placeholder="Điện thoại (bắt buộc)"/>
                                                </div>
                                            </div>
                                                    
                                            <div className="col">
                                                <div className="control">
                                                    <input type="email" name="Email" placeholder="Email (không bắt buộc)"/>
                                                </div>
                                            </div>
                                        </div> */}
          <div className="row">
            <div className="col">
              <div className="control">
                <textarea
                  title="Nội dung"
                  placeholder="Nội dung đánh giá (tối thiểu 20 ký tự)"
                  name="Content"
                  spellcheck="false"
                  data-required="1"
                  data-minlength="20"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="row">
            {/* <div className="col">
                                <p className="note">Để gửi bình luận đánh giá sản phẩm, bạn vui lòng nhập đầy đủ thông tin.</p>
                            </div> */}
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
