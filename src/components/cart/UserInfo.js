import React, { useEffect, useState } from "react";
import "../../css/cart/UserInfo.css";
import { getProvinces } from "../../service/provinces-service";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { useHistory } from "react-router-dom";
import { priceFormat } from "../../utils/priceFormat";
import axios from "axios";

function UserInfo() {
  // state tinh, state quan
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistrict] = useState([]);
  const context = useContext(AuthContext);
  const history = useHistory();

  const calculateTotalCost = (arrays) => {
    let result = 0;
    arrays.forEach((element) => {
      result = result + element.currentPrice * element.quantity;
    });
    return result;
  };

  useEffect(() => {
    // lay tinh tu api
    getProvinces().then((res) => {
      setProvinces(res.data);
    });
  }, []);
  // lay quan tu ma tinh
  const getDistrictFromCode = (code) => {
    let filter = provinces.filter((x) => x.code.toString() === code);
    filter.length > 0 ? setDistrict(filter[0].districts) : setDistrict([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (context.user == null) {
      alert("Vui lòng đăng nhập!");
      history.push("/login");
    } else {
      let province = document.getElementById("SystemCityID");
      let district = document.getElementById("SystemDistrictID");
      let address =
        document.getElementById("address").value +
        ", " +
        district.options[district.selectedIndex].text +
        ", " +
        province.options[province.selectedIndex].text;
      let name = document.getElementById("fullName").value;
      let phoneNumber = document.getElementById("phoneNumber").value;
      let productList = context.cart;
      let data = { name, phoneNumber, address, productList };

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
          const token = sessionStorage.getItem("access_token");
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

      const url = "/order/create";
      axiosClient.post(url, JSON.stringify(data)).then((res) => {
        if (res.data.code == 200) {
          alert("Đặt hàng thành công!");
          context.resetCart();
          history.push("/account/3");
        } else {
          alert("Lỗi!");
        }
      });
    }
  };

  // function simpleStringify(object) {
  //   var simpleObject = {};
  //   for (var prop in object) {
  //     if (!object.hasOwnProperty(prop)) {
  //       continue;
  //     }
  //     if (typeof object[prop] == "object") {
  //       continue;
  //     }
  //     if (typeof object[prop] == "function") {
  //       continue;
  //     }
  //     simpleObject[prop] = object[prop];
  //   }
  //   return JSON.stringify(simpleObject); // returns cleaned up JSON
  // }

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
              <input placeholder="Email (bắt buộc)" type="text" />
            </div>
            <div className="chooseAddress">
              <select
                id="SystemCityID"
                name="SystemCityID"
                placeholder="Tỉnh/Thành phố"
                data-required="1"
                onChange={(e) => {
                  getDistrictFromCode(e.target.value);
                }}
              >
                <option value="">Tỉnh/Thành phố</option>
                {/* maps tinh thanh option */}
                {provinces.map((pro, idx) => {
                  return (
                    <option key={idx} value={pro.code}>
                      {pro.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="chooseAddress district">
              <select
                id="SystemDistrictID"
                name="SystemDistrictID"
                placeholder="Quận/Huyện"
                data-required="1"
              >
                {" "}
                {districts?.map((dis, idx) => {
                  return (
                    <option
                      key={idx}
                      value={dis.code}
                      //   onClick={}
                    >
                      {dis.name}
                    </option>
                  );
                })}
              </select>
            </div>
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
            <button type="button" className="submitonlpay">
              <b>THANH TOÁN ONLINE</b>
              <br />
              <b>(Qua ví PayPal)</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
