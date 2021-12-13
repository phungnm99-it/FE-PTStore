import React from "react";
import "../../css/customer/filterOrderTab.css";

function FilterOrderTab() {
  return (
    <div>
      <div className="order-tab-filter">
        <div className="box-search ">
          <form>
            <div className="cps-group-input">
              <input
                type="text"
                placeholder="Tìm đơn hàng"
                className="cps-input"
              />
              <div className="btnSearch" id="search-cate">
                <img
                  alt="icon-search"
                  src="http://res.cloudinary.com/dobsh4rbw/image/upload/v1639403249/commom/iconSearch121321084641.png"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FilterOrderTab;
