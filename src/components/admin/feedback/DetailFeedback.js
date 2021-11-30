import React from 'react';
import "../../../css/admin/feedback/DetailFeedback.css"
import ReplyItem from './ReplyItem';
function DetailFeedback () {
    return (
        <div>
            <div className="detailFeedback">
                <div className="title-addAccount">
                <h2>Thông tin chi tiết góp ý</h2>
                </div>
                <div className="form">
                    
                    <div className="body-detailProduct">
                        <div className="row">
                            <div className="media-body">
                                <div className="col-sm-5">
                                    <div className="list-left">
                                        <ul className="nav">
                                        <li>Mã góp ý</li>
                                        <li>Tên người gửi:</li>
                                        <li>Email:</li>
                                        <li>Chủ để:</li>
                                        <li>Thời gian gửi:</li>
                                        <li>Nội dung góp ý:</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <div className="list-right">
                                        <ul className="nav">
                                        <li>HIDSF890e30</li>
                                        <li>Phan Nguyễn Thủy Tiên</li>
                                        <li>thuytienpn106@gmail.com</li>
                                        <li>Góp ý, cải tiến</li>
                                        <li>29/11/2021</li>
                                        <li>Thái độ tư vấn phục vụ nhiệt tình. Giao hàng đúng hẹn. Sản phẩm chính hãng hỗ trợ bảo hành đầy đủ. Nhưng đóng gói còn sơ sài có thể ảnh hưởng đến chất lượng sản phẩm khi giao hàng.</li>
                                        </ul>
                                    </div>
                                </div>
                                <ReplyItem/>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default DetailFeedback;