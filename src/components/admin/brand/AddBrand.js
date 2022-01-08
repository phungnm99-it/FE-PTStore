import React, { useState } from "react";
import { useHistory } from "react-router";
import "../../../css/admin/brand/AddBrand.css";

function AddBrand(props) {
  const history = useHistory();
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    if (name !== "") {
      // await
      props.switch(8);
    } else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
  };

  const handleChange = () => {
    const [file] = document.getElementById("chooseImg").files;
    if (file) {
      let url = URL.createObjectURL(file);
      let show = document.getElementById("imgShow");
      show.src = url;
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
                  Tên thương hiệu *
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
                    Hình ảnh *
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="chooseImg"
                    onChange={() => handleChange()}
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
                    id="imgShow"
                  ></img>
                </div>
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
                  onClick={() => props.switch(8)}
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

export default AddBrand;
