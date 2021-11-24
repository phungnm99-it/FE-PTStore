import React from "react";
import "../../../css/admin/product/EditProduct.css";
import iconClose from "../../../images/iconClose.png";
import noAvt from "../../../images/no-avt.png";

function EditProduct() {
  return (
    <div>
      <div className="editProductInfo">
        <div className="jquery-modal blocker current">
          <div className="container modal">
            <div className="loginForm">
              <img className="icon-close" src={iconClose} />
            </div>
            <div className="form">
              <div className="title-addAccount">
                <h2>Sửa thông tin sản phẩm</h2>
              </div>
              <div className="input-addAccount">
                <form>
                  <div className="mb-3">
                    <label className="form-label" for="inputIDProduct">
                      Mã sản phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputIDProduct"
                      placeholder="Mã sản phẩm"
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="inputNameProduct">
                      Tên sản phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputNameProduct"
                      placeholder="Tên sản phẩm"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputBrandOfProduct">
                        Thương hiệu
                      </label>
                      <div className="controls">
                        <select
                          name="SystemBrandID"
                          id="SystemBrandID"
                          placeholder="Thương hiệu"
                        >
                          <option className="textSelectBrand" value="">
                            Chọn thương hiệu
                          </option>
                          <option value="1">Iphone</option>
                          <option value="2">SamSung</option>
                          <option value="3">Xiaomi</option>
                          <option value="4">Oppo</option>
                          <option value="5">Vivo</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputColor">
                        Màu sắc
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputUserName"
                        placeholder="Màu sắc"
                        required
                      />
                    </div>
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
                  <div className="mb-3">
                    <label className="form-title">MÀN HÌNH</label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="inputScreenResolution">
                      Độ phân giải
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputScreenResolution"
                      placeholder="Độ phân giải"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="inputScreenSize">
                      Màn hình rộng
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputScreenSize"
                      placeholder="Màn hình rộng"
                      required
                    />
                  </div>
                  <div className="mb-3 ">
                    <label className="form-label" for="inputScreenTech">
                      Công nghệ màn hình
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputScreenTech"
                      placeholder="Công nghệ màn hình"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-title">HỆ ĐIỀU HÀNH & CPU</label>
                  </div>
                  <div className="mb-3 ">
                    <label className="form-label" for="inputOS">
                      Hệ điều hành
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputOS"
                      placeholder="Hệ điều hành"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputCPU">
                        Chip xử lý (CPU)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCPU"
                        placeholder="CPU"
                        required
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputGPU">
                        Chip đồ họa (GPU)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputGPU"
                        placeholder="GPU"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-title">CAMERA</label>
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputFrontCamera">
                        Camera trước
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputFrontCamera"
                        placeholder="RAM"
                        required
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputBackCamera">
                        Camera sau
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputBackCamera"
                        placeholder="Camera sau"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-title">BỘ NHỚ VÀ LƯU TRỮ</label>
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputRAM">
                        RAM
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputRAM"
                        placeholder="RAM"
                        required
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label" for="inputROM">
                        Bộ nhớ trong
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputROM"
                        placeholder="Bộ nhớ trong"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-title">KẾT NỐI</label>
                  </div>
                  <div className="mb-3 ">
                    <label className="form-label" for="inputSIM">
                      Số khe SIM
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputSIM"
                      placeholder="Số khe SIM"
                      required
                    />
                  </div>
                  <div className="mb-3 ">
                    <label className="form-label" for="inputWifi">
                      Wifi
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputWifi"
                      placeholder="Wifi"
                      required
                    />
                  </div>
                  <div className="mb-3 ">
                    <label className="form-label" for="inputBluetooth">
                      Bluetooth
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputBluetooth"
                      placeholder="Bluetooth"
                      required
                    />
                  </div>
                  <div className="mb-3 ">
                    <label className="form-label" for="inputGPS">
                      GPS
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputGPS"
                      placeholder="GPS"
                      required
                    />
                  </div>
                  <div className="mb-3 ">
                    <label className="form-label" for="inputGPS">
                      Cổng kết nối/ Sạc
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputGPS"
                      placeholder="Cổng kết nối/ Sạc"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className=" form-title">DUNG LƯỢNG PIN</label>
                  </div>
                  <div className="mb-3 ">
                    <label className="form-label" for="inputPin">
                      Dung lượng Pin
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPin"
                      placeholder="Dung lượng Pin"
                      required
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

export default EditProduct;
