import React from 'react';
import "../../../css/admin/feedback/ReplyFeedback.css"
function ReplyFeedback () {
    return (
        <div>
            <div className="replyFeedback">
                <div className="title-addAccount">
                    <h2>Phản hồi Góp ý</h2>
                </div>
                <div className="form">
                <div className="input-addAccount">
                    <form>
                    <div className="mb-3">
                        <label className="form-label" for="inputIDFeedback">
                        Mã góp ý
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        id="inputIDFeedback"
                        placeholder="Mã góp ý"
                        readOnly
                        />
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-6">
                        <label className="form-label" for="inputName">
                            Tên người gửi
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            placeholder="Tên người gửi"
                            readOnly
                        />
                        </div>
                        <div className="mb-3 col-md-6">
                        <label className="form-label" for="inputEmail">
                            Email
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail"
                            placeholder="Email"
                            readOnly
                        />
                        </div>
                    </div>
                   <div className="row">
                    <div className="mb-3 col-md-6">
                            <label className="form-label" for="inputTopic">
                            Chủ đề
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            id="inputTopic"
                            placeholder="Chủ đề"
                            readOnly
                            />
                    </div>
                    <div className="mb-3 col-md-6">
                            <label className="form-label" for="inputFeedbackTime">
                            Thời gian gửi góp ý
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            id="inputFeedbackTime"
                            placeholder="Thời gian gửi đánh giá"
                            readOnly
                            />
                    </div>
                   </div>
                    <div className="mb-3">
                        <label className="form-label" for="inputContent">
                        Nội dung
                        </label>
                        <textarea
                        type="text"
                        className="form-control"
                        id="inputContent"
                        placeholder="Nội dung"
                        readOnly
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="inputReply">
                        Nội dung phản hồi
                        </label>
                        <textarea
                        type="text"
                        className="form-control"
                        id="inputReply"
                        placeholder="Nội dung phản hồi"
                        
                        />
                    </div>
                    
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary btn-color">
                        GỬI PHẢN HỒI
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ReplyFeedback;