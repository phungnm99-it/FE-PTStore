import React, { useEffect, useState } from "react";
import "../../css/cart/UserInfo.css";
import { getProvinces } from "../../service/provinces-service";
function UserInfo() {
  // state tinh, state quan
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistrict] = useState([]);

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
              />
            </div>
            <div className="fillname phoneNumber">
              <input
                placeholder="Số điện thoại (bắt buộc)"
                type="text"
                maxLength="10"
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
              <input placeholder="Địa chỉ giao hàng (bắt buộc) " type="text" />
            </div>
            <div className="anotheroptions">
              <input placeholder="Yêu cầu khác (không bắt buộc) " type="text" />
            </div>
          </div>
        </form>
        <div className="final-total">
          <div className="total-price">
            <strong>Tổng tiền</strong>
            <strong>27.980.000</strong>
          </div>
          <div className="btn-buy">
            <button type="button" className="submitpay">
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
