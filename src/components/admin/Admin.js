import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useParams,
} from "react";
import "../../css/admin/Menu.css";
import "../../css/admin/Header.css";
import DropDown from "./common/DropDown";
import AccountAdmin from "./account/AccountAdmin";
import AccountUser from "./account/AccountUser";
import AccountShipper from "./account/AccountShipper";
import LockedAccount from "./account/LockedAccount";
import AddAccount from "./account/AddAccount";
import EditAccount from "./account/EditAccount";
import DetailAccount from "./account/DetailAccount";
import Brand from "./brand/Brand";
import AddBrand from "./brand/AddBrand";
import EditBrand from "./brand/EditBrand";
import DetailBrand from "./brand/DetailBrand";
import Product from "./product/Product";
import AddProduct from "./product/AddProduct";
import DetailProduct from "./product/DetailProduct";
import EditProduct from "./product/EditProduct";
import Review from "./review/Review";
import DetailReview from "./review/DetailReview";
import ProductPrice from "./product/ProductPrice";
import EditPrice from "./product/EditPrice";
import Order from "./order/Order";
import EditOrder from "./order/EditOrder";
import Feedback from "./feedback/Feedback";
import ReplyFeedback from "./feedback/ReplyFeedback";
import DetailFeedback from "./feedback/DetailFeedback";
import Subscriber from "./subscriber/Subscriber";
import FeedbackHasBeenReplied from "./feedback/FeedbackHasBeenReplied";
import ProductStatus from "./product/ProductStatus";
import EditProductStatus from "./product/EditProductStatus";
import DetailOrder from "./order/DetailOrder";
import DeleteAccount from "./account/DeleteAccount";
import DeleteBrand from "./brand/DeleteBrand";
import DeleteProduct from "./product/DeleteProduct";
import AdminInfo from "./adminInfo/AdminInfo";
import EditInfo from "./adminInfo/EditInfo";
import ChangePass from "./adminInfo/ChangePass";
import PageMainAdmin from "./pagemain/PageMainAdmin";
import CompletedOrder from "./order/CompletedOrder";
import DeliveredOrder from "./order/DeliveredOrder";
import WaitDeliveryOrder from "./order/WaitDeliveryOrder";
import WaitConfirmOrder from "./order/WaitConfirmOrder";
import { AdminContext } from "../../AdminContext";
import Auth from "../../config/auth";
import { useHistory } from "react-router-dom";
import userApi from "../../api/userApi";

