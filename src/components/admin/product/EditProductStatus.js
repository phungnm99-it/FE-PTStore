import React, { useEffect } from 'react';
import "../../../css/admin/product/EditProductStatus.css"
function EditProductStatus (props) {
    useEffect(() => {
        console.log(props.product)
        if(props.product){
          setValue();
        }
    
      }, []);
    const setValue = () => {
        document.getElementById("inputNameProduct").value = props.product.name|| "";
        document.getElementById("inputCurrentQuantity").value = props.product.stock || "";
        document.getElementById("inputStatusProduct").value = props.product.status || "";
      }
    const handleSubmit = (e) => {
        e.preventDefault();

        let id = document.getElementById("inputIDProduct").value;
        let name = document.getElementById("inputNameProduct").value;
        let currentStock = document.getElementById("inputCurrentQuantity").value;
        let status = document.getElementById("inputStatusProduct").value;
        let featuredProduct = document.getElementById("checkbox-featuredProduct").value;

        if(
            currentStock.length < 1 ||
            status.length < 1 
        ){alert("Vui lòng nhập đúng và đầy đủ thông tin");}
        else{
            let formData = new FormData();
            formData.append("Id", id);
            formData.append("Name", name);
            formData.append("Stock", currentStock);
            formData.append ("Status", status);
            formData.append("FeaturedProduct", featuredProduct);  
        }    
    };
    return (
        <div>
            <div className="editProductStatus">
                <div className="title-addAccount">
                <h2>Sửa tình trạng sản phẩm</h2>
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
                                Số lượng hiện tại
                                </label>
                                <input
                                type="t"
                                className="form-control"
                                id="inputCurrentQuantity"
                                placeholder="Số lượng hiện tại"
                                required 
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="form-label" for="inputNameProduct">
                                Số lượng đã bán
                                </label>
                                <input
                                type="text"
                                className="form-control"
                                id="inputSoldQuantity"
                                placeholder="Số lượng đã bán"
                                required
                                readOnly
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="inputStatusProduct">
                            Tình trạng
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            id="inputStatusProduct"
                            placeholder="Tên sản phẩm"
                            required
                            
                            />
                        </div>
                        <div className="mb-3 checkbox-featuredProduct">
                            <input
                            type="checkbox"
                            id="checkbox-featuredProduct"
                            name=""
                            />
                            <label className="form-label" for="checkbox-featuredProduct">
                            Sản phẩm nổi bật
                            </label>
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

export default EditProductStatus;