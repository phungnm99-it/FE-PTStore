import React, { useState } from 'react';
import "../../css/shipper/MenuShipper.css"
import Dashboard from './Dashboard';
import noAvt from "../../images/no-avt.png"
import InfoShipper from './InfoShipper';
import ChangePass from './ChangePass';
import EditInfo from './EditInfo';
function MenuShipper () {
    const [form, setForm] = useState();
    let inputFile = null;

    const switchRender = () => {
        switch (form) {
          case 0:
            return <Dashboard/> ;
          case 1:
            return <InfoShipper switch={(e) => setForm(e)}/>;
          case 2:
              return <ChangePass />;
          case 3:
              return <EditInfo/>
          default:
            return null;
        }
      };
    return (
        <div>
            <section className="pageShipper">
                <div className="account">
                    <div className="menuShipper">
                    <div className="sidebar">
                        <div className="ctn">
                        <div className="header">
                            <div className="info">
                            <div className="avt" id="myAvatar">
                                <img src={noAvt} alt="AvtShipper"/>
                            </div>
                            <div className="summer">
                                <p onClick={() => setForm(1)}>
                                <strong>Tien Phan Nguyen Thụy</strong>
                                </p>
                                <p className="change-avatar">
                                <i className="icon-change-avatar"></i> Thay đổi ảnh đại diện
                                </p>
                                <input
                                type="file"
                                name="upfile"
                                id="avtImage"
                                accept="image/*"
                                />
                            </div>
                            </div>
                        </div>
                        <nav>
                            <ul>
                            <li className="nav-item" onClick={() => setForm(0)} > 
                                <a href="#" className="nav-link active">
                                <i className="fas fa-tachometer-alt nav-icon"></i>
                                Trang chủ
                                </a>
                            </li>

                                                        
                            <li className="nav-item" >
                                <a className="nav-link active btn-focus">
                                <i className="fas fa-tachometer-alt nav-icon"></i>
                                Đơn hàng theo dõi
                                </a>
                            </li>
                        
                            
                            <li className="nav-item" >
                                <a href="#" className="nav-link active btn-focus">
                                <i className="fas fa-thumbs-up nav-icon"></i>
                                Lịch sử giao hàng
                                </a>
                            </li>

                            </ul>
                        </nav>
                        </div>
                    </div>
                    <div className="body-content"></div>
                    </div>
                    
                    <div className="bodyAdmin">
                    <div className="headerAdmin">
                        <div className="header header-sticky mb-4">
                            <div className="container-fluid">
                            <button type="button" className="header-toggler ps-1">
                                <i className="fas fa-list"></i>
                            </button>
                            <a className="header-nav d-none d-md-flex me-auto">
                                Trang chủ
                            </a>
                            </div>
                            {/* <div className="InfoAdmin">
                            
                            <i className="fas fa-user nav-icon"></i>
                            <span >Thuy Tien</span>
                            </div> */}
                        </div> 
                    </div>
                    <div className="bodyMain">{switchRender()}</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MenuShipper;