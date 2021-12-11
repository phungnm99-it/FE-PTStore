import React from "react";
import "../../css/common/Footer.css";
import subscriberApi from "../../api/subscriberApi";
function Footer() {
  const handleSubscriber = (e) => {
    e.preventDefault();
    let email = document.getElementById("inputemail").value;
    let regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "" || regex.test(email) === false) {
      alert("Email không hợp lệ!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      subscriberApi.add(formData).then((res) => {
        if (res.code === 401) {
          alert("Đăng ký nhận thông tin không thành công!");
        } else {
          alert("Đăng ký nhận thông tin thành công!");
        }
      });
    }
  };
  return (
    <div className="footer">
      <div className="footer-widget">
        <div className="container">
          <div className="row">
            {/* <div className="col-sm-3">
            <div className="single-widget">
              <h2>Sản Phẩm</h2>
              <ul className="nav nav-pills nav-stacked"></ul>
            </div>
          </div> */}
            <div className="col-sm-7">
              <div className="single-widget">
                {/* <h2>Thông tin cửa hàng</h2> */}
                <ul className="nav nav-pills nav-stacked text-color">
                  <li>
                    <h4>PT STORE</h4>
                  </li>
                  <li>
                    Số 1 Võ Văn Ngân phường Linh Chiểu quận Thủ Đức thành phố Hồ
                    Chí Minh
                  </li>
                  <li>SĐT: 0858679912 - Email: ptstore.kltn@gmail.com</li>
                  <li>
                    Hoạt động: 8:00 AM - 10:00 PM Tất cả các ngày trong tuần
                  </li>
                </ul>
                <br />
              </div>
            </div>
            {/* <div class="col-sm-2">
                                <div class="single-widget">
                                    <h2>Theo dõi chúng tôi </h2>
                                    <ul class="nav nav-pills nav-stacked">
                                        <li><a href="#"><i class="fa fa-facebook"></i>Facebook</a></li>
                                        <li><a href="#"><i class="fa fa-instagram"></i>Instagram</a></li>
                                        <li><a href="#"><i class="fa fa-google-plus"></i>Google</a></li>
                                    </ul>
                                </div>
                            </div> */}
            <div className="col-sm-5">
              <div className="single-widget">
                {/* <h2>Theo dõi Cửa hàng</h2> */}
                <div className="searchform">
                  <input
                    className="inputEmail"
                    type="email"
                    id="inputemail"
                    name="email"
                    required
                    placeholder="Email của bạn"
                  />
                  <button
                    onClick={(e) => handleSubscriber(e)}
                    className="btnSend"
                  >
                    <i className="far fa-paper-plane"></i>
                  </button>
                  <h5>
                    Đăng ký để nhận những chương trình khuyến mãi hot nhất từ
                    cửa hàng!
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
