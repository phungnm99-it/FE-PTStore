import React, { useEffect } from "react";
import "../../css/common/Feedback.css";
import userApi from "../../api/userApi";
import feedbackApi from "../../api/feedback";
import { useHistory } from "react-router-dom";

function Feedback() {
  const history = useHistory();
  useEffect(() => {
    userApi.getInfo().then((res) => {
      document.getElementById("fullName").value = res.data.fullName;
      document.getElementById("email").value = res.data.email;
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let fullName = document.getElementById("fullName").value;
    if (fullName === "") {
      alert("Vui lòng nhập họ và tên!");
    } else {
      let email = document.getElementById("email").value;
      if (email === "") {
        alert("Vui lòng nhập email!");
      } else {
        let content = document.getElementById("message").value;
        if (content === "") {
          alert("Vui lòng nhập nội dung!");
        } else {
          let formData = new FormData();
          formData.append("FullName", fullName);
          formData.append("Email", email);
          formData.append(
            "Topic",
            document.getElementById("dataTable_length").value
          );
          formData.append("Content", content);
          feedbackApi.create(formData).then((res) => {
            if (res.code === "401") {
              alert("Lỗi!");
            } else {
              alert("Gửi góp ý thành công!");
              history.push("/account");
            }
          });
        }
      }
    }
  };

  return (
    <div>
      <div className="feedbackForm">
        <div className="body-content">
          <h1> GÓP Ý </h1>
          <div className="account-layout">
            <div className="row equaHeight" data-obj=".col .box-bg-white">
              <div className="col col-lg">
                <div className="box-bg-white">
                  <div className="feedback-form">
                    <div id="contact-page" className="container background">
                      <div className="col-sm-12">
                        <div className="row">
                          <div className="col-sm-12 background">
                            <div className="contact-form">
                              <form
                                id="main-contact-form"
                                className="contact-form row"
                              >
                                <div class="form-group col-md-6">
                                  <input
                                    id="fullName"
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    required
                                    placeholder="Họ và tên (bắt buộc)"
                                  />
                                </div>
                                {/* <div class="form-group col-md-6">
                                  <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    className="form-control"
                                    required
                                    placeholder="Số điện thoại (bắt buộc)"
                                  />
                                </div> */}
                                <div class="form-group col-md-12">
                                  <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    required
                                    placeholder="Email (bắt buộc)"
                                  />
                                </div>
                                <div className="form-group col-md-12">
                                  <select
                                    name="dataTable_length"
                                    id="dataTable_length"
                                    aria-controls="dataTable"
                                    className="selectTopic"
                                  >
                                    <option value="Tư vấn">Chọn chủ đề</option>
                                    <option value="Tư vấn">Tư vấn</option>
                                    <option value="Khiếu nại - phản ánh">
                                      Khiếu nại - phản ánh
                                    </option>
                                    <option value="Hợp tác">Hợp tác</option>
                                    <option value="Góp ý cải tiến">
                                      Góp ý cải tiến
                                    </option>
                                  </select>
                                </div>
                                <div className="form-group col-md-12">
                                  <textarea
                                    name="message"
                                    id="message"
                                    required
                                    class="form-control"
                                    rows="8"
                                    placeholder="Vui lòng để lại lời nhắn của bạn ở đây"
                                  ></textarea>
                                </div>
                                <div className="form-controls">
                                  <div className="btn-contact">
                                    <button onClick={(e) => handleSubmit(e)}>
                                      GỬI GÓP Ý
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
