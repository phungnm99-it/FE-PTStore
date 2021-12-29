import React, { useEffect, useState } from "react";
import "../../../css/admin/product/AddProduct.css";
import brandApi from "../../../api/brandApi";
import productApi from "../../../api/productApi";

function AddProduct(props) {
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    brandApi.getAll().then((res) => {
      setBrand(res.data);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    //Chưa let hình ảnh
    let name = document.getElementById("inputNameProduct").value;
    let brandName = document.getElementById("SystemBrandID").value;
    let color = document.getElementById("inputColor").value;
    let screenResolution = document.getElementById(
      "inputScreenResolution"
    ).value;
    let screenSize = document.getElementById("inputScreenSize").value;
    let screenTech = document.getElementById("inputScreenTech").value;
    let os = document.getElementById("inputOS").value;
    let cpu = document.getElementById("inputCPU").value;
    let gpu = document.getElementById("inputGPU").value;
    let frontCamera = document.getElementById("inputFrontCamera").value;
    let backCamera = document.getElementById("inputBackCamera").value;
    let ram = document.getElementById("inputRAM").value;
    let rom = document.getElementById("inputROM").value;
    let sim = document.getElementById("inputSIM").value;
    let wifi = document.getElementById("inputWifi").value;
    let gps = document.getElementById("inputGPS").value;
    let battery = document.getElementById("inputBattery").value;
    let image = document.getElementById("chooseImg");

    if (
      name.length < 1 ||
      brandName.length < 1 ||
      color.length < 1 ||
      screenResolution.length < 1 ||
      screenSize.length < 1 ||
      screenTech.length < 1 ||
      os.length < 1 ||
      cpu.length < 1 ||
      gpu.length < 1 ||
      frontCamera.length < 1 ||
      backCamera.length < 1 ||
      ram.length < 1 ||
      rom.length < 1 ||
      sim.length < 1 ||
      wifi.length < 1 ||
      gps.length < 1 ||
      battery.length < 1 ||
      image.files.length === 0
    ) {
      alert("Vui lòng nhập đúng và đầy đủ thông tin");
    } else {
      let formData = new FormData();
      formData.append("Name", name);
      formData.append("BrandName", brandName);
      formData.append("Color", color);
      formData.append("ScreenResolution", screenResolution);
      formData.append("ScreenSize", screenSize);
      formData.append("ScreenTech", screenTech);
      formData.append("Os", os);
      formData.append("Cpu", cpu);
      formData.append("Gpu", gpu);
      formData.append("FrontCamera", frontCamera);
      formData.append("BackCamera", backCamera);
      formData.append("Ram", ram);
      formData.append("Rom", rom);
      formData.append("Sim", sim);
      formData.append("Wifi", wifi);
      formData.append("Gps", gps);
      formData.append("Battery", battery);
      formData.append("Image", image.files[0]);

      productApi.create(formData).then((res) => {
        if (res.code === 401) {
          alert("Sản phẩm đã tồn tại!");
        } else {
          alert("Thêm sản phẩm thành công!");
          props.switch(12);
        }
      });
    }
  };
  return (
    <div>
      <div className="addProduct">
        <div className="title-addAccount">
          <h2>Thêm sản phẩm</h2>
        </div>
        <div className="form">
          <div className="input-addAccount">
            <form>
              <div className="mb-3">
                <label className="form-label" for="inputNameProduct">
                  Tên sản phẩm *
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
                    Thương hiệu *
                  </label>
                  <div className="controls">
                    <select
                      name="SystemBrandID"
                      id="SystemBrandID"
                      placeholder="Thương hiệu"
                    >
                      {brand.map((item, index) => {
                        return (
                          <option
                            key={index}
                            value={item.name}
                            selected={index === 0}
                          >
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" for="inputColor">
                    Màu sắc *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputColor"
                    placeholder="Màu sắc"
                    required
                  />
                </div>
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
                    accept="image/png, image/jpeg"
                    placeholder="Chọn hình ảnh"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" for="chooseImg">
                    Hiển thị ảnh
                  </label>
                  <img className="UploadImg" src="http://res.cloudinary.com/dobsh4rbw/image/upload/v1639403956/commom/no-avt121321085832.png" alt="UploadImg"></img>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-title">MÀN HÌNH</label>
              </div>
              <div className="mb-3">
                <label className="form-label" for="inputScreenResolution">
                  Độ phân giải *
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
                  Màn hình rộng *
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
                  Công nghệ màn hình *
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
                  Hệ điều hành *
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
                    Chip xử lý (CPU) *
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
                    Chip đồ họa (GPU) *
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
                    Camera trước *
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
                    Camera sau *
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
                    RAM *
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
                    Bộ nhớ trong *
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
                  Số khe SIM *
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
                  Wifi *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputWifi"
                  placeholder="Wifi"
                  required
                />
              </div>
              {/* <div className="mb-3 ">
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
                  </div> */}
              <div className="mb-3 ">
                <label className="form-label" for="inputGPS">
                  GPS *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputGPS"
                  placeholder="GPS"
                  required
                />
              </div>
              
              <div className="mb-3">
                <label className=" form-title">DUNG LƯỢNG PIN</label>
              </div>
              <div className="mb-3 ">
                <label className="form-label" for="inputBattery">
                  Dung lượng Pin *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputBattery"
                  placeholder="Dung lượng Pin"
                  required
                />
              </div>

              <div className="mb-3">
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className="btn btn-primary btn-color"
                >
                  Thêm
                </button>
                <button
                  type="submit"
                  onClick={() => props.switch(12)}
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

export default AddProduct;
