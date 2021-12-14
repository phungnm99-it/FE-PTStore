import React, { useState, useEffect } from 'react';
import { getProvinces } from '../../../service/provinces-service';
import "../../../css/admin/adminInfo/EditInfo.css"
import userApi from '../../../api/userApi';
import { timeFormatInputUser } from '../../../utils/dateUtils';
function EditInfo () {
    // state tinh, state quan
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistrict] = useState([]);
  const [info, setInfo] = useState({});
  useEffect(() => {
    userApi.getInfo().then((response) => {
        console.log(timeFormatInputUser(response.data.birthday));
        console.log(response.data);
        document.getElementById("UserBirthDate").value = timeFormatInputUser(
          response.data.birthday || Date.now()
        );
        setInfo(response.data);
  
        if (response.data.gender === "Nam") {
          document.getElementById("Male").checked = true;
        } else {
          document.getElementById("Female").checked = true;
        }
  
        document.getElementById("Address").value = response.data.address || "";
        document.getElementById("FullName").value = response.data.fullName || "";
      });
    }, []);
    // lay tinh tu api
    /* getProvinces().then((res) => {
      console.log(res.data);
      setProvinces(res.data);
    }); */
  // lay quan tu ma tinh
  /* const getDistrictFromCode = (code) => {
    let filter = provinces.filter((x) => x.code.toString() === code);
    filter.length > 0 ? setDistrict(filter[0].districts) : setDistrict([]);
  }; */

  const handleChangeInfo = (e) => {
    e.preventDefault();
    
    let fullName = document.getElementById("FullName").value;
    let gender = document.querySelector('input[name="sex"]:checked').value;
    let birthday = document.getElementById("UserBirthDate").value;
    let address = document.getElementById("Address").value;


    if (fullName === "") {
      alert("Họ và tên không được để trống!");
    } else {
      if (address === "") {
        alert("Địa chỉ không được để trống!");
      } else {
        let formData = new FormData();
        formData.append("FullName", fullName);
        formData.append("Gender", gender);
        formData.append("Birthday", birthday);
        formData.append("Address", address);

        userApi.updateInfo(formData).then((res) => {
          if (res.code === "401") {
            alert("Đổi thông tin không thành công!");
          } else {
            alert("Đổi thông tin thành công!");
          }
        });
      }
    }
  };
    return (
        <div>
            <div className="editInfo">
                <div className="title-addAccount">
                <h2>Chỉnh sửa tài khoản</h2>
                </div>
                <div className="form">
                    <div className="input-addAccount">
                        <form>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                <label className="form-label" for="inputUserName">
                                    Tên đăng nhập
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="UserName"
                                    name="UserName"
                                    placeholder="Tên đăng nhập"
                                    value={info.username || ""}
                                    readOnly
                                />
                                </div>
                                <div className="mb-3 col-md-6">
                                <label className="form-label" for="inputPhone">
                                    Số điện thoại
                                </label>
                                <input
                                    type="tel"
                                    value={info.phoneNumber || ""}
                                    className="form-control"
                                    id="PhoneNumber"
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
                                value={info.fullName || ""}
                                className="form-control"
                                name="FullName"
                                id="FullName"
                                placeholder="Họ và tên"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" for="inputEmail">
                                Email
                                </label>
                                <input
                                type="email"
                                value={info.email || ""}
                                className="form-control"
                                name="Email"
                                id="Email"
                                placeholder="Email"
                                readOnly
                                />
                            </div>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                <label className="form-label" for="inputBirthday">
                                    Ngày sinh
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="UserBirthDate"
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
                                    {/* maps tinh thanh option 
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
                                value={info.address || ""}
                                className="form-control"
                                name="Address"
                                id="Address"
                                placeholder="Địa chỉ"
                                />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary btn-color"
                                onClick={(e) => handleChangeInfo(e)}>
                                Cập Nhật
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditInfo;