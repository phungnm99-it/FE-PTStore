import React from "react";
import "../../../css/admin/product/DetailProduct.css";
import imgProduct from "../../../images/no-avt.png";

function DetailProduct(props) {
  return (
    <div>
      <div className="detailProduct">
        <div className="title-addAccount">
          <h2>Thông tin chi tiết sản phẩm</h2>
        </div>
        <div className="form">
              
              <div className="body-detailProduct">
                <div className="row">
                  <img
                    className="imgProduct"
                    src={imgProduct}
                    alt="img-product"
                  ></img>
                </div>
                <div className="row">
                  <div className="media-body">
                    <div className="col-sm-5">
                      <div className="list-left">
                        <ul className="nav">
                          <li>Mã sản phẩm:</li>
                          <li>Tên sản phẩm:</li>
                          <li>Thương hiệu:</li>
                          <li>Màu sắc:</li>
                          <li>Giá niêm yết:</li>
                          <li>Giá hiện tại:</li>
                          <li>Số lượng hiện tại:</li>
                          <li>Số lượng đã bán:</li>
                          <li>Tình trạng:</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="list-right">
                        <ul className="nav">
                          <li>HIDSF890e30</li>
                          <li>Iphone 13 ProMax 512GB</li>
                          <li>Iphone</li>
                          <li>Xanh dương</li>
                          <li>39.000.000đ</li>
                          <li>39.000.000đ</li>
                          <li>50</li>
                          <li>20</li>
                          <li>Còn hàng</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h3>Thông số kỹ thuật</h3>
                </div>
                <div className="row">
                  <div className="media-body">
                    <div className="col-sm-5">
                      <div className="list-left">
                        <ul className="nav">
                          <li>Độ phân giải:</li>
                          <li>Màn hình rộng:</li>
                          <li>Công nghệ màn hình:</li>
                          <li>Hệ điều hành:</li>
                          <li>Chip xử lý (CPU):</li>
                          <li>Chip đồ họa (GPU):</li>
                          <li>Camera trước:</li>
                          <li>Camera sau:</li>
                          <li>RAM:</li>
                          <li>Bộ nhớ trong:</li>
                          <li>Số khe sim:</li>
                          <li>Wifi:</li>
                          
                          <li>GPS:</li>
                          
                          <li>Dung lượng Pin:</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="list-right">
                        <ul className="nav">
                          <li>HIDSF890e30</li>
                          <li>Iphone 13 ProMax 512GB</li>
                          <li>Iphone</li>
                          <li>Xanh dương</li>
                          <li>39.000.000đ</li>
                          <li>39.000.000đ</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-detailProduct">
                <button
                  onClick={() => props.switch(16)}
                  className="btnEdit-detailProduct"
                >
                  Chỉnh sửa
                </button>
              </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
