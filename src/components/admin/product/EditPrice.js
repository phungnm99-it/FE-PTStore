import React, { useEffect } from "react";
import productApi from "../../../api/productApi";
import "../../../css/admin/product/EditPrice.css";
function EditPrice(props) {
  useEffect(() => {
    console.log(props.product);
    if (props.product) {
      setValue();
    }
  }, []);
  const setValue = () => {
    document.getElementById("inputNameProduct").value =
      props.product.name || "";
    document.getElementById("inputPriceProduct").value =
      props.product.price || "";
    document.getElementById("inputCurrentPriceProduct").value =
      props.product.currentPrice || "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let id = document.getElementById("inputIDProduct").value;
    let name = document.getElementById("inputNameProduct").value;
    let price = document.getElementById("inputPriceProduct").value;
    let currentPrice = document.getElementById(
      "inputCurrentPriceProduct"
    ).value;
    if (price.length < 1 || currentPrice.length < 1) {
      alert("Vui lòng nhập đúng và đầy đủ thông tin");
    } else {
      let formData = new FormData();
      formData.append("Id", id);
      formData.append("Name", name);
      formData.append("Price", price);
      formData.append("CurrentPrice", currentPrice);

      productApi.updatePrice(formData).then((res) => {
        if (res.code === 401) {
          alert("Cập nhật thất bại!");
        } else {
          alert("Cập nhật thành công!");
          props.switch(13);
        }
      });
    }
  };
  return (
    <div>
      <div className="editProductPrice">
        <div className="title-addAccount">
          <h2>Cập nhật giá sản phẩm</h2>
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
                  className="form-control"
                  value={props.product.id || ""}
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
              <div className="mb-3">
                <label className="form-label" for="inputPriceProduct">
                  Giá niêm yết
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPriceProduct"
                  placeholder="Giá niêm yết"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" for="inputCurrentPriceProduct">
                  Giá hiện tại
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCurrentPriceProduct"
                  placeholder="Giá hiện tại"
                  required
                />
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
                  onClick={() => props.switch(13)}
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

export default EditPrice;
