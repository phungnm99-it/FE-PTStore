import React from "react";
import "../../css/Feedback.css";

function Feedback() {
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
                                asp-controller="Home"
                                asp-action="LienHe"
                                method="post"
                              >
                                <div class="form-group col-md-6">
                                  <input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    required
                                    placeholder="Họ và tên (bắt buộc)"
                                  />
                                </div>
                                <div class="form-group col-md-6">
                                  <input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    required
                                    placeholder="Số điện thoại (bắt buộc)"
                                  />
                                </div>
                                <div class="form-group col-md-12">
                                  <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    required
                                    placeholder="Email (bắt buộc)"
                                  />
                                </div>
                                <div className="form-group col-md-12">
                                  <select
                                    name="dataTable_length"
                                    aria-controls="dataTable"
                                    className="selectTopic"
                                  >
                                    <option value="-1">Chọn chủ đề</option>
                                    <option value="1">Tư vấn</option>
                                    <option value="2">
                                      Khiếu nại - phản ánh
                                    </option>
                                    <option value="3">Hợp tác</option>
                                    <option value="4">Góp ý cải tiến</option>
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
                                    <button type="submit">GỬI GÓP Ý</button>
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
