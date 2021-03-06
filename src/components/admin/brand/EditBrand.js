import React, { useEffect, useState } from "react";
import "../../../css/admin/brand/EditBrand.css";
import brandApi from "../../../api/brandApi";
function EditBrand(props) {
  const [brands, setBrands] = useState({});
  useEffect(() => {
    brandApi.getBrandById(props.brand.id).then((response) => {
      console.log(response.data);
      setBrands(response.data);
    });
    if (brands) {
      setValue();
    }
  }, [props.brand]);
  const setValue = () => {
    document.getElementById("inputNameBrand").value = props.brand.name || "";
  };

  const handleChange = () => {
    const [file] = document.getElementById("chooseImg").files;
    if (file) {
      let url = URL.createObjectURL(file);
      let show = document.getElementById("imgShow");
      show.src = url;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //chưa let hình
    let id = document.getElementById("inputIDBrand").value;
    let name = document.getElementById("inputNameBrand").value;
    let image = document.getElementById("chooseImg");

    let formData = new FormData();
    formData.append("Name", name);
    formData.append("Id", id);

    if (image.files.length > 0) {
      formData.append("Image", image.files[0]);
    }

    brandApi.update(formData).then((res) => {
      if (res.code === 401) {
        alert("Cập nhật thất bại! Tên thương hiệu đã tồn tại!");
      } else {
        alert("Cập nhật thành công!");
        props.switch(8);
      }
    });
  };
  return (
    <div>
      <div className="editBrand">
        <div className="title-addAccount">
          <h2>Cập nhật thương hiệu</h2>
        </div>
        <div className="form">
          <div className="input-addAccount">
            <form>
              <div className="mb-3">
                <label className="form-label" for="inputIDBrand">
                  Mã thương hiệu
                </label>
                <input
                  type="text"
                  value={props.brand.id || ""}
                  className="form-control"
                  id="inputIDBrand"
                  placeholder="Mã thương hiệu"
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label className="form-label" for="inputNameBrand">
                  Tên thương hiệu
                </label>
                <input
                  type="text"
                  className="form-control"
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
                    src={
                      props.brand.imageUrl ||
                      "http://res.cloudinary.com/dobsh4rbw/image/upload/v1639403956/commom/no-avt121321085832.png"
                    }
                    id="imgShow"
                    alt="UploadImg"
                  ></img>
                </div>
              </div>

              <div className="mb-3">
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className="btn btn-primary btn-color"
                >
                  Cập Nhật
                </button>
                <button
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

export default EditBrand;
