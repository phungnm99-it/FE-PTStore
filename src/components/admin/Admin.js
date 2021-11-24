import React, { Component } from "react";
import "../../css/admin/Menu.css";
import Header from "./common/Header";
import Account from "./account/Account";
import Brand from "./brand/Brand";
import DropDown from "./common/DropDown";
import Product from "./product/Product";
import Review from "./review/Review";
import Order from "./order/Order";
import Feedback from "./Feedback";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { form: 0 };
  }
  inputFile = null;

  switchRender = () => {
    switch (this.state.form) {
      case 0:
        return <Account />;
      case 2:
        return <Brand />;
      case 3:
        return <Product />;
      case 4:
        return <Order />;
      case 5:
        return <Review />;
      case 6:
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
      <section className="pageAdmin">
        <div className="account">
          <div className="menuAdmin">
            <div className="sidebar">
              <div className="ctn">
                <div class="header">
                  <div class="info">
                    <div class="avt" id="myAvatar">
                      <strong>T</strong>
                    </div>
                    <div class="summer">
                      <p>
                        <strong>Tien Phan Nguyen Thụy</strong>
                      </p>
                      <p class="change-avatar">
                        <i class="icon-change-avatar"></i> Thay đổi ảnh đại diện
                      </p>
                      <input
                        type="file"
                        name="upfile"
                        id="avtImage"
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
                <nav>
                  <ul>
                    <li className="nav-item">
                      <a href="#" className="nav-link active">
                        <i className="fal fa-tachometer-alt-slow nav-icon"></i>
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-title">Theme</li>
                    {/* <li className="nav-item">
                                            <div className="DropDownFrame">
                                            
                                            <SideNavDropdown/>
                                                <Link to = "/admin/home/addAccount"><DropDown key="dropdown" title="Tài khoản" link={[{name: 'Tài khoản Admin', url: ''},{name: 'Tài khoản User', url: ''},{name: 'Tài khoản đã khóa', url: ''}]}/></Link>
                                            </div> 
                                        </li> */}

                    <DropDown
                      name="Tai khoan"
                      icon="fas fa-user-circle nav-icon"
                      subNav={[
                        {
                          name: "thg con 1",
                          icon: "fas fa-user-circle nav-icon",
                          link: "",
                          formChoose: () => this.formChoose(0),
                        },
                        {
                          name: "thg con 3",
                          icon: "fas fa-user-circle nav-icon",
                          link: "",
                          formChoose: () => this.formChoose(3),
                        },
                        {
                          name: "thg con 3",
                          icon: "fas fa-user-circle nav-icon",
                          link: "",
                          formChoose: () => this.formChoose(3),
                        },
                      ]}
                    />
                    <li className="nav-item" onClick={() => this.formChoose(2)}>
                      <a href="#" className="nav-link active btn-focus">
                        <i className="fal fa-tachometer-alt-slow nav-icon"></i>
                        Thương hiệu
                      </a>
                    </li>
                    <li className="nav-item" onClick={() => this.formChoose(3)}>
                      <a href="#" className="nav-link active btn-focus">
                        <i class="fad fa-mobile-android-alt nav-icon"></i>
                        Điện thoại
                      </a>
                    </li>
                    <li className="nav-item" onClick={() => this.formChoose(4)}>
                      <a href="#" className="nav-link active btn-focus">
                        <i className="fad fa-box-open nav-icon"></i>
                        Đơn hàng
                      </a>
                    </li>
                    <li className="nav-item" onClick={() => this.formChoose(5)}>
                      <a href="#" className="nav-link active btn-focus">
                        <i className="fas fa-thumbs-up nav-icon"></i>
                        Đánh giá sản phẩm
                      </a>
                    </li>
                    <li className="nav-item" onClick={() => this.formChoose(6)}>
                      <a href="#" className="nav-link active btn-focus">
                        <i className="fas fa-comments-dollar nav-icon"></i>
                        Góp ý
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link active btn-focus">
                        <i className="fas fa-bell nav-icon"></i>
                        Subscriber
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="body-content"></div>
          </div>
          <div className="bodyAdmin">
            <Header />
            <div className="bodyMain">{this.switchRender()}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Admin;
