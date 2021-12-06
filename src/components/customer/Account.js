import React, { Component, useEffect, useRef, useState } from "react";
import "../../css/customer/account.css";
import { useParams } from "react-router-dom";
import OrderHistory from "./OrderHistory";
import AccountInfo from "./AccountInfo";
import { Link } from "react-router-dom";
import Feedback from "./Feedback";
import ReviewManagement from "./ReviewManagement";
import userApi from "../../api/userApi";
function Account(props) {
  const { id } = useParams();
  const [form, setForm] = useState(parseInt(id) || 0);
  const [avt, setAvt] = useState(
    "https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png"
  );

  const [name, setName] = useState("");

  const inputFile = useRef(null);
  const switchRender = () => {
    switch (form) {
      case 0:
        return <AccountInfo />;
      case 2:
        return <OrderHistory />;
      case 3:
        return <ReviewManagement />;
      case 4:
        return <Feedback />;
      default:
        return null;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    userApi.getInfo().then((response) => {
      if (response.data.imageUrl !== "") {
        setAvt(response.data.imageUrl);
      }
      setName(response.data.fullName);
    });
  }, []);

  const selectFile = () => {
    // debugger
    inputFile.current.click();
  };

  const getImg = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);

    let formData = new FormData();
    formData.append("image", file);
    userApi.updateAvatar(formData).then((res) => {
      if (res.code === "200") {
        setAvt(base64);
      } else {
        alert("Lỗi!");
      }
    });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div id="top">
      <section className="account">
        <div className="sidebar">
          <div className="ctn">
            <div className="header">
              <div class="info">
                <div class="avt" id="myAvatar">
                  {/* <strong>T</strong> */}
                  <img src={avt} alt="" />
                </div>

                <div className="summer">
                  <p>
                    <strong>{name}</strong>
                  </p>
                  <p className="change-avatar" onClick={() => selectFile()}>
                    <i className="icon-change-avatar"></i> Thay đổi ảnh đại diện
                  </p>
                  <input
                    type="file"
                    name="upfile"
                    id="avtImage"
                    accept="image/*"
                    onChange={(e) => getImg(e)}
                    ref={inputFile}
                  />
                </div>
              </div>
            </div>

            <nav>
              <ul>
                <li onClick={() => setForm(0)}>
                  <a className={form === 0 && "activeTab"}>
                    <i className="fas fa-user"></i>
                    <span>Thông tin tài khoản</span>
                  </a>
                </li>
                <li onClick={() => setForm(2)}>
                  <a className={form === 2 && "activeTab"}>
                    <i className="fas fa-box-open"></i>
                    <span>Đơn hàng của bạn</span>
                  </a>
                </li>
                <li onClick={() => setForm(3)}>
                  <a>
                    <i className="fas fa-thumbs-up"></i>
                    <span>Quản lý đánh giá</span>
                  </a>
                </li>
                <li onClick={() => setForm(4)}>
                  <a>
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
        <div className="body-content">{switchRender()}</div>
      </section>
    </div>
  );
}

export default Account;
