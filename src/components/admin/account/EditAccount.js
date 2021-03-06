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
    ){alert("Vui l??ng nh???p ????ng v?? ?????y ????? th??ng tin");}
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
          <h2>Ch???nh s???a t??i kho???n</h2>
        </div>
        <div className="form">
              <div className="input-addAccount">
                <form>
                  <div className="mb-3">
                    <label className="form-label" for="inputIDAccount">
                      M?? t??i kho???n
                    </label>
                    <input
                      type="text"
                      value={props.account.id || ""}
                      className="form-control"
                      id="inputIDAccount"
                      placeholder="M?? t??i kho???n"
                      readOnly
                    />
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputUserName">
                        T??n ????ng nh???p
                      </label>
                      <input
                        type="text"
                        value={props.account.username || ""}
                        className="form-control"
                        id="inputUserName"
                        placeholder="T??n ????ng nh???p"
                        readOnly
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputPhone">
                        S??? ??i???n tho???i
                      </label>
                      <input
                        type="tel"
                        value={props.account.phoneNumber || ""}
                        className="form-control"
                        id="inputPhone"
                        placeholder="S??? ??i???n tho???i"
                        readOnly
                      />
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
                        H??nh ???nh
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="chooseImg"
                        placeholder="Ch???n h??nh ???nh"
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="chooseImg">
                        Hi???n th??? ???nh
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
                        Ng??y sinh
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="inputBirthday"
                        placeholder="Ng??y sinh"
                      />
                    </div>
                    {/* <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputCreatedDate">
                        Ng??y t???o t??i kho???n
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputCreatedDate"
                        placeholder="Ng??y t???o t??i kho???n"
                        readOnly
                      />
                    </div> */}
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
                      />
                      ??{" "}
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
                      ??{" "}
                      <label className="textFemale" for="inputFemale">
                        N???
                      </label>
                    </div>
                  </div>

                  {/* <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="selectCity">
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
                    <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary btn-color">
                      C???p Nh???t
                    </button>
                    <button
                      type="submit"
                      onClick={() => props.switch(1)}
                      className="btn btn-primary btn-color btn-comeback"
                    >
                      Quay tr??? l???i danh s??ch
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
