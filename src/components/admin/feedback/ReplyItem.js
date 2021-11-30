import React from 'react';
import "../../../css/admin/feedback/DetailFeedback.css"
function ReplyItem () {
    return (
        <div>
            <div className="title-ReplyItem">
                <p>Thông tin phản hồi</p>
            </div>
            <div className="col-sm-5">
                <div className="list-left">
                    <ul className="nav">
                        <li>Mã người phản hồi:</li>
                        <li>Tên người phản hồi:</li>
                        <li>Thời gian phản hồi:</li>
                        <li>Nội dung phản hồi:</li>         
                    </ul>
                </div>
            </div>
            <div className="col-sm-7">
                <div className="list-right">
                    <ul className="nav">
                        <li>HIDSF890e30</li>
                        <li>Phan Nguyễn Thủy Tiên</li>
                        <li>29/11/2021</li>
                        <li>Thái độ tư vấn phục vụ nhiệt tình. Giao hàng đúng hẹn. Sản phẩm chính hãng hỗ trợ bảo hành đầy đủ. Nhưng đóng gói còn sơ sài có thể ảnh hưởng đến chất lượng sản phẩm khi giao hàng.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ReplyItem;