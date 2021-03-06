import React, { useState, useEffect } from "react";
import "../../css/common/Register.css";
import { getProvinces } from "../../service/provinces-service";
import userApi from "../../api/userApi";
import { useHistory } from "react-router-dom";
import { validate } from "../../utils/validateInput";
function Register() {
  //const [sexInfo, setSex] = useState(0);
  // state tinh, state quan
  const history = useHistory();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistrict] = useState([]);
  // validate bao nhieu dong thi bay nhiu state
  const [checkPhone, setCheckPhone] = useState(true);
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPassword, setCheckPass] = useState(true);

  useEffect(() => {
    // lay tinh tu api
    getProvinces().then((res) => {
      setProvinces(res.data);
      setDistrict(res.data[0].districts);
    });
  }, []);
  // lay quan tu ma tinh
  const getDistrictFromCode = (code) => {
    let filter = provinces.filter((x) => x.code.toString() === code);
    filter.length > 0 ? setDistrict(filter[0].districts) : setDistrict([]);
  };

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
    // neu validate === false hoac chuoi rong thi k cho no post
    if (
      checkPhone === false ||
      phoneNumber.length < 1 ||
      username.length < 1 ||
      fullName.length < 1 ||
      checkEmail === false ||
      email.length < 1 ||
      document.getElementById("inputAddress").value === "" ||
      password.length < 1
    ) {
      alert("Vui l??ng nh???p ????ng v?? ?????y ????? th??ng tin");
    } else {
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
          alert("????ng k?? th??nh c??ng, vui l??ng ????ng nh???p");
          history.push("/login");
        }
      });
    }
  };

  return (
    <div>
      <div className="pageRegister">
        <div className="midRegister">
          <div className="registerForm">
            <div className="form">
              <div className="title-addAccount">
                <h2>????NG K?? T??I KHO???N</h2>
              </div>
              <div className="input-register">
                <form>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputUserName">
                        T??n ????ng nh???p
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputUserName"
                        placeholder="T??n ????ng nh???p"
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputPhone">
                        S??? ??i???n tho???i
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="inputPhone"
                        placeholder="S??? ??i???n tho???i"
                        onChange={(e) =>
                          validate(0, e.target.value, setCheckPhone)
                        }
                      />
                      {checkPhone ? null : (
                        <p className="messageError">
                          Vui l??ng nh???p ????ng s??? ??i???n tho???i
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="inputName">
                      H??? v?? t??n
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="H??? v?? t??n"
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
                      onChange={(e) =>
                        validate(1, e.target.value, setCheckEmail)
                      }
                    />
                  </div>
                  {checkEmail ? null : (
                    <p className="messageError">Vui l??ng nh???p ????ng Email</p>
                  )}
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label
                        className="form-label label-birthday"
                        for="inputBirthday"
                      >
                        Ng??y sinh
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="inputBirthday"
                        placeholder="Ng??y sinh"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="inputSex">
                      Gi???i t??nh:
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
                        value="N???"
                      />{" "}
                      <label className="textFemale" for="inputFemale">
                        N???
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="inputPassword">
                      M???t kh???u
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="M???t kh???u"
                      onChange={(e) =>
                        validate(2, e.target.value, setCheckPass)
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="inputPasswordAgain">
                      Nh???p l???i m???t kh???u
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPasswordAgain"
                      placeholder="Nh???p l???i m???t kh???u"
                      onChange={(e) =>
                        validate(2, e.target.value, setCheckPass)
                      }
                    />
                    {checkPassword ? null : (
                      <p className="messageError">
                        Nh???p l???i password kh??ng tr??ng kh???p.
                      </p>
                    )}
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label label-city" for="selectCity">
                        T???nh/Th??nh Ph???
                      </label>
                      <div className="controls">
                        <select
                          name="SystemCityID"
                          id="SystemCityID"
                          placeholder="T???nh/Th??nh ph???"
                          onChange={(e) => {
                            getDistrictFromCode(e.target.value);
                          }}
                        >
                          <option className="textSelectCity" value="">
                            T???nh/Th??nh Ph???
                          </option>
                          {/* maps tinh thanh option */}
                          {provinces.map((pro, idx) => {
                            return (
                              <option
                                key={idx}
                                value={pro.code}
                                selected={idx === 0}
                              >
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
                        Qu???n/Huy???n
                      </label>
                      <div className="controls">
                        <select
                          id="SystemDistrictID"
                          name="SystemDistrictID"
                          placeholder="Qu???n/Huy???n"
                          data-required="1"
                        >
                          {" "}
                          {districts?.map((dis, idx) => {
                            return (
                              <option
                                key={idx}
                                value={dis.code}
                                selected={idx === 0}
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
                      ?????a ch???
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="?????a ch???"
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      onClick={(e) => handleSubmit(e)}
                      className="btn btn-primary btn-color"
                    >
                      ????NG K??
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
