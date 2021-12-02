import React, { useState } from "react";
import "../../css/productDetail/MainInfo.css";
import SpecDetail from "./SpecDetail";
import { useParams } from "react-router";
import productApi from "../../api/productApi";
import { useEffect } from "react";

function Specifications() {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  useEffect(() => {
    productApi.getAll(id).then((response) => {
      setInfo(response.data);
    });
  }, [id]);
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="product-specs">
        <h3>Thông số kỹ thuật</h3>

        <div className="col-sm-4">
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
        <div className="col-sm-8">
          <div className="list-right">
            <ul className="nav">
              <li>{info.screenSize}</li>
              <li>{info.os}</li>
              <li>{info.backCamera}</li>
              <li>{info.frontCamera}</li>
              <li>{info.ram}</li>
              <li>{info.rom}</li>
              <li>{info.battery}</li>
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
