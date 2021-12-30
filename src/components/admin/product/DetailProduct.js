import React from "react";
import "../../../css/admin/product/DetailProduct.css";
import { priceFormat } from "../../../utils/priceFormat";

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
              <div className="col-sm-8">
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
                        <li>Tình trạng:</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="list-right">
                      <ul className="nav">
                        <li>{props.product.id}</li>
                        <li>{props.product.name}</li>
                        <li>{props.product.brandName}</li>
                        <li>{props.product.color}</li>
                        <li>{priceFormat(props.product.price)}</li>
                        <li>{priceFormat(props.product.currentPrice)}</li>
                        <li>{props.product.stock}</li>
                        <li>{props.product.status}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <img
                  className="imgProduct"
                  src={props.product.imageUrl}
                  alt="img-product"
                ></img>
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
                      <li>{props.product.screenResolution}</li>
                      <li>{props.product.screenSize}</li>
                      <li>{props.product.screenTech}</li>
                      <li>{props.product.os}</li>
                      <li>{props.product.cpu}</li>
                      <li>{props.product.gpu}</li>
                      <li>{props.product.frontCamera}</li>
                      <li>{props.product.backCamera}</li>
                      <li>{props.product.ram}</li>
                      <li>{props.product.rom}</li>
                      <li>{props.product.sim}</li>
                      <li>{props.product.wifi}</li>
                      <li>{props.product.gps}</li>
                      <li>{props.product.battery}</li>
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
            <button
              type="submit"
              onClick={() => props.switch(12)}
              className="btn btn-primary btn-color btn-comeback"
            >
              Quay trở lại danh sách
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
