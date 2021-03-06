import React, { useState, useEffect } from "react";
import "../../../css/admin/account/EditAccount.css";
import { getProvinces } from "../../../service/provinces-service";
import { timeFormatInputUser } from "../../../utils/dateUtils";

function EditAccount(props) {
  // state tinh, state quan
  const [account, setAccount] = useState({});
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSProvince] = useState(0);
  const [districts, setDistrict] = useState([]);
  const [selectedDistrict, setSDistrict] = useState(0);
  useEffect(() => {
    // lay tinh tu api
    console.log(props.account)
    /* setProvinces(res.data);
    setDistrict(res.data[0].districts); */
    /* getProvinces().then((res) => {
      console.log(res.data); */
      // if(props.account){
      //   let getProvinces = res.data.findIndex(x => props.account.address.includes(x));
      //   if(getProvinces < 0){
      //     let getDistrict = res.data.findIndex(x => x.);
      //   } else {
      //     setSProvince(getProvinces);
      //   }

      // } 

    /* }); */
    if(props.account){
      setValue();
    }

  }, []);
  const setValue = () => {
    document.getElementById("inputName").value = props.account.fullName || "";
    
    console.log(timeFormatInputUser(props.account.birthday));
      document.getElementById("inputBirthday").value = timeFormatInputUser(
        props.account.birthday || Date.now()
      );
    if (props.account.gender === "Nam") {
      document.getElementById("Male").checked = true;
    } else {
      document.getElementById("Female").checked = true;
    }

    document.getElementById("inputAddress").value = props.account.address || "";
  }
  // lay quan tu ma tinh
  const getDistrictFromCode = (code) => {
    let filter = provinces.filter((x) => x.code.toString() === code);
    filter.length > 0 ? setDistrict(filter[0].districts) : setDistrict([]);
  };
  // 


  const handleSubmit = (e) => {
    e.preventDefault();
    let id = document.getElementById("inputIDAccount").value;
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

    if(
      fullName.length < 1 ||
      birthday.length < 1 ||
      gender.length < 1 || 
      province.length < 1 ||
      district.length < 1 ||
      address.length < 1 
    ){alert("Vui lòng nhập đúng và đầy đủ thông tin");}
    else{
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
    <div>
      <div className="editAccount">
        <div className="title-addAccount">
          <h2>Chỉnh sửa tài khoản</h2>
        </div>
        <div className="form">
              <div className="input-addAccount">
                <form>
                  <div className="mb-3">
                    <label className="form-label" for="inputIDAccount">
                      Mã tài khoản
                    </label>
                    <input
                      type="text"
                      value={props.account.id || ""}
                      className="form-control"
                      id="inputIDAccount"
                      placeholder="Mã tài khoản"
                      readOnly
                    />
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputUserName">
                        Tên đăng nhập
                      </label>
                      <input
                        type="text"
                        value={props.account.username || ""}
                        className="form-control"
                        id="inputUserName"
                        placeholder="Tên đăng nhập"
                        readOnly
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputPhone">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        value={props.account.phoneNumber || ""}
                        className="form-control"
                        id="inputPhone"
                        placeholder="Số điện thoại"
                        readOnly
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
                      value={props.account.email || ""}
                      className="form-control"
                      id="inputEmail"
                      placeholder="Email"
                      readOnly
                    />
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="chooseImg">
                        Hình ảnh
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
                        src={props.account.imageUrl || "http://res.cloudinary.com/dobsh4rbw/image/upload/v1639403956/commom/no-avt121321085832.png"}
                        alt="UploadImg"
                      ></img>
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputBirthday">
                        Ngày sinh
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="inputBirthday"
                        placeholder="Ngày sinh"
                      />
                    </div>
                    {/* <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputCreatedDate">
                        Ngày tạo tài khoản
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputCreatedDate"
                        placeholder="Ngày tạo tài khoản"
                        readOnly
                      />
                    </div> */}
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

                  {/* <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="selectCity">
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
                          {/* maps tinh thanh option }
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
                        </select>
                      </div>
                    </div>
                  </div> */}
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
                    <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary btn-color">
                      Cập Nhật
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
    </div>
  );
}

export default EditAccount;
