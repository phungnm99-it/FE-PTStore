import React, { useState, useEffect } from "react";
import "../../../css/admin/brand/AddBrand.css";
import noAvt from "../../../images/no-avt.png";

function AddBrand(props) {
  const [name, setName] = useState("");
  useEffect(() => {
    document.getElementById("buttonRedirect").style.visibility = "hidden";
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      console.log("go this");
      document.getElementById("buttonRedirect").click();
    } else {
      alert("Nhap name!");
    }
  };
  return (
    <div>
      <div className="addBrand">
        <div className="title-addAccount">
          <h2>Thêm thương hiệu</h2>
        </div>
        <div className="form">
          <div className="input-addAccount">
            <form>
              <div className="mb-3">
                <label className="form-label" for="inputNameBrand">
                  Tên thương hiệu
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  id="inputNameBrand"
                  placeholder="Tên thương hiệu"
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
                  <img className="UploadImg" src={noAvt} alt="UploadImg"></img>
                </div>
              </div>

              <div className="mb-3">
                <button
                  onClick={(e) => handleSubmit(e)}
                  class="btn btn-primary btn-color"
                >
                  Thêm
                </button>
              </div>
              <div>
                <button onClick={() => props.switch(8)} id="buttonRedirect">
                  Redirect
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBrand;
