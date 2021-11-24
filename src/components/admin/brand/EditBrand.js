import React from "react";
import "../../../css/admin/brand/AddBrand.css";
import iconClose from "../../../images/iconClose.png";
import noAvt from "../../../images/no-avt.png";

function EditBrand() {
  return (
    <div>
      <div className="editBrand">
        <div className="jquery-modal blocker current">
          <div className="container modal">
            <div className="loginForm">
              <img className="icon-close" src={iconClose} />
            </div>
            <div className="form">
              <div className="title-addAccount">
                <h2>Chỉnh sửa thương hiệu</h2>
              </div>
              <div className="input-addAccount">
                <form>
                  <div className="mb-3">
                    <label className="form-label" for="inputIDBrand">
                      Mã thương hiệu
                    </label>
                    <input
                      type="text"
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

export default EditBrand;
