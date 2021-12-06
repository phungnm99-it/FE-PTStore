import React, { useState, useEffect } from "react";
import "../../css/customer/reviewManagement.css";
import userApi from "../../api/userApi";
function ReviewManagement() {
  const [review, setReview] = useState([]);
  useEffect(() => {
    getReview();
  }, []);

  const getReview = () => {
    userApi.getReview().then((res) => {
      if (res.data !== null) {
        setReview(res.data);
      }
    });
  };

  return review.length === 0 ? (
    <div>Chưa có đánh giá</div>
  ) : (
    <div>
      <section className="reviewHistory">
        <div className="body-content">
          <h1>Đánh giá của bạn</h1>
          <div className="account-layout">
            <div className="row equaHeight" data-obj=".col .box-bg-white">
              <div className="col col-lg">
                <div className="box-bg-white">
                  <div className="box-order">
                    <table className="table table-striped table-bordered dataTable">
                      <thead>
                        <tr role="row">
                          <th className="sorting" id="ReviewHistory-ProductCol">
                            Tên sản phẩm
                          </th>
                          <th className="sorting" id="ReviewHistory-DateCol">
                            Thời gian đánh giá
                          </th>
                          <th className="sorting" id="ReviewHistory-ContentCol">
                            Nội dung đánh giá
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {review.map((item) => {
                          return (
                            <tr key={item.id}>
                              <td>{item.productName}</td>
                              <td>
                                {new Date(item.reviewTime).toDateString()}
                              </td>
                              <td>{item.content}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewManagement;
