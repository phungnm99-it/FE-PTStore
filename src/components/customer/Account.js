import React, { Component } from "react";
import "../../css/customer/account.css";

import OrderHistory from "./OrderHistory";
import AccountInfo from "./AccountInfo";
import { Link } from "react-router-dom";
import Feedback from "./Feedback";
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { form: 0 };
  }
  inputFile = null;

  switchRender = () => {
    switch (this.state.form) {
      case 0:
        return <AccountInfo />;
      case 2:
        return <OrderHistory />;
      case 4:
        return <Feedback />;
      default:
        return null;
    }
  };
  formChoose(n) {
    this.setState({
      form: n,
    });
  }
  selectFile() {
    this.inputFile.click();
  }

  render() {
    return (
      <div id="top">
        <section className="account">
          <div className="sidebar">
            <div className="ctn">
              <div className="header">
                <div class="info">
                  <div class="avt" id="myAvatar">
                    <strong>T</strong>
                  </div>

                  <div class="summer">
                    <p>
                      <strong>Tien Phan Nguyen Thụy</strong>
                    </p>
                    <p class="change-avatar" onClick={() => this.selectFile()}>
                      <i class="icon-change-avatar"></i> Thay đổi ảnh đại diện
                    </p>
                    <input
                      type="file"
                      name="upfile"
                      id="avtImage"
                      accept="image/*"
                      ref={(ref) => (this.inputFile = ref)}
                    />
                  </div>
                </div>
              </div>

              <nav>
                <ul>
                  <li onClick={() => this.formChoose(0)}>
                    <a
                      className={this.state.form === 0 && "activeTab"}
                      href="#info"
                    >
                      <i className="fas fa-user"></i>
                      <span>Thông tin tài khoản</span>
                    </a>
                  </li>
                  <li onClick={() => this.formChoose(2)}>
                    <a
                      className={this.state.form === 2 && "activeTab"}
                      href="#order"
                    >
                      <i className="fas fa-box-open"></i>
                      <span>Đơn hàng của bạn</span>
                    </a>
                  </li>
                  <li onClick={() => this.formChoose()}>
                    <a href="#review">
                      <i className="fas fa-thumbs-up"></i>
                      <span>Quản lý đánh giá</span>
                    </a>
                  </li>
                  <li onClick={() => this.formChoose(4)}>
                    <a href="#feedback">
                      <i className="fas fa-comments-dollar"></i>
                      <span>Phản hồi, đánh giá</span>
                    </a>
                  </li>
                  <li>
                    <Link to="/home/logout">
                      <i class="fas fa-sign-out-alt"></i>
                      <span>Đăng xuất</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="body-content">{this.switchRender()}</div>
        </section>
      </div>
    );
  }
}

export default Account;