function Admin(props) {
  const context = useContext(AdminContext);
  const history = useHistory();
  const [form, setForm] = useState(props.form || 0);
  const [avt, setAvt] = useState(
    "https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png"
  );
  const inputFile = useRef(null);
  const [name, setName] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const switchRender = () => {
    switch (form) {
      case 0:
        return <PageMainAdmin />;
      case 1:
        return <AccountAdmin switch={(e) => setForm(e)} />;
      case 2:
        return <AccountUser switch={(e) => setForm(e)} />;
      case 3:
        return <AccountShipper switch={(e) => setForm(e)} />;
      case 4:
        return <LockedAccount switch={(e) => setForm(e)} />;
      case 5:
        return <AddAccount />;
      case 6:
        return <EditAccount />;
      case 7:
        return <DetailAccount switch={(e) => setForm(e)} />;
      case 8:
        return <Brand switch={(e) => setForm(e)} />;
      case 9:
        return <AddBrand switch={(e) => setForm(e)} />;
      case 10:
        return <EditBrand />;
      case 11:
        return <DetailBrand switch={(e) => setForm(e)} />;
      case 12:
        return <Product switch={(e) => setForm(e)} />;
      case 13:
        return <ProductPrice switch={(e) => setForm(e)} />;
      case 14:
        return <ProductStatus switch={(e) => setForm(e)} />;
      case 15:
        return <AddProduct switch={(e) => setForm(e)} />;
      case 16:
        return <EditProduct />;
      case 17:
        return <DetailProduct switch={(e) => setForm(e)} />;
      case 18:
        return <Review switch={(e) => setForm(e)} />;
      case 19:
        return <DetailReview switch={(e) => setForm(e)} />;
      case 20:
        return <EditPrice />;
      case 21:
        return <Order switch={(e) => setForm(e)} />;
      case 22:
        return <EditOrder />;
      case 23:
        return <CompletedOrder switch={(e) => setForm(e)} />;
      case 24:
        return <Feedback switch={(e) => setForm(e)} />;
      case 25:
        return <ReplyFeedback />;
      case 26:
        return <DetailFeedback switch={(e) => setForm(e)} />;
      case 27:
        return <Subscriber />;
      case 28:
        return <FeedbackHasBeenReplied switch={(e) => setForm(e)} />;
      case 29:
        return <EditProductStatus />;
      case 30:
        return <DetailOrder />;
      case 31:
        return <DeleteAccount switch={(e) => setForm(e)} />;
      case 32:
        return <DeleteBrand switch={(e) => setForm(e)} />;
      case 33:
        return <DeleteProduct switch={(e) => setForm(e)} />;
      case 34:
        return <AdminInfo switch={(e) => setForm(e)} />;
      case 35:
        return <EditInfo />;
      case 36:
        return <ChangePass />;
      case 37:
        return <DeliveredOrder switch={(e) => setForm(e)} />;
      case 38:
        return <WaitDeliveryOrder switch={(e) => setForm(e)} />;
      case 39:
        return <WaitConfirmOrder switch={(e) => setForm(e)} />;
      default:
        return null;
    }
  };

  // setForm(n) {
  //   setState({
  //     form: n,
  //   });
  // }
  /* const selectFile = () => {
    inputFile.click();
  }; */
  return (
    <section className="pageAdmin">
      <div className="account">
        <div className="menuAdmin">
          <div className="sidebar">
            <div className="ctn">
              <div className="header">
                <div className="info">
                  <div className="avt" id="myAvatar">
                    {/* <strong>T</strong> */}
                    <img src={avt} alt="" />
                  </div>
                  <div className="summer">
                    <p onClick={() => setForm(34)}>
                      <strong>{name}</strong>
                    </p>
                    <p className="change-avatar" onClick={() => selectFile()}>
                      <i className="icon-change-avatar"></i> Thay đổi ảnh đại
                      diện
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
                  <li className="nav-item" onClick={() => setForm(0)}>
                    <a href="#" className="nav-link ">
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
                  <li className="nav-item" onClick={() => setForm(8)}>
                    <a className="nav-link active btn-focus">
                      <i className="fas fa-tachometer-alt nav-icon"></i>
                      Quản lý Thương hiệu
                    </a>
                  </li>
                  <DropDown
                    name="Quản lý Sản phẩm"
                    icon="fas fa-mobile-alt nav-icon"
                    subNav={[
                      {
                        name: "Quản lý Thông tin",
                        icon: "fas fa-mobile-alt  nav-icon",
                        link: "",
                        formChoose: () => setForm(12),
                      },
                      {
                        name: "Quản lý Giá ",
                        icon: "fas fa-mobile-alt  nav-icon",
                        link: "",
                        formChoose: () => setForm(13),
                      },
                      {
                        name: "Quản lý Tình trạng",
                        icon: "fas fa-mobile-alt  nav-icon",
                        link: "",
                        formChoose: () => setForm(14),
                      },
                    ]}
                  />
                  <DropDown
                    name="Quản lý Đơn hàng"
                    icon="fas fa-box-open nav-icon"
                    subNav={[
                      {
                        name: "Tất cả đơn hàng",
                        icon: "fas fa-box-open nav-icon",
                        link: "",
                        formChoose: () => setForm(21),
                      },
                      {
                        name: "Đơn hàng chờ xác nhận",
                        icon: "fas fa-box-open nav-icon",
                        link: "",
                        formChoose: () => setForm(39),
                      },
                      {
                        name: "Đơn hàng chờ lấy hàng",
                        icon: "fas fa-box-open nav-icon",
                        link: "",
                        formChoose: () => setForm(38),
                      },
                      {
                        name: "Đơn hàng đang giao",
                        icon: "fas fa-box-open nav-icon",
                        link: "",
                        formChoose: () => setForm(37),
                      },
                      {
                        name: "Đơn hàng đã hoàn thành",
                        icon: "fas fa-box-open nav-icon",
                        link: "",
                        formChoose: () => setForm(23),
                      },
                    ]}
                  />

                  <li className="nav-item" onClick={() => setForm(18)}>
                    <a href="#" className="nav-link active btn-focus">
                      <i className="fas fa-thumbs-up nav-icon"></i>
                      Quản lý Đánh giá
                    </a>
                  </li>
                  <DropDown
                    name="Quản lý Góp ý"
                    icon="fa fa-comments-o nav-icon"
                    subNav={[
                      {
                        name: "Góp Ý chưa trả lời",
                        icon: "fas fa-user-circle nav-icon",
                        link: "",
                        formChoose: () => setForm(24),
                      },
                      {
                        name: "Góp ý đã trả lời",
                        icon: "fas fa-user-circle nav-icon",
                        link: "",
                        formChoose: () => setForm(28),
                      },
                    ]}
                  />
                  <li className="nav-item" onClick={() => setForm(27)}>
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
          <div className="headerAdmin">
            <div className="header header-sticky mb-4">
              <div className="container-fluid">
                <button type="button" className="header-toggler ps-1">
                  <i className="fas fa-list"></i>
                </button>
                <a
                  className="header-nav d-none d-md-flex me-auto"
                  onClick={() => setForm(0)}
                >
                  Trang chủ
                </a>
              </div>
              <div
                className="InfoAdmin"
                onClick={() => {
                  context.logout();
                  Auth.logout();
                  history.push("/admin/login");
                }}
              >
                <i className="fas fa-sign-out-alt nav-icon"></i>
                <span> Đăng xuất</span>
              </div>
            </div>
          </div>
          <div className="bodyMain">{switchRender()}</div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
