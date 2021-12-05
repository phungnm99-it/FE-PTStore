import React, { useState, useEffect } from "react";
import "../../css/common/Register.css";
import { getProvinces } from "../../service/provinces-service";
import userApi from "../../api/userApi";
import { useHistory } from "react-router-dom";

function Register() {
  //const [sexInfo, setSex] = useState(0);
  // state tinh, state quan
  const history = useHistory();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistrict] = useState([]);

  useEffect(() => {
    // lay tinh tu api
    getProvinces().then((res) => {
      setProvinces(res.data);
      setDistrict(res.data[0].districts)
    });
  }, []);
  // lay quan tu ma tinh
  const getDistrictFromCode = (code) => {
    let filter = provinces.filter((x) => x.code.toString() === code);
    filter.length > 0 ? setDistrict(filter[0].districts) : setDistrict([]);
  };

  //kiem tra sdt 10 so
  const validateInput = (checkingText) => {
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let province = document.getElementById("SystemCityID");
    let username = document.getElementById("inputUserName").value;
    let phoneNumber = document.getElementById("inputPhone").value;
    let fullName = document.getElementById("inputName").value;
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let birthday = document.getElementById("inputBirthday").value.split("-");
    let gender = document.querySelector('input[name="sex"]:checked').value;
    let district = document.getElementById("SystemDistrictID");
    let address =
      document.getElementById("inputAddress").value +
      ", " +
      district.options[district.selectedIndex].text +
      ", " +
      province.options[province.selectedIndex].text;
    console.log(address);
    console.log([birthday[1], birthday[2], birthday[0]].join("-"));
    let formData = new FormData();
    formData.append("username", username);
    formData.append("gender", gender);
    formData.append("password", password);
    formData.append("fullname", fullName);
    formData.append("birthday", birthday);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("phonenumber", phoneNumber);
    userApi.register(formData).then((response) => {
      if (response.code === "401") {
        alert(response.message);
      } else {
        alert("Đăng ký thành công, vui lòng đăng nhập");
        history.push("/login");
      }
    });
  };
  return (
    <div>
      <div className="pageRegister">
        <div className="midRegister">
          <div className="registerForm">
            <div className="form">
              <div className="title-addAccount">
                <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
              </div>
              <div className="input-register">
                <form>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputUserName">
                        Tên đăng nhập
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputUserName"
                        placeholder="Tên đăng nhập"
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputPhone">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="inputPhone"
                        placeholder="Số điện thoại"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="inputName">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Họ và tên"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="inputEmail">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Email"
                    />
                  </div>

                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label
                        className="form-label label-birthday"
                        for="inputBirthday"
                      >
                        Ngày sinh
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="inputBirthday"
                        placeholder="Ngày sinh"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="inputSex">
                      Giới tính:
                    </label>
                    <div className="controls">
                      <input
                        className="radioMale"
                        type="radio"
                        id="Male"
                        name="sex"
                        value="Nam"
                        checked
                      />{" "}
                      <label className="textMale" for="inputMale">
                        Nam
                      </label>
                      <input
                        className="radioFemale"
                        type="radio"
                        id="Female"
                        name="sex"
                        value="Nữ"
                      />{" "}
                      <label className="textFemale" for="inputFemale">
                        Nữ
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="inputPassword">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Mật khẩu"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="inputPasswordAgain">
                      Nhập lại mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPasswordAgain"
                      placeholder="Nhập lại mật khẩu"
                    />
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label label-city" for="selectCity">
                        Tỉnh/Thành Phố
                      </label>
                      <div className="controls">
                        <select
                          name="SystemCityID"
                          id="SystemCityID"
                          placeholder="Tỉnh/Thành phố"
                          onChange={(e) => {
                            getDistrictFromCode(e.target.value);
                          }}
                        >
                          <option className="textSelectCity" value="">
                            Tỉnh/Thành Phố
                          </option>
                          {/* maps tinh thanh option */}
                          {provinces.map((pro, idx) => {
                            return (
                              <option key={idx} value={pro.code} selected={(idx === 0)}>
                                {pro.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label
                        className="form-label label-district"
                        for="selectDistrict"
                      >
                        Quận/Huyện
                      </label>
                      <div className="controls">
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
                                selected={(idx === 0)}
                                //   onClick={}
                              >
                                {dis.name}
                              </option>
                            );
                          })}
                          {/* <script type="text/javascript">
                                    var currentIsDelivery = 1;
                                    if (isInCheckDelivery) {
                                        if (!currentIsDelivery) {
                                            $("#IsDelivery").show();
                                            $(".shInfo").hide();
                                        } else {
                                            $("#IsDelivery").hide();
                                            $(".shInfo").show();
                                        }
                                    }
                                </script> */}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="inputAddress">
                      Địa chỉ
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Địa chỉ"
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      onClick={(e) => handleSubmit(e)}
                      className="btn btn-primary btn-color"
                    >
                      ĐĂNG KÝ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
