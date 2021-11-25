import React, { useState } from "react";
import "../../css/admin/Menu.css";
import Header from "./common/Header";
import DropDown from "./common/DropDown";
import AccountAdmin from "./account/AccountAdmin";
import AccountUser from "./account/AccountUser";
import AccountShipper from "./account/AccountShipper";
import LockedAccount from "./account/LockedAccount";
import AddAccount from "./account/AddAccount";
import EditAccount from "./account/EditAccount";
import DetailAccount from "./account/DetailAccount";

function Admin() {
  const [form, setForm] = useState();
  let inputFile = null;

  const switchRender = () => {
    switch (form) {
      case 0:
        return;
      case 1:
        return <AccountAdmin switch={(e) => setForm(e)} />;
      case 2:
        return <AccountUser switch={(e) => setForm(e)} />;
      case 3:
        return <AccountShipper switch={(e) => setForm(e)} />;
      case 4:
        return <LockedAccount />;
      case 5:
        return <AddAccount />;
      case 6:
        return <EditAccount />;
      case 7:
        return <DetailAccount />;
      case 8:
        return;
      default:
        return null;
    }
  };

  // setForm(n) {
  //   setState({
  //     form: n,
  //   });
  // }
  const selectFile = () => {
    inputFile.click();
  };
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
                      <i className="fas fa-tachometer-alt nav-icon"></i>
                      Trang chủ
                    </a>
                  </li>
                  <li className="nav-title">Theme</li>

                  <DropDown
                    name="Quản lý Tài khoản"
                    icon="fas fa-user-cog nav-icon"
                    subNav={[
                      {
                        name: "Tài khoản Admin",
                        icon: "fas fa-user-circle nav-icon",
                        link: "",
                        formChoose: () => setForm(1),
                      },
                      {
                        name: "Tài khoản User",
                        icon: "fas fa-user-circle nav-icon",
                        link: "",
                        formChoose: () => setForm(2),
                      },
                      {
                        name: "Tài khoản Shipper",
                        icon: "fas fa-user-circle nav-icon",
                        link: "",
                        formChoose: () => setForm(3),
                      },
                      {
                        name: "Tài khoản đã khóa",
                        icon: "fas fa-user-circle nav-icon",
                        link: "",
                        formChoose: () => setForm(4),
                      },
                    ]}
                  />
                  <li className="nav-item" onClick={() => setForm(5)}>
                    <a className="nav-link active btn-focus">
                      <i className="fas fa-tachometer-alt nav-icon"></i>
                      Quản lý Thương hiệu
                    </a>
                  </li>
                  <DropDown
                    name="Quản lý Sản phẩm"
                    icon="fas fa-user-cog nav-icon"
                    subNav={[
                      {
                        name: "Thông tin sản phẩm",
                        icon: "fas fa-user-circle nav-icon",
                        link: "",
                        formChoose: () => setForm(),
                      },
                      {
                        name: "Quản lý Giá sản phẩm",
                        icon: "fas fa-user-circle nav-icon",
                        link: "",
                        formChoose: () => setForm(),
                      },
                      {
                        name: "Quản lý Số lượng",
                        icon: "fas fa-user-circle nav-icon",
                        link: "",
                        formChoose: () => setForm(),
                      },
                    ]}
                  />
                  <li className="nav-item" onClick={() => setForm(4)}>
                    <a className="nav-link active btn-focus">
                      <i className="fas fa-box-open nav-icon"></i>
                      Quản lý Đơn hàng
                    </a>
                  </li>
                  <li className="nav-item" onClick={() => setForm(5)}>
                    <a href="#" className="nav-link active btn-focus">
                      <i className="fas fa-thumbs-up nav-icon"></i>
                      Quản lý Đánh giá
                    </a>
                  </li>
                  <li className="nav-item" onClick={() => setForm(6)}>
                    <a href="#" className="nav-link active btn-focus">
                      <i className="fas fa-comments-dollar nav-icon"></i>
                      Quản lý Góp ý
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link active btn-focus">
                      <i className="fas fa-bell nav-icon"></i>
                      Quản lý Subscriber
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
          <div className="bodyMain">{switchRender()}</div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
