import React from "react";
import "../../css/customer/filterOrderTab.css";
import iconSearch from "../../images/iconSearch.png";

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
                <img alt="icon-search" src={iconSearch} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FilterOrderTab;
