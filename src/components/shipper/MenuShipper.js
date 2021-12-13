import React, { useState, useRef, useEffect, useContext } from 'react';
import "../../css/shipper/MenuShipper.css"
import Dashboard from './Dashboard';
import InfoShipper from './InfoShipper';
import ChangePass from './ChangePass';
import EditInfo from './EditInfo';
import OrderReceived from './OrderReceived';
import DeliveryHistory from './DeliveryHistory';
import OrderDetail from "../customer/orderDetail/OrderDetail"
import userApi from '../../api/userApi';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Auth from '../../config/auth';
import {ShipperContext} from "../../ShipperContext"
function MenuShipper () {
    const context = useContext(ShipperContext);
    const [form, setForm] = useState();
    const history = useHistory();
    const [avt, setAvt] = useState(
        "https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png"
      );
    const [name, setName] = useState("");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const inputFile = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0);
        userApi.getInfo().then((response) => {
          if (response.data.imageUrl !== "") {
            setAvt(response.data.imageUrl);
          }
          setName(response.data.fullName);
        });
      }, []);

    const selectFile = () => {
        // debugger
        inputFile.current.click();
    };

    const getImg = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        
        let formData = new FormData();
        formData.append("image", file);
        userApi.updateAvatar(formData).then((res) => {
          if (res.code === "200") {
            setAvt(base64);
          } else {
            alert("Lỗi!");
          }
        });
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
    };
    const switchRender = () => {
        switch (form) {
          case 0:
            return <Dashboard/> ;
          case 1:
            return <InfoShipper switch={(e) => setForm(e)}/>;
          case 2:
              return <ChangePass />;
          case 3:
              return <EditInfo/>;
          case 4: 
              return <OrderReceived switch={(e) => setForm(e)}/>;
          case 5:
              return <DeliveryHistory switch={(e) => setForm(e)}/>;
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
                                <img src={avt} alt="AvtShipper"/>
                            </div>
                            <div className="summer">
                                <p onClick={() => setForm(1)}>
                                <strong>{name}</strong>
                                </p>
                                <p className="change-avatar" onClick={() => selectFile()}>
                                <i className="icon-change-avatar"></i> Thay đổi ảnh đại diện
                                </p>
                                <input
                                type="file"
                                name="upfile"
                                id="avtImage"
                                accept="image/*"
                                onChange={(e) => getImg(e)}
                                ref={inputFile}
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

                                                        
                            <li className="nav-item" onClick={() => setForm(4)} >
                                <a className="nav-link active btn-focus">
                                <i className="fas fa-tachometer-alt nav-icon"></i>
                                Đơn hàng đã nhận
                                </a>
                            </li>
                        
                            
                            <li className="nav-item"  onClick={() => setForm(5)}>
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
                            <div className="shipperLogout"
                            onClick={() => {
                            context.logout();
                            Auth.logout();
                            history.push("/shipper/login");
                            }}>
                                <i className="fas fa-sign-out-alt nav-icon"></i>
                                <span> Đăng xuất</span>
                            </div>
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