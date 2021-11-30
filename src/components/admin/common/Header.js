import React from "react";
import { Link } from "react-router-dom";
import "../../../css/admin/Header.css";

function Header() {
  return (
    <div className="headerAdmin">
      

       <div className="header header-sticky mb-4">
          <div className="container-fluid">
            <button type="button" className="header-toggler ps-1">
              <i className="fas fa-list"></i>
            </button>
            <Link to="/admin" className="header-nav d-none d-md-flex me-auto">
              Trang chủ
            </Link>
          </div>
          <div className="InfoAdmin">
            
          </div>
        </div> 
    </div>
  );
}

export default Header;
