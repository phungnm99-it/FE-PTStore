import React, { useState, useEffect } from "react";
import "../../../css/admin/account/AddAccount.css";
import { getProvinces } from "../../../service/provinces-service";
import { validate } from "../../../utils/validateInput"
function AddAccount(props) {
  const [checkPhone, setCheckPhone] = useState(true);
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPassword, setCheckPass] = useState(true);
  // state tinh, state quan
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistrict] = useState([]);
  useEffect(() => {
    // lay tinh tu api
    getProvinces().then((res) => {
      console.log(res.data);
      setProvinces(res.data);
      setDistrict(res.data[0].districts)
    });
  }, []);
  // lay quan tu ma tinh
  const getDistrictFromCode = (code) => {
    let filter = provinces.filter((x) => x.code.toString() === code);
    filter.length > 0 ? setDistrict(filter[0].districts) : setDistrict([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //Chưa let hình ảnh
    let username = document.getElementById("inputUserName").value;
    let phoneNumber = document.getElementById("inputPhone").value;
    let fullName = document.getElementById("inputName").value;
    let email = document.getElementById("inputEmail").value;
    let birthday = document.getElementById("inputBirthday").value.split("-");
    let gender = document.querySelector('input[name="sex"]:checked').value;
    let password = document.getElementById("inputPassword").value;
    let province = document.getElementById("SystemCityID");
    let district = document.getElementById("SystemDistrictID");
    let address =
      document.getElementById("inputAddress").value +
      ", " +
      district.options[district.selectedIndex].text +
      ", " +
      province.options[province.selectedIndex].text;
    if (
      checkPhone === false ||
      phoneNumber.length < 1 ||
      username.length < 1 ||
      fullName.length < 1 ||
      checkEmail === false ||
      email.length < 1 ||
      birthday.length < 1 ||
      password.length < 1 ||
      document.getElementById("inputAddress").value 
    ){alert("Vui lòng nhập đúng và đầy đủ thông tin");}
    else {
      console.log(address);
      console.log([birthday[1], birthday[2], birthday[0]].join("-"));
      let formData = new FormData();
      formData.append("username", username);
      formData.append("phonenumber", phoneNumber);
      formData.append("fullname", fullName);
      formData.append("email", email);
      formData.append("birthday", birthday);
      formData.append("gender", gender);
      formData.append("password", password);  
      formData.append("address", address);
    } 
  };
  return (
    <div className="addAccount">
      <div className="title-addAccount">
        <h2>Thêm tài khoản</h2>
      </div>
      <div className="form">
          <div className="input-addAccount">
            <form>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label" for="inputUserName">
                    Tên đăng nhập *
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
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="inputPhone"
                    placeholder="Số điện thoại"
                    onChange={(e) =>
                      validate(0, e.target.value, setCheckPhone)
                    }
                  />
                  {checkPhone ? null : (
                    <p className="messageError">
                      Vui lòng nhập đúng số điện thoại
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" for="inputName">
                  Họ và tên *
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
                  Email *
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  onChange={(e) =>
                    validate(1, e.target.value, setCheckEmail)
                  }
                />
                {checkEmail ? null : (
                    <p className="messageError">Vui lòng nhập đúng Email</p>
                )}
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label" for="chooseImg">
                    Hình ảnh *
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="chooseImg"
                    placeholder="Chọn hình ảnh"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" for="chooseImg">
                    Hiển thị ảnh
                  </label>
                  <img
                    className="UploadImg"
                    src="http://res.cloudinary.com/dobsh4rbw/image/upload/v1639403956/commom/no-avt121321085832.png"
                    alt="UploadImg"
                  ></img>
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label" for="inputBirthday">
                    Ngày sinh *
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
                  Giới tính *
                </label>
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
                  <label className="textMale" for="inputMale">
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
                  <label className="textFemale" for="inputFemale">
                    Nữ
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label" for="inputPassword">
                    Mật khẩu *
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Mật khẩu"
                    onChange={(e) =>
                      validate(2, e.target.value, setCheckPass)
                    }
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" for="inputPasswordAgain">
                    Nhập lại mật khẩu *
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPasswordAgain"
                    placeholder="Nhập lại mật khẩu"
                    onChange={(e) =>
                      validate(2, e.target.value, setCheckPass)
                    }
                  />
                  {checkPassword ? null : (
                      <p className="messageError">
                        Nhập lại password không trùng khớp.
                      </p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label" for="selectCity">
                    Tỉnh/Thành Phố *
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
                  <label className="form-label" for="selectDistrict">
                    Quận/Huyện *
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
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" for="inputAddress">
                  Địa chỉ *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Địa chỉ"
                />
              </div>
              <div className="mb-3">
                <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary btn-color">
                  Thêm
                </button>
                <button
                  type="submit"
                  onClick={() => props.switch(1)}
                  className="btn btn-primary btn-color btn-comeback"
                >
                  Quay trở lại danh sách
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}

export default AddAccount;
