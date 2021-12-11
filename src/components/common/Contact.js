import React from "react";
import feedbackApi from "../../api/feedback";
import "../../css/common/Contact.css";
import { useHistory } from "react-router-dom";

function Contact() {
  const history = useHistory();
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
              history.push("/");
            }
          });
        }
      }
    }
  };
  return (
    <div>
      <div className="feedback">
        <div className="container">
          <div id="contact-page" className="container background">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-8 background">
                  <div className="contact-form">
                    <h2 className="title text-center">
                      PT-STORE XIN TRÂN TRỌNG PHỤC VỤ QUÝ KHÁCH
                    </h2>

                    <form
                      id="main-contact-form"
                      className="contact-form row"
                      asp-controller="Home"
                      asp-action="LienHe"
                      method="post"
                    >
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="phone"
                          id="fullName"
                          className="form-control"
                          required
                          placeholder="Họ và tên (bắt buộc)"
                        />
                      </div>
                      {/* <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          required
                          placeholder="Số điện thoại (bắt buộc)"
                        />
                      </div> */}
                      <div className="form-group col-md-12">
                        <input
                          type="email"
                          name="email"
                          id="email"
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
                          <option value="Góp ý cải tiến">Góp ý cải tiến</option>
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
                <div className="col-sm-4">
                  <div className="contact-info">
                    <h2 className="title text-center ">
                      Thông tin của chúng tôi
                    </h2>
                    <address>
                      <p>Cửa Hàng Điện Thoại PT</p>
                      <p>
                        Số 1 Võ Văn Ngân phường Linh Chiểu quận Thủ Đức TPHCM
                      </p>
                      <p>SĐT: 0858679912</p>
                      <p>Email: ptstore.kltn@gmail.com</p>
                      <p>Thời gian hoạt động: 8:00AM - 10:00PM</p>
                    </address>
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

export default Contact;
