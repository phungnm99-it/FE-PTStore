import React from "react";
import "../../../css/admin/brand/DetailBrand.css";
import iconClose from "../../../images/iconClose.png";
import noAvt from "../../../images/no-avt.png";
import { Link } from "react-router-dom";

function DetailBrand() {
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
                            <li>HIDSF890e30</li>
                            <li>Iphone</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <img
                      className="align-self-center img-fluid"
                      src={noAvt}
                    ></img>
                  </div>
                </div>
              </div>
              {/* <div className="btn-detailBrand">
                <Link
                  to="/admin/home/editBrand"
                  type="submit"
                  className="btnEdit-detailBrand"
                >
                  Chỉnh sửa
                </Link>
              </div> */}
        </div>
      </div>
    </div>
  );
}

export default DetailBrand;
