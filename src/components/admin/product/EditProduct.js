import React, { useEffect, useState } from "react";
import "../../../css/admin/product/EditProduct.css";
import brandApi from "../../../api/brandApi";
import productApi from "../../../api/productApi";

function EditProduct(props) {
  const [product, setProduct] = useState({});
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    if (props.product) {
      setValue();
    }
    brandApi.getAll().then((res) => {
      setBrands(res.data);
      document.getElementById("brandName").value = props.product.brandName;
    });
    document.getElementById("brandName").value = props.product.brandName;
  }, []);

  const handleChange = () => {
    const [file] = document.getElementById("chooseImg").files;
    if (file) {
      let url = URL.createObjectURL(file);
      let show = document.getElementById("imgShow");
      show.src = url;
    }
  };

  const setValue = () => {
    document.getElementById("inputNameProduct").value =
      props.product.name || "";
    document.getElementById("inputColor").value = props.product.color || "";
    document.getElementById("brandName").value = props.product.brandName || "";
    document.getElementById("inputScreenResolution").value =
      props.product.screenResolution || "";
    document.getElementById("inputScreenSize").value =
      props.product.screenSize || "";
    document.getElementById("inputScreenTech").value =
      props.product.screenTech || "";
    document.getElementById("inputOS").value = props.product.os || "";
    document.getElementById("inputCPU").value = props.product.cpu || "";
    document.getElementById("inputGPU").value = props.product.gpu || "";
    document.getElementById("inputFrontCamera").value =
      props.product.frontCamera || "";
    document.getElementById("inputBackCamera").value =
      props.product.backCamera || "";
    document.getElementById("inputRAM").value = props.product.ram || "";
    document.getElementById("inputROM").value = props.product.rom || "";
    document.getElementById("inputSIM").value = props.product.sim || "";
    document.getElementById("inputWifi").value = props.product.wifi || "";
    document.getElementById("inputGPS").value = props.product.gps || "";
    document.getElementById("inputBattery").value = props.product.battery || "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //Ch??a let h??nh ???nh
    let id = document.getElementById("inputIDProduct").value;
    let name = document.getElementById("inputNameProduct").value;
    let brandName = document.getElementById("brandName").value;
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
      battery.length < 1
    ) {
      alert("Vui l??ng nh???p ????ng v?? ?????y ????? th??ng tin");
    } else {
      let formData = new FormData();
      formData.append("Id", id);
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

      let image = document.getElementById("chooseImg");
      if (image.files.length > 0) {
        formData.append("image", image.files[0]);
      }

      productApi.update(formData).then((res) => {
        if (res.code === 401) {
          alert(
            "C???p nh???t th???t b???i, vui l??ng th??? l???i ho???c li??n h??? qu???n tr??? vi??n!"
          );
        } else {
          alert("C???p nh???t th??nh c??ng!");
          props.switch(12);
        }
      });
    }
  };
  return (
    <div>
      <div className="editProductInfo">
        <div className="title-addAccount">
          <h2>C???p nh???t th??ng tin s???n ph???m</h2>
        </div>
        <div className="form">
          <div className="input-addAccount">
            <form>
              <div className="mb-3">
                <label className="form-label" for="inputIDProduct">
                  M?? s???n ph???m
                </label>
                <input
                  type="text"
                  value={props.product.id || ""}
                  className="form-control"
                  id="inputIDProduct"
                  placeholder="M?? s???n ph???m"
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label className="form-label" for="inputNameProduct">
                  T??n s???n ph???m
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputNameProduct"
                  placeholder="T??n s???n ph???m"
                  required
                />
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label" for="inputBrandOfProduct">
                    Th????ng hi???u
                  </label>
                  <div className="controls">
                    <select
                      name="brandName"
                      id="brandName"
                      placeholder="Th????ng hi???u"
                    >
                      {brands.map((item, index) => {
                        return (
                          <option key={index} value={item.name}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" for="inputColor">
                    M??u s???c
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputColor"
                    placeholder="M??u s???c"
                    required
                  />
                </div>
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
                    onChange={() => handleChange()}
                    placeholder="Ch???n h??nh ???nh"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" for="chooseImg">
                    Hi???n th??? ???nh
                  </label>
                  <img
                    className="UploadImg"
                    src={
                      props.product.imageUrl ||
                      "http://res.cloudinary.com/dobsh4rbw/image/upload/v1639403956/commom/no-avt121321085832.png"
                    }
                    id="imgShow"
                    alt="UploadImg"
                  ></img>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-title">M??N H??NH</label>
              </div>
              <div className="mb-3">
                <label className="form-label" for="inputScreenResolution">
                  ????? ph??n gi???i
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputScreenResolution"
                  placeholder="????? ph??n gi???i"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" for="inputScreenSize">
                  M??n h??nh r???ng
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputScreenSize"
                  placeholder="M??n h??nh r???ng"
                  required
                />
              </div>
              <div className="mb-3 ">
                <label className="form-label" for="inputScreenTech">
                  C??ng ngh??? m??n h??nh
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputScreenTech"
                  placeholder="C??ng ngh??? m??n h??nh"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-title">H??? ??I???U H??NH & CPU</label>
              </div>
              <div className="mb-3 ">
                <label className="form-label" for="inputOS">
                  H??? ??i???u h??nh
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputOS"
                  placeholder="H??? ??i???u h??nh"
                  required
                />
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label" for="inputCPU">
                    Chip x??? l?? (CPU)
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
                    Chip ????? h???a (GPU)
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
                    Camera tr?????c
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
                <label className="form-title">B??? NH??? V?? L??U TR???</label>
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
                    B??? nh??? trong
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputROM"
                    placeholder="B??? nh??? trong"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-title">K???T N???I</label>
              </div>
              <div className="mb-3 ">
                <label className="form-label" for="inputSIM">
                  S??? khe SIM
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputSIM"
                  placeholder="S??? khe SIM"
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

              <div className="mb-3">
                <label className=" form-title">DUNG L?????NG PIN</label>
              </div>
              <div className="mb-3 ">
                <label className="form-label" for="inputBattery">
                  Dung l?????ng Pin
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputBattery"
                  placeholder="Dung l?????ng Pin"
                  required
                />
              </div>

              <div className="mb-3">
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className="btn btn-primary btn-color"
                >
                  C???p Nh???t
                </button>
                <button
                  type="submit"
                  onClick={() => props.switch(12)}
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

export default EditProduct;
