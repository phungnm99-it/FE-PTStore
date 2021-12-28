import React from "react";
import "../../../css/admin/brand/DetailBrand.css";

function DetailBrand(props) {
  return (
    <div>
      <div className="detailBrand">
        <div className="title-addAccount">
          <h2>Thông tin chi tiết thương hiệu</h2>
        </div>
        <div className="form">
          <div className="body-detailBrand">
            <div className="row">
              <div className="col-sm-9">
                <div className="media-body">
                  <div className="col-sm-5">
                    <div className="list-left">
                      <ul className="nav">
                        <li>Mã thương hiệu:</li>
                        <li>Tên thương hiệu</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="list-right">
                      <ul className="nav">
                        <li>{props.brand.id}</li>
                        <li>{props.brand.name}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <img
                  className="align-self-center img-fluid"
                  src={
                    props.brand.imageUrl === ""
                      ? "http://res.cloudinary.com/dobsh4rbw/image/upload/v1639403956/commom/no-avt121321085832.png"
                      : props.brand.imageUrl
                  }
                ></img>
              </div>
            </div>
          </div>
          <div className="btn-detailBrand">
            <button
              onClick={() => props.switch(10)}
              className="btnEdit-detailBrand"
            >
              Chỉnh sửa
            </button>
            <button
              onClick={() => props.switch(8)}
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

export default DetailBrand;
