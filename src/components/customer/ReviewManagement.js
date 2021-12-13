import React, { useState, useEffect } from "react";
import "../../css/customer/reviewManagement.css";
import userApi from "../../api/userApi";
import "../../css/customer/noOrder.css";
import { timeFormat } from "../../utils/dateUtils";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function ReviewManagement() {
  const [review, setReview] = useState([]);
  const history = useHistory();
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
    <section className="orderHistory">
      <div className="body-content">
        <h1>Đánh giá của bạn</h1>
        <div className="account-layout">
          <div className="row equaHeight" data-obj=".col .box-bg-white">
            <div className="col col-lg">
              <div className="box-bg-white">
                <div className="not-found-list">
                  <a>
                    <img
                      src="http://res.cloudinary.com/dobsh4rbw/image/upload/v1639404561/commom/noReview121321090831.png"
                      alt="not-found-list"
                    />
                  </a>
                  <p>Bạn chưa có đánh giá nào</p>
                  <span>
                    Hãy mua hàng và cho cửa hàng cảm nhận về trải nghiệm của bạn
                    nhé.
                  </span>
                  <button
                    className="button_direct"
                    onClick={() => history.push("/")}
                  >
                    Về trang chủ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                              <td>{timeFormat(item.reviewTime)}</td>
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
