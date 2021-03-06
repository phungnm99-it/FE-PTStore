import React, { useState, useEffect } from 'react';
import userApi from '../../api/userApi';
import "../../css/shipper/EditInfo.css"
import { getProvinces } from '../../service/provinces-service';
import { timeFormatInputUser } from '../../utils/dateUtils';
function EditInfo (props) {
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
            });
        }, []); */
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
              alert("H??? v?? t??n kh??ng ???????c ????? tr???ng!");
            } else {
              if (address === "") {
                alert("?????a ch??? kh??ng ???????c ????? tr???ng!");
              } else {
                let formData = new FormData();
                formData.append("FullName", fullName);
                formData.append("Gender", gender);
                formData.append("Birthday", birthday);
                formData.append("Address", address);
        
                userApi.updateInfo(formData).then((res) => {
                  if (res.code === "401") {
                    alert("?????i th??ng tin kh??ng th??nh c??ng!");
                  } else {
                    alert("?????i th??ng tin th??nh c??ng!");
                    props.switch(1);
                  }
                });
              }
            }
          };
    return (
        <div>
            <div className="editInfo">
                <div className="title-addAccount">
                    <h2>Ch???nh s???a t??i kho???n</h2>
                </div>
                <div className="form">
                    <div className="input-addAccount">
                        <form>
                        
                        <div className="row">
                            <div className="mb-3 col-md-6">
                            <label className="form-label" for="inputUserName">
                                T??n ????ng nh???p
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="UserName"
                                placeholder="T??n ????ng nh???p"
                                value={info.username || ""}
                                readOnly
                            />
                            </div>
                            <div className="mb-3 col-md-6">
                            <label className="form-label" for="inputPhone">
                                S??? ??i???n tho???i
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                value={info.phoneNumber || ""}
                                id="PhoneNumber"
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
                            id="FullName"
                            placeholder="H??? v?? t??n"
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
                            id="Email"
                            placeholder="Email"
                            readOnly
                            />
                        </div>
                        
                        <div className="row">
                            <div className="mb-3 col-md-6">
                            <label className="form-label" for="inputBirthday">
                                Ng??y sinh
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="UserBirthDate"
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
                            id="Address"
                            placeholder="?????a ch???"
                            />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary btn-color"
                            onClick={(e) => handleChangeInfo(e)}>
                            C???p Nh???t
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