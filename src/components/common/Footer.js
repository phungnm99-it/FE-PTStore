import React from "react";
import "../../css/common/Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="single-widget">
                  <h2>Sản Phẩm</h2>
                  <ul className="nav nav-pills nav-stacked"></ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single-widget">
                  <h2>Thông tin cửa hàng</h2>
                  <ul className="nav nav-pills nav-stacked text-color">
                    <li>Cửa Hàng Điện Thoại PT</li>
                    <li>
                      Số 1 Võ Văn Ngân phường Linh Chiểu quận Thủ Đức thành phố
                      Hồ Chí Minh
                    </li>
                    <li>SĐT: 0858679912</li>
                    <li>Email: ptstore@gmail.com</li>
                    <li>Thời gian hoạt động: 8:00AM - 10:00PM</li>
                    <li>Tất cả các ngày trong tuần</li>
                  </ul>
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
                  <h2>Theo dõi Cửa hàng</h2>

                  <form method="post" className="searchform">
                    <input
                      className="inputEmail"
                      type="email"
                      id="inputemail"
                      name="email"
                      required
                      placeholder="Email của bạn"
                    />
                    <button type="submit" className="btnSend">
                      <i className="far fa-paper-plane"></i>
                    </button>
                    <p>
                      Đăng ký để nhận những chương trình khuyến mãi hot nhất từ
                      cửa hàng.
                    </p>
                  </form>
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
