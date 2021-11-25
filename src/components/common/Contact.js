import React from 'react';
import '../../css/common/Contact.css'
function Contact () {
    return (
        <div>
            <div className= "feedback">
                    <div className="container">
                        <div id="contact-page" className="container background">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-8 background">
                                        <div className="contact-form">
                                            <h2 className="title text-center">PT-STORE XIN TRÂN TRỌNG PHỤC VỤ QUÝ KHÁCH</h2>
                                            
                                            <form id="main-contact-form" className="contact-form row" asp-controller="Home" asp-action="LienHe" method="post">
                                                <div className="form-group col-md-6">
                                                    <input type="text" name="phone" className="form-control" required placeholder="Họ và tên (bắt buộc)"/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <input type="text" name="phone" className="form-control" required placeholder="Số điện thoại (bắt buộc)"/>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <input type="email" name="email" className="form-control" required placeholder="Email (bắt buộc)"/>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <select name="dataTable_length" aria-controls="dataTable" className="selectTopic">
                                                            <option value="-1">Chọn chủ đề</option>
                                                            <option value="1">Tư vấn</option>
                                                            <option value="2">Khiếu nại - phản ánh</option>
                                                            <option value="3">Hợp tác</option>
                                                            <option value="4">Góp ý cải tiến</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <textarea name="message" id="message" required class="form-control" rows="8" placeholder="Vui lòng để lại lời nhắn của bạn ở đây"></textarea>
                                                </div>
                                                <div className="form-controls">
                                                    <div className="btn-contact">
                                                        <button type="submit">GỬI GÓP Ý</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="contact-info">
                                            <h2 className="title text-center ">Thông tin của chúng tôi</h2>
                                            <address>
                                                <p>Cửa Hàng Điện Thoại PT</p>
                                                <p>Số 1 Võ Văn Ngân phường Linh Chiểu quận Thủ Đức TPHCM</p>
                                                <p>SĐT: 0858679912</p>
                                                <p>Email: ptstore.hcmute@gmail.com</p>
                                                <p>Thời gian hoạt động: 8:00AM - 10:00PM</p>
                                            </address>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Contact;