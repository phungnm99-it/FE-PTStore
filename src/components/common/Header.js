import React from "react";
import "../../css/common/Header.css";
function Header() {
  return (
    <div>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="contactinfo">
                <ul className="nav nav-pills">
                  <li>
                    <a href="localhost:3000">
                      <i className="fa fa-phone"></i> 0858679912
                    </a>
                  </li>
                  <li>
                    <a href="localhost:3000">
                      <i className="fa fa-envelope"></i>ptstore.kltn@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
