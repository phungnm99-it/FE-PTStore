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
import AddAdminAccount from "./account/AddAdminAccount";
import AddShipperAccount from "./account/AddShipperAccount";
import CancelOrder from "./order/CancelOrder";
import CanceledOrder from "./order/CanceledOrder";
import DetailOrderForAll from "./order/DetailOrderForAll";
import SendNotification from "./subscriber/SendNotification";

function Admin(props) {
  const context = useContext(AdminContext);
  const history = useHistory();
  const [role, setRole] = useState(Auth.getCurrentUser().role);
  const [form, setForm] = useState(props.form || 0);
  const [avt, setAvt] = useState(
    "https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png"
  );
  const inputFile = useRef(null);
  const [name, setName] = useState("");
  // chua item
  const [item, setItem] = useState({});
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
        alert("L???i!");
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
        return (
          <AccountAdmin
            switch={(e) => setForm(e)}
            setAccount={(e) => setItem(e)}
          />
        );
      case 2:
        return (
          <AccountUser
            switch={(e) => setForm(e)}
            setAccount={(e) => setItem(e)}
          />
        );
      case 3:
        return (
          <AccountShipper
            switch={(e) => setForm(e)}
            setAccount={(e) => setItem(e)}
          />
        );
      case 4:
        return (
          <LockedAccount
            switch={(e) => setForm(e)}
            setAccount={(e) => setItem(e)}
          />
        );
      case 5:
        return <AddAccount switch={(e) => setForm(e)} />;
      case 6:
        return <EditAccount switch={(e) => setForm(e)} account={item} />;
      case 7:
        return <DetailAccount account={item} switch={(e) => setForm(e)} />;
      case 8:
        return (
          <Brand switch={(e) => setForm(e)} setBrand={(e) => setItem(e)} />
        );
      case 9:
        return <AddBrand switch={(e) => setForm(e)} />;
      case 10:
        return <EditBrand brand={item} switch={(e) => setForm(e)} />;
      case 11:
        return <DetailBrand brand={item} switch={(e) => setForm(e)} />;
      case 12:
        return (
          <Product switch={(e) => setForm(e)} setProduct={(e) => setItem(e)} />
        );
      case 13:
        return (
          <ProductPrice
            switch={(e) => setForm(e)}
            setProduct={(e) => setItem(e)}
          />
        );
      case 14:
        return (
          <ProductStatus
            switch={(e) => setForm(e)}
            setProduct={(e) => setItem(e)}
          />
        );
      case 15:
        return <AddProduct switch={(e) => setForm(e)} />;
      case 16:
        return <EditProduct product={item} switch={(e) => setForm(e)} />;
      case 17:
        return <DetailProduct product={item} switch={(e) => setForm(e)} />;
      case 18:
        return (
          <Review setReview={(e) => setItem(e)} switch={(e) => setForm(e)} />
        );
      case 19:
        return <DetailReview review={item} switch={(e) => setForm(e)} />;
      case 20:
        return <EditPrice product={item} switch={(e) => setForm(e)} />;
      case 21:
        return (
          <Order switch={(e) => setForm(e)} setOrder={(e) => setItem(e)} />
        );
      case 22:
        return <EditOrder />;
      case 23:
        return (
          <CompletedOrder
            switch={(e) => setForm(e)}
            setOrder={(e) => setItem(e)}
          />
        );
      case 24:
        return (
          <Feedback
            switch={(e) => setForm(e)}
            setFeedback={(e) => setItem(e)}
          />
        );
      case 25:
        return <ReplyFeedback switch={(e) => setForm(e)} feedback={item} />;
      case 26:
        return <DetailFeedback switch={(e) => setForm(e)} feedback={item} />;
      case 27:
        return <Subscriber switch={(e) => setForm(e)}
                          setFeedback={(e) => setItem(e)}/>;
      case 28:
        return (
          <FeedbackHasBeenReplied
            switch={(e) => setForm(e)}
            setFeedback={(e) => setItem(e)}
          />
        );
      case 29:
        return <EditProductStatus switch={(e) => setForm(e)} product={item} />;
      case 30:
        return <DetailOrder switch={(e) => setForm(e)} order={item} />;
      case 31:
        return <DeleteAccount switch={(e) => setForm(e)} />;
      case 32:
        return <DeleteBrand switch={(e) => setForm(e)} />;
      case 33:
        return <DeleteProduct switch={(e) => setForm(e)} />;
      case 34:
        return <AdminInfo switch={(e) => setForm(e)} />;
      case 35:
        return <EditInfo switch={(e) => setForm(e)} />;
      case 36:
        return <ChangePass />;
      case 37:
        return (
          <DeliveredOrder
            switch={(e) => setForm(e)}
            setOrder={(e) => setItem(e)}
          />
        );
      case 38:
        return (
          <WaitDeliveryOrder
            switch={(e) => setForm(e)}
            setOrder={(e) => setItem(e)}
          />
        );
      case 39:
        return (
          <WaitConfirmOrder
            switch={(e) => setForm(e)}
            setOrder={(e) => setItem(e)}
          />
        );
      case 40:
        return <AddAdminAccount switch={(e) => setForm(e)} />;
      case 41:
        return <AddShipperAccount switch={(e) => setForm(e)} />;
      case 42:
        return <CancelOrder switch={(e) => setForm(e)} />;

      case 43:
        return (
          <CanceledOrder
            switch={(e) => setForm(e)}
            order={item}
            setOrder={(e) => setItem(e)}
          />
        );

      case 44:
        return <DetailOrderForAll switch={(e) => setForm(e)} order={item} />;
      case 45:
        return <SendNotification switch={(e) => setForm(e)} subscribers={item} />;
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
                      <i className="icon-change-avatar"></i> Thay ?????i ???nh ?????i
                      di???n
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
                      Trang ch???
                    </a>
                  </li>
                  <li className="nav-title">Theme</li>

                  {role === "SuperAdmin" ? (
                    <DropDown
                      name="Qu???n l?? T??i kho???n"
                      icon="fas fa-user-cog nav-icon"
                      subNav={[
                        {
                          name: "T??i kho???n Admin",
                          icon: "fas fa-user-circle nav-icon",
                          link: "",
                          formChoose: () => setForm(1),
                        },
                        {
                          name: "T??i kho???n User",
                          icon: "fas fa-user-circle nav-icon",
                          link: "",
                          formChoose: () => setForm(2),
                        },
                        {
                          name: "T??i kho???n Shipper",
                          icon: "fas fa-user-circle nav-icon",
                          link: "",
                          formChoose: () => setForm(3),
                        },
                        {
                          name: "T??i kho???n ???? kh??a",
                          icon: "fas fa-user-circle nav-icon",
                          link: "",
                          formChoose: () => setForm(4),
                        },
                      ]}
                    />
                  ) : (
                    <DropDown
                      name="Qu???n l?? T??i kho???n"
                      icon="fas fa-user-cog nav-icon"
                      subNav={[
                        {
                          name: "T??i kho???n User",
                          icon: "fas fa-user-circle nav-icon",
                          link: "",
                          formChoose: () => setForm(2),
                        },
                        {
                          name: "T??i kho???n ???? kh??a",
                          icon: "fas fa-user-circle nav-icon",
                          link: "",
                          formChoose: () => setForm(4),
                        },
                      ]}
                    />
                  )}
                  <li className="nav-item" onClick={() => setForm(8)}>
                    <a className="nav-link active btn-focus">
                      <i className="fas fa-trademark nav-icon"></i>
                      Qu???n l?? Th????ng hi???u
                    </a>
                  </li>
                  <DropDown
                    name="Qu???n l?? S???n ph???m"
                    icon="fas fa-mobile-alt nav-icon"
                    subNav={[
                      {
                        name: "Qu???n l?? Th??ng tin",
                        icon: "fas fa-mobile-alt  nav-icon",
                        link: "",
                        formChoose: () => setForm(12),
                      },
                      {
                        name: "Qu???n l?? Gi?? ",
                        icon: "fas fa-mobile-alt  nav-icon",
                        link: "",
                        formChoose: () => setForm(13),
                      },
                      {
                        name: "Qu???n l?? T??nh tr???ng",
                        icon: "fas fa-mobile-alt  nav-icon",
                        link: "",
                        formChoose: () => setForm(14),
                      },
                    ]}
                  />
                  <DropDown
                    name="Qu???n l?? ????n h??ng"
                    icon="fas fa-box-open nav-icon"
                    subNav={[
                      {
                        name: "T???t c??? ????n h??ng",
                        icon: "fas fa-box-open nav-icon",
                        link: "",
                        formChoose: () => setForm(21),
                      },
                      {
                        name: "????n h??ng ch??? x??c nh???n",
                        icon: "fas fa-box-open nav-icon",
                        link: "",
                        formChoose: () => setForm(39),
                      },
                      {
                        name: "????n h??ng ???? x??c nh???n",
                        icon: "fas fa-box-open nav-icon",
                        link: "",
                        formChoose: () => setForm(38),
                      },
                      {
                        name: "????n h??ng ??ang giao",
                        icon: "fas fa-box-open nav-icon",
                        link: "",
                        formChoose: () => setForm(37),
                      },
                      {
                        name: "????n h??ng ???? ho??n th??nh",
                        icon: "fas fa-box-open nav-icon",
                        link: "",
                        formChoose: () => setForm(23),
                      },
                      {
                        name: "????n h??ng ???? hu???",
                        icon: "fas fa-box-open nav-icon",
                        link: "",
                        formChoose: () => setForm(43),
                      },
                    ]}
                  />

                  <li className="nav-item" onClick={() => setForm(18)}>
                    <a href="#" className="nav-link active btn-focus">
                      <i className="fas fa-thumbs-up nav-icon"></i>
                      Qu???n l?? ????nh gi??
                    </a>
                  </li>
                  <DropDown
                    name="Qu???n l?? G??p ??"
                    icon="fa fa-comments-o nav-icon"
                    subNav={[
                      {
                        name: "G??p ?? ch??a tr??? l???i",
                        icon: "fas fa-user-circle nav-icon",
                        link: "",
                        formChoose: () => setForm(24),
                      },
                      {
                        name: "G??p ?? ???? tr??? l???i",
                        icon: "fas fa-user-circle nav-icon",
                        link: "",
                        formChoose: () => setForm(28),
                      },
                    ]}
                  />
                  <li className="nav-item" onClick={() => setForm(27)}>
                    <a href="#" className="nav-link active btn-focus">
                      <i className="fas fa-bell nav-icon"></i>
                      Qu???n l?? Subscriber
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
                  Trang ch???
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
                <span> ????ng xu???t</span>
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
