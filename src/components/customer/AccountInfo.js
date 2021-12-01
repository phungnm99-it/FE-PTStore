import React, { useState, useEffect } from "react";
import "../../css/customer/accountInfo.css";
import ChangePassword from "./ChangePassword";
import { getProvinces } from "../../service/provinces-service";
import userApi from "../../api/userApi";
import { isElementOfType } from "react-dom/test-utils";

function AccountInfo() {
  const [modalIsOpen, setIsOpen] = useState(false);
  // state tinh, state quan
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistrict] = useState([]);
  const [info, setInfo] = useState({});
  const [name, setName] = useState("");
  useEffect(() => {
    // lay tinh tu api
    getProvinces().then((res) => {
      setProvinces(res.data);
    });

    userApi.getInfo().then((response) => {
      console.log(response.data);
      setInfo(response.data);
    });
  }, []);
  // lay quan tu ma tinh
  const getDistrictFromCode = (code) => {
    let filter = provinces.filter((x) => x.code.toString() === code);
    filter.length > 0 ? setDistrict(filter[0].districts) : setDistrict([]);
  };

  return (
    <div>
      <section className="account">
        <div className="accountInfo">
          <div className="body-content">
            <h1>THÔNG TIN TÀI KHOẢN</h1>
            <div className="account-layout">
              <div className="row equaHeight" data-obj=".col .box-bg-white">
                <div className="col col-lg">
                  <div className="box-bg-white">
                    <div className="account-form">
                      <div>
                        <div className="form-controls">
                          <label>Tên đăng nhập:</label>
                          <div className="controls">
                            <input
                              className="form-input"
                              type="text"
                              value={info.username}
                              name="UserName"
                              id="UserName"
                              placeholder="Tên đăng nhập"
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="form-controls">
                          <label>Họ và tên:</label>
                          <div className="controls">
                            <input
                              className="form-input"
                              type="text"
                              value={info.fullName}
                              onChange={(e) => setName(e.target.value)}
                              name="FullName"
                              id="FullName"
                              placeholder="Họ và tên"
                            />
                          </div>
                        </div>

                        <div className="form-controls">
                          <label>Điện thoại:</label>
                          <div className="controls">
                            <input
                              className="form-input"
                              type="tel"
                              value={info.phoneNumber}
                              id="PhoneNumber"
                              placeholder="Điện thoại *"
                              data-required="1"
                              readOnly
                            />
                          </div>
                        </div>

                        <div className="form-controls">
                          <label>Email:</label>
                          <div className="controls">
                            <input
                              className="form-input"
                              type="text"
                              value={info.email}
                              name="Email"
                              id="Email"
                              placeholder="Email *"
                              data-required="1"
                              readOnly
                            />
                          </div>
                        </div>

                        <div className="form-controls">
                          <label>Ngày tháng năm sinh:</label>
                          <div className="controls">
                            <input
                              max="2030-12-31"
                              type="date"
                              value={info.birthday}
                              id="UserBirthDate"
                            />
                          </div>
                        </div>
                        <div className="form-controls">
                          <label>Giới tính:</label>
                          <div className="controls">
                            <input
                              className="radioMale"
                              type="radio"
                              id="Male"
                              name="sex"
                              value="Nam"
                            />
                             {" "}
                            <label className="textMale" for="html">
                              Nam
                            </label>
                             
                            <input
                              className="radioFemale"
                              type="radio"
                              id="Female"
                              name="sex"
                              value="Nu"
                            />
                             {" "}
                            <label className="textFemale" for="css">
                              Nữ
                            </label>
                          </div>
                          <br />
                        </div>

                        <div className="form-controls">
                          <label>Tỉnh/Thành phố:</label>
                          <div className="controls">
                            <select
                              name="SystemCityID"
                              id="SystemCityID"
                              placeholder="Tỉnh/Thành phố"
                              onChange={(e) => {
                                getDistrictFromCode(e.target.value);
                              }}
                            >
                              <option>Chọn tỉnh/thành phố</option>
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
                        </div>

                        <div className="form-controls">
                          <label>Quận/Huyện:</label>
                          <div class="controls">
                            <select
                              id="SystemDistrictID"
                              name="SystemDistrictID"
                              placeholder="Quận/Huyện *"
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
                        </div>

                        <div className="form-controls">
                          <label>Địa chỉ:</label>
                          <div className="controls">
                            <input
                              className="form-input"
                              type="text"
                              value={info.address}
                              name="Address"
                              id="Address"
                              placeholder="Địa chỉ *"
                              data-required="1"
                            />
                          </div>
                        </div>

                        <div className="form-controls">
                          <div className="controls submit-controls">
                            <div className="col-md-10">
                              <button className="btn-editInfo" type="submit">
                                CẬP NHẬT
                              </button>
                            </div>
                            <div className="col-md-4">
                              <button
                                className="btn-changePass"
                                onClick={() => {
                                  setIsOpen(true);
                                }}
                              >
                                ĐỔI MẬT KHẨU
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {modalIsOpen && <ChangePassword onCLose={() => setIsOpen(false)} />}
      </section>
    </div>
  );
}

export default AccountInfo;
