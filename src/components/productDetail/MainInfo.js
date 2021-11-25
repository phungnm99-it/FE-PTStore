import React, { useState } from "react";
import "../../css/productDetail/MainInfo.css";
import SpecDetail from "./SpecDetail";
function Specifications() {
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="product-specs">
        <h3>Thông số kỹ thuật</h3>

        <div className="col-sm-5">
          <div className="list-left">
            <ul className="nav">
              <li>Màn hình:</li>
              <li>Hệ điều hành:</li>
              <li>Camera sau:</li>
              <li>Camera trước:</li>
              <li>RAM:</li>
              <li>Bộ nhớ trong:</li>
              <li>Pin:</li>
            </ul>
          </div>
        </div>
        <div className="col-sm-7">
          <div className="list-right">
            <ul className="nav">
              <li>OLED6.1"Super Retina XD</li>
              <li>iOS 14</li>
              <li>2 camera 12 MP</li>
              <li>12 MP</li>
              <li>4 GB</li>
              <li>64 GB</li>
              <li>2815 mAh</li>
            </ul>
          </div>
        </div>
        <a
          data-padding="0px"
          data-width="600px"
          className="ajax-modal product-specs-button"
          href="#"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <strong>Cấu hình chi tiết</strong>
        </a>
        {modalIsOpen && <SpecDetail onCLose={() => setIsOpen(false)} />}
      </div>
    </div>
  );
}

export default Specifications;
