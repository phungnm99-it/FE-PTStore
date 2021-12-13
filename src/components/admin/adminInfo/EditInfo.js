import React, { useState, useEffect } from 'react';
import { getProvinces } from '../../../service/provinces-service';
import "../../../css/admin/adminInfo/EditInfo.css"
function EditInfo () {
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
            <div className="editInfo">
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
                                src="http://res.cloudinary.com/dobsh4rbw/image/upload/v1639403956/commom/no-avt121321085832.png"
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
    );
}

export default EditInfo;