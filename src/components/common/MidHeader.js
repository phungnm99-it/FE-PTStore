import "../../css/common/MidHeader.css";
//import Login from "./Login";
import { AuthContext } from "../../AuthContext";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import iconSearch from "../../images/iconSearch.png";
import Auth from "../../config/auth";
//import Logout from "./Logout";

function HeaderMid() {
  const context = useContext(AuthContext);
  const history = useHistory();
  return (
    <div>
      <div className="header-middle headermidpartial">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="logo pull-left">
                <Link to="/">
                  <img
                    src="http://res.cloudinary.com/dobsh4rbw/image/upload/v1639402941/commom/logo-ptstore121321084131.png"
                    alt="PT Store logo"
                    width="162"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                  <div
                    className="d-inline pull-right"
                    asp-controller="DienThoai"
                    asp-action="Index"
                  >
                    <input
                      name="searchOrder"
                      className="form-control me-2 col-sm-6 inputSearch"
                      type="search"
                      placeholder="Bạn cần tìm gì?"
                      id="searchinput"
                      aria-label="Search"
                    />
                    {/* <button id="searchbtn" className="btn btn-outline-success buttonSearch">Tìm Kiếm</button> */}
                    <div
                      className="btnSearch"
                      id="search-cate"
                      onClick={() => {
                        let x = document.getElementById("searchinput").value;
                        if (x === "") alert("Nhập nội dung!!!");
                        else {
                          let link = "/timkiem/search=" + x;
                          history.push(link);
                        }
                      }}
                    >
                      <img src={iconSearch} alt="icon search" />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            {Auth.isLogin() ? (
              <div className="col-md-6">
                <div className="shop-menu clearfix">
                  <ul id="ulhighlight" className="nav navbar-nav">
                    <li>
                      <Link to="/cart" className="btn-Cart">
                        <i className="fas fa-shopping-cart"></i> Giỏ Hàng
                        {context.cart.length > 0 ? (
                          "[" + context.cart.length + "]"
                        ) : (
                          <div></div>
                        )}
                      </Link>
                    </li>
                    <li>
                      <Link to="/account" className="btn-Account">
                        <i className="fa fa-user"></i> Tài khoản
                      </Link>
                    </li>
                    <li>
                      <button
                        className="btn-Logout"
                        onClick={() => {
                          context.logout();
                          Auth.logout();
                        }}
                      >
                        <i className="fas fa-sign-out-alt"></i> Đăng xuất
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="col-md-6 clearfix">
                <div className="shop-menu clearfix">
                  <ul id="ulhighlight" className="nav navbar-nav">
                    <li>
                      <Link to="/cart" className="btn-Cart">
                        <i className="fas fa-shopping-cart"></i> Giỏ Hàng
                        {context.cart.length > 0 ? (
                          "[" + context.cart.length + "]"
                        ) : (
                          <div></div>
                        )}
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" className="btn-Login">
                        <i className="fas fa-sign-in-alt"></i> Đăng nhập
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="btn-Register">
                        <i className="fas fa-sign-in-alt"></i> Đăng ký
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMid;
