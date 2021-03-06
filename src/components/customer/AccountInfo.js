import React, { useState, useEffect } from "react";
import "../../css/customer/accountInfo.css";
import ChangePassword from "./ChangePassword";
import { getProvinces } from "../../service/provinces-service";
import userApi from "../../api/userApi";
import Modal from "react-modal";
import { customStyles } from "../../utils/cssUtils";
import Auth from "../../config/auth";
import { timeFormatInputUser } from "../../utils/dateUtils";

function AccountInfo() {
  const [modalIsOpen, setIsOpen] = useState(false);
  // state tinh, state quan
  // const [provinces, setProvinces] = useState([]);
  // const [districts, setDistrict] = useState([]);
  const [info, setInfo] = useState({});
  useEffect(() => {
    // lay tinh tu api
    // getProvinces().then((res) => {
    //   setProvinces(res.data);
    //   setDistrict(res.data[0].districts);
    // });

    userApi.getInfo().then((response) => {
      console.log(timeFormatInputUser(response.data.birthday));
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
  // lay quan tu ma tinh
  // const getDistrictFromCode = (code) => {
  //   let filter = provinces.filter((x) => x.code.toString() === code);
  //   filter.length > 0 ? setDistrict(filter[0].districts) : setDistrict([]);
  // };

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
          }
        });
      }
    }
  };

  return (
    <div>
      <section className="account">
        <div className="accountInfo">
          <div className="body-content">
            <h1>TH??NG TIN T??I KHO???N</h1>
            <div className="account-layout">
              <div className="row equaHeight" data-obj=".col .box-bg-white">
                <div className="col col-lg">
                  <div className="box-bg-white">
                    <div className="account-form">
                      <div>
                        {Auth.isGoogleLogin() ? (
                          <div></div>
                        ) : (
                          <div className="form-controls">
                            <label>T??n ????ng nh???p:</label>
                            <div className="controls">
                              <input
                                className="form-input"
                                type="text"
                                value={info.username}
                                name="UserName"
                                id="UserName"
                                placeholder="T??n ????ng nh???p"
                                readOnly
                              />
                            </div>
                          </div>
                        )}
                        <div className="form-controls">
                          <label>H??? v?? t??n:</label>
                          <div className="controls">
                            <input
                              className="form-input"
                              type="text"
                              name="FullName"
                              id="FullName"
                              placeholder="H??? v?? t??n"
                            />
                          </div>
                        </div>

                        <div className="form-controls">
                          <label>??i???n tho???i:</label>
                          <div className="controls">
                            <input
                              className="form-input"
                              type="tel"
                              value={info.phoneNumber || ""}
                              id="PhoneNumber"
                              placeholder="??i???n tho???i *"
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
                          <label>Ng??y th??ng n??m sinh:</label>
                          <div className="controls">
                            <input className="form-input inputBirthday" type="date" id="UserBirthDate" />
                          </div>
                        </div>
                        <div className="form-controls">
                          <label>Gi???i t??nh:</label>
                          <div className="controls">
                            <input
                              className="radioMale"
                              type="radio"
                              id="Male"
                              name="sex"
                              value="Nam"
                            />
                            ??{" "}
                            <label className="textMale" for="html">
                              Nam
                            </label>
                            ??
                            <input
                              className="radioFemale"
                              type="radio"
                              id="Female"
                              name="sex"
                              value="N???"
                            />
                            ??{" "}
                            <label className="textFemale" for="css">
                              N???
                            </label>
                          </div>
                          <br />
                        </div>

                        {/* <div className="form-controls">
                          <label>T???nh/Th??nh ph???:</label>
                          <div className="controls"> */}
                        {/* <select
                              name="SystemCityID"
                              id="SystemCityID"
                              placeholder="T???nh/Th??nh ph???"
                              onChange={(e) => {
                                getDistrictFromCode(e.target.value);
                              }}
                            > */}
                        {/* <option>Ch???n t???nh/th??nh ph???</option> */}
                        {/* maps tinh thanh option
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
                              })} */}
                        {/* </select> */}
                        {/* </div>
                        </div> */}

                        {/* <div className="form-controls">
                          <label>Qu???n/Huy???n:</label>
                          <div class="controls">
                            <select
                              id="SystemDistrictID"
                              name="SystemDistrictID"
                              placeholder="Qu???n/Huy???n *"
                              data-required="1"
                            > */}
                        {/* {" "} */}
                        {/* {districts?.map((dis, idx) => {
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
                              })} */}
                        {/* </select>
                          </div>
                        </div> */}

                        <div className="form-controls">
                          <label>?????a ch???:</label>
                          <div className="controls">
                            <input
                              className="form-input"
                              type="text"
                              name="Address"
                              id="Address"
                              placeholder="?????a ch??? *"
                              data-required="1"
                            />
                          </div>
                        </div>

                        <div className="form-controls">
                          <div className="controls submit-controls">
                            <div className="col-md-10">
                              <button
                                className="btn-editInfo"
                                onClick={(e) => handleChangeInfo(e)}
                              >
                                C???P NH???T
                              </button>
                            </div>
                            {Auth.isGoogleLogin() ? (
                              <div></div>
                            ) : (
                              <div className="col-md-4">
                                <button
                                  className="btn-changePass"
                                  onClick={() => {
                                    setIsOpen(true);
                                  }}
                                >
                                  ?????I M???T KH???U
                                </button>
                              </div>
                            )}
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
        {/* modal m???i */}

        {/* ?????i t???t c??? modal th??nh c??i n??y h???t  */}
        {/* ki???m tra state n??o ????? m??? modal - trong tr?????ng h???p n??y l?? modalIsOpen */}
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <ChangePassword onCLose={() => setIsOpen(false)} />
        </Modal>
        {/* modal c?? */}
        {/* {modalIsOpen && <ChangePassword onCLose={() => setIsOpen(false)} />} */}
      </section>
    </div>
  );
}

export default AccountInfo;
