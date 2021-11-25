import React from "react";
import iconSearch from "../../../images/iconSearch.png";

function BodyOD() {
  return (
    <div>
      <div className="bodyOrderDetail">
        <div className="media flex-column flex-sm-row">
          <div className="media-body ">
            <h5 className="bold">Điện thoại Iphone 13 - 512GB</h5>
            <p className="text-muted"> Số lượng: 1</p>
            <h4 className="mt-3 mb-4 bold">
              <strong>9,490,000 ₫ </strong>
            </h4>
          </div>
          <img
            alt="product"
            className="align-self-center img-fluid"
            src={iconSearch}
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default BodyOD;
