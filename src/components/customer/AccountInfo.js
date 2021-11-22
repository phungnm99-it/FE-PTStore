import React, { useState, useEffect } from "react";
import "../../css/customer/accountInfo.css";
import ChangePassword from "./ChangePassword";
import { getProvinces } from "../../service/provinces-service";

function AccountInfo() {
  const [modalIsOpen, setIsOpen] = useState(false);
  // state tinh, state quan
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistrict] = useState([]);

  useEffect(() => {
    // lay tinh tu api
    getProvinces().then((res) => {
      console.log(res.data);
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
      <section className="account">
        <div className="accountInfo">
          <div className="body-content">
            <h1>THÔNG TIN TÀI KHOẢN</h1>
            <div className="account-layout">
              <div className="row equaHeight" data-obj=".col .box-bg-white">
                <div className="col col-lg">
                  <div className="box-bg-white">
                    <div className="account-form">
                      <form onsubmit="return validFormAccount(this);">
                        <div className="form-controls">
                          <label>Tên đăng nhập:</label>
                          <div className="controls">
                            <input
                              className="form-input"
                              type="text"
                              value="TienPhan"
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
                              value="Tien Phan Nguyen Thụy"
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
                              value="0858679912"
                              name="PhoneNumber"
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
                              value="thuytienpn106@gmail.com"
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
                              className="form-input"
                              type="text"
                              value="06/10/1999"
                              name="UserBirthDate"
                              id="UserBirthDate"
                              placeholder="Ngày tháng năm sinh"
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
                              checked
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
                              value="So 1 Vo Van Ngan"
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
                                XÁC NHẬN
                              </button>
                            </div>
                            <div className="col-md-4">
                              <button
                                className="btn btn-link ajax-content"
                                onClick={() => {
                                  setIsOpen(true);
                                }}
                              >
                                ĐỔI MẬT KHẨU
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
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