import React from 'react';
import '../../../css/admin/product/EditPrice.css'
function EditPrice (){
    const handleSubmit = (e) => {
        e.preventDefault();

        let id = document.getElementById("inputIDProduct").value;
        let name = document.getElementById("inputNameProduct").value;
        let price = document.getElementById("inputPriceProduct").value;
        let currentPrice = document.getElementById("inputCurrentPriceProduct").value;
        let formData = new FormData();
        formData.append("Id", id);
        formData.append("Name", name);
        formData.append("Price", price);
        formData.append("CurrentPrice", currentPrice);
    };
    return (
        <div>
            <div className="editProductPrice">
                <div className="title-addAccount">
                <h2>Sửa giá sản phẩm</h2>
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

export default EditPrice;