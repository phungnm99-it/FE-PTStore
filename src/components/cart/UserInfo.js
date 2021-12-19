import React, { useEffect, useState } from "react";
import "../../css/cart/UserInfo.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { useHistory } from "react-router-dom";
import { priceFormat } from "../../utils/priceFormat";
import axios from "axios";
import userApi from "../../api/userApi";
import { PayPalButton } from "react-paypal-button-v2";

function UserInfo() {
  const context = useContext(AuthContext);
  const history = useHistory();
  const [paypal, setPaypal] = useState(false);

  const calculateTotalCost = (arrays) => {
    let result = 0;
    arrays.forEach((element) => {
      result = result + element.currentPrice * element.quantity;
    });
    return result;
  };

  const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    },
    //paramsSerializer: (params) => queryString.stringify(params),
  });

  axiosClient.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      //config.headers["Content-Type"] = "application/json";
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  useEffect(() => {
    if (paypal) {
      let urlPaypal = "/order/createPaypal";
      let address = document.getElementById("address").value;
      let name = document.getElementById("fullName").value;
      let phoneNumber = document.getElementById("phoneNumber").value;
      let productList = context.cart;
      let data = { name, phoneNumber, address, productList };

      axiosClient.post(urlPaypal, JSON.stringify(data)).then((res) => {
        if (res.data.code == 200) {
          context.resetCart();
          alert("Đặt hàng thành công!");
          history.push("/account/2");
        } else {
          alert("Lỗi!");
        }
      });
    }
  }, [paypal]);

  useEffect(() => {
    if (context.user != null) {
      userApi.getInfo().then((response) => {
        console.log(response);
        document.getElementById("address").value = response.data.address;
        document.getElementById("fullName").value = response.data.fullName;
        document.getElementById("phoneNumber").value =
          response.data.phoneNumber;
        document.getElementById("email").value = response.data.email;
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (context.user == null) {
      alert("Vui lòng đăng nhập!");
      history.push("/login");
    } else {
      let address = document.getElementById("address").value;
      let name = document.getElementById("fullName").value;
      let phoneNumber = document.getElementById("phoneNumber").value;
      let productList = context.cart;
      let data = { name, phoneNumber, address, productList };

      const url = "/order/create";
      axiosClient.post(url, JSON.stringify(data)).then((res) => {
        if (res.data.code == 200) {
          alert("Đặt hàng thành công!");
          context.resetCart();
          history.push("/account/2");
        } else {
          alert("Lỗi!");
        }
      });
    }
  };

  return (
    <div>
      <div className="info-user">
        <h4>THÔNG TIN KHÁCH HÀNG</h4>
        <form className="form-info-user">
          <div className="fillinform">
            <div className="fillname">
              <input
                placeholder="Họ và Tên (bắt buộc)"
                type="text"
                maxLength="50"
                required
                id="fullName"
              />
            </div>
            <div className="fillname phoneNumber">
              <input
                placeholder="Số điện thoại (bắt buộc)"
                type="text"
                maxLength="10"
                required
                minLength="10"
                id="phoneNumber"
              />
            </div>
            <div className="fillmail">
              <input placeholder="Email (bắt buộc)" id="email" type="text" />
            </div>
            <div className="chooseAddress"></div>
            <div className="chooseAddress district"></div>
            <div className="filladdress">
              <input
                placeholder="Địa chỉ giao hàng (bắt buộc) "
                type="text"
                required
                id="address"
              />
            </div>
            <div className="anotheroptions">
              <input placeholder="Yêu cầu khác (không bắt buộc) " type="text" />
            </div>
          </div>
        </form>
        <div className="final-total">
          <div className="total-price">
            <strong>Tổng tiền</strong>
            <strong>{priceFormat(calculateTotalCost(context.cart))}</strong>
          </div>
          <div className="btn-buy">
            <button
              type="button"
              onClick={(e) => handleSubmit(e)}
              className="submitpay"
            >
              <b>ĐẶT HÀNG</b>
              <br />
              <b>(Thanh toán khi nhận hàng)</b>
            </button>
            {context.user === null ? null : (
              <PayPalButton
                amount={Math.floor(calculateTotalCost(context.cart) / 23000)}
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                  return setPaypal(true);
                }}
                options={{
                  clientId:
                    "AQLb3TrxPDPbXSQNJqXCD8UiPOQwfAwLSyTPzc05onCxgUYRLTgXxYkZoUx99HY0VXX-Wp-Yf7OD2bQi",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
