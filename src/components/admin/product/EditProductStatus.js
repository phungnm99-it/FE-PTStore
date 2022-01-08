import React, { useEffect } from "react";
import productApi from "../../../api/productApi";
import "../../../css/admin/product/EditProductStatus.css";
function EditProductStatus(props) {
  useEffect(() => {
    console.log(props.product);
    if (props.product) {
      setValue();
    }
  }, []);
  const setValue = () => {
    document.getElementById("inputNameProduct").value =
      props.product.name || "";
    document.getElementById("inputCurrentQuantity").value =
      props.product.stock || 0;
    document.getElementById("inputStatusProduct").value =
      props.product.status || "Đang kinh doanh";
    document.getElementById("checkbox-featuredProduct").checked =
      props.product.isFeatured;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let id = document.getElementById("inputIDProduct").value;
    let name = document.getElementById("inputNameProduct").value;
    let currentStock = document.getElementById("inputCurrentQuantity").value;
    let status = document.getElementById("inputStatusProduct").value;
    let featuredProduct = document.getElementById(
      "checkbox-featuredProduct"
    ).checked;

    if (currentStock.length < 1 || status.length < 1) {
      alert("Vui lòng nhập đúng và đầy đủ thông tin");
    } else {
      let formData = new FormData();
      formData.append("Id", id);
      formData.append("Name", name);
      formData.append("Stock", currentStock);
      formData.append("Status", status);
      formData.append("IsFeatured", featuredProduct);

      productApi.updateStock(formData).then((res) => {
        if (res.code === 401) {
          alert("Cập nhật thất bại");
        } else {
          alert("Cập nhật thành công!");
          props.switch(14);
        }
      });
    }
  };
  return (
    <div>
      <div className="editProductStatus">
        <div className="title-addAccount">
          <h2>Cập nhật tình trạng sản phẩm</h2>
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
                  readOnly
                />
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label" for="inputNameProduct">
                    Số lượng
                  </label>
                  <input
                    type="t"
                    className="form-control"
                    id="inputCurrentQuantity"
                    placeholder="Số lượng hiện tại"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">Tình trạng</label>
                  <select id="inputStatusProduct">
                    <option value="Đang kinh doanh">Đang kinh doanh</option>
                    <option value="Ngừng kinh doanh">Ngừng kinh doanh</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 checkbox-featuredProduct">
                <input type="checkbox" id="checkbox-featuredProduct" name="" />
                <label className="form-label" for="checkbox-featuredProduct">
                  Sản phẩm nổi bật
                </label>
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
                  type="submit"
                  onClick={() => props.switch(14)}
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

export default EditProductStatus;
