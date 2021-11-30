import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../css/admin/Header.css";
import AdminInfo from "../adminInfo/AdminInfo";

function Header() {
  const [form, setForm] = useState();
  let inputFile = null;

  const switchRender = () => {
    switch (form) {
      case 0:
        return;
      case 1:
        return <AdminInfo/>;
      default:
        return null;
    }
    const selectFile = () => {
      inputFile.click();
    };
  };
  return (
    <div>
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
              <a  onClick={() => setForm(1)}>Tien</a>
              <i className="fas fa-user"></i>
            </div>
          </div> 
      </div>
    </div>
    
    
  );
}

export default Header;
