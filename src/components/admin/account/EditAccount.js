import React from "react";
import "../../../css/admin/account/EditAccount.css";
import iconClose from "../../../images/iconClose.png";
import noAvt from "../../../images/no-avt.png";

function EditAccount() {
  return (
    <div>
      <div className="editAccount">
        <div className="jquery-modal blocker current">
          <div className="container modal">
            <div className="loginForm">
              <img className="icon-close" src={iconClose} />
            </div>
            <div className="form">
              <div className="title-addAccount">
                <h2>Chỉnh sửa tài khoản</h2>
              </div>
              <div className="input-addAccount">
                <form>
                  <div className="mb-3">
                    <label className="form-label" for="inputIDAccount">
                      Mã tài khoản
                    </label>
                    <input
                      type="text"
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
                        src={noAvt}
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
                    <div className="mb-3 col-md-6">
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
                      <label className="form-label" for="selectCity">
                        Tỉnh/Thành Phố
                      </label>
                      <div className="controls">
                        <select
                          name="SystemCityID"
                          id="SystemCityID"
                          placeholder="Tỉnh/Thành phố"
                        >
                          <option className="textSelectCity" value="">
                            Tỉnh/Thành Phố
                          </option>
                          <option value="1">Hà Nội</option>
                          <option value="50">TP HCM</option>
                          <option value="57">An Giang</option>
                          <option value="49">Bà Rịa</option>
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
                          <option value="">Quận/Huyện</option>
                          <option value="591">Thành phố Mỹ Tho</option>
                          <option value="592">Thị xã Gò Công</option>
                          <option value="593">Thị xã Cai Lậy</option>
                          <option value="594">Huyện Tân Phước</option>
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
                    <button type="submit" class="btn btn-primary btn-color">
                      Cập Nhật
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

export default EditAccount;
