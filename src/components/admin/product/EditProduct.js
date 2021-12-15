import React, { useEffect, useState } from "react";
import "../../../css/admin/product/EditProduct.css";

function EditProduct(props) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    console.log(props.product)
    if(props.product){
      setValue();
    }

  }, []);

  const setValue = () => {
    document.getElementById("inputNameProduct").value = props.product.name|| "";
    document.getElementById("inputColor").value = props.product.color|| "";
    document.getElementById("SystemBrandID").value = props.product.brandName ||"";
    document.getElementById("inputScreenResolution").value = props.product.screenResolution ||"";
    document.getElementById("inputScreenSize").value = props.product.screenSize ||"";
    document.getElementById("inputScreenTech").value = props.product.screenTech ||"";
    document.getElementById("inputOS").value = props.product.os||"";
    document.getElementById("inputCPU").value = props.product.cpu ||"";
    document.getElementById("inputGPU").value = props.product.gpu ||"";
    document.getElementById("inputFrontCamera").value = props.product.frontCamera ||"";
    document.getElementById("inputBackCamera").value = props.product.backCamera ||"";
    document.getElementById("inputRAM").value = props.product.ram ||"";
    document.getElementById("inputROM").value = props.product.rom ||"";
    document.getElementById("inputSIM").value = props.product.sim ||"";
    document.getElementById("inputWifi").value = props.product.wifi ||"";
    document.getElementById("inputGPS").value = props.product.gps ||"";
    document.getElementById("inputPin").value = props.product.battery ||"";
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    //Chưa let hình ảnh
    let id = document.getElementById ("inputIDProduct").value;
    let name = document.getElementById("inputNameProduct").value;
    let brandName = document.getElementById("SystemBrandID").value;
    let color = document.getElementById("inputColor").value;
    let screenResolution = document.getElementById("inputScreenResolution").value;
    let screenSize = document.getElementById ("inputScreenSize").value;
    let screenTech = document.getElementById ("inputScreenTech").value;
    let os = document.getElementById ("inputOS").value;
    let cpu = document.getElementById ("inputCPU").value;
    let gpu = document.getElementById ("inputGPU").value;
    let frontCamera = document.getElementById ("inputFrontCamera").value;
    let backCamera = document.getElementById ("inputBackCamera").value;
    let ram = document.getElementById ("inputRAM").value;
    let rom = document.getElementById ("inputROM").value;
    let sim = document.getElementById ("inputSIM").value;
    let wifi = document.getElementById ("inputWifi").value; 
    let gps = document.getElementById ("inputGPS").value;
    let battery = document.getElementById ("inputBattery").value;
    if (
      name.length < 1 ||
      brandName.length < 1 ||
      color.length < 1 ||
      screenResolution.length < 1 ||
      screenSize.length < 1||
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
      battery.length < 1
    ){alert("Vui lòng nhập đúng và đầy đủ thông tin");}
    else{
      let formData = new FormData();
      formData.append ("Id", id);
      formData.append("Name", name);
      formData.append("BrandName", brandName);
      formData.append ("Color", color);
      formData.append("ScreenResolution", screenResolution);
      formData.append("ScreenSize", screenSize);
      formData.append("ScreenTech", screenTech);
      formData.append("Os", os);
      formData.append("Cpu", cpu);
      formData.append("Gpu",gpu);
      formData.append("FrontCamera", frontCamera);
      formData.append("BackCamera", backCamera);
      formData.append("Ram", ram);
      formData.append("Rom", rom);
      formData.append("Sim", sim);
      formData.append("Wifi",wifi);
      formData.append("Gps", gps);
      formData.append("Battery", battery);  
    }
    
  };
  return (
    <div>
      <div className="editProductInfo">
        <div className="title-addAccount">
          <h2>Sửa thông tin sản phẩm</h2>
        </div>
        <div className="form">
              
              <div className="input-addAccount">
                <form>
                  <div className="mb-3">
                    <label className="form-label" for="inputIDProduct">
                      Mã sản phẩm
                    </label>
                    <input
                      type="text"
                      value={props.product.id || ""}
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
                        id="inputColor"
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
                        src={props.product.imageUrl || "http://res.cloudinary.com/dobsh4rbw/image/upload/v1639403956/commom/no-avt121321085832.png"}
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
                  {/* <div className="mb-3 ">
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
                  </div> */}
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
                    <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary btn-color">
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

export default EditProduct;
