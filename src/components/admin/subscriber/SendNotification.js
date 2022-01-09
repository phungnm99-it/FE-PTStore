import React from 'react';
import "../../../css/admin/subscriber/SendNotification.css"
function SendNotification (props) {
    return (
        <div>
            <div className="sendNotification">
                <div className="title-addAccount">
                    <h2>Gửi thông báo</h2>
                </div>
                <div className="form">
                <div className="input-addAccount">
                    <form>
                    
                        <div className="row">
                            <div className="mb-3 col-md-6">
                            <label className="form-label" for="inputTopic">
                                Chủ đề
                            </label>
                            <select
                                name="dataTable_length"
                                id="dataTable_length"
                                aria-controls="dataTable"
                                className="selectTopic"
                            >
                                <option value="Tư vấn">Chọn chủ đề</option>
                                <option value="Tư vấn">Tư vấn</option>
                                <option value="Khiếu nại - phản ánh">
                                    Khiếu nại - phản ánh
                                </option>
                                <option value="Hợp tác">Hợp tác</option>
                                <option value="Góp ý cải tiến">Góp ý cải tiến</option>
                            </select>
                            </div>    
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
                            <button
                            type="submit"
                            
                            className="btn btn-primary btn-color"
                            >
                            Gửi thông báo
                            </button>
                            <button
                            type="submit"
                            onClick={() => props.switch(27)}
                            className="btn btn-primary btn-color btn-comeback"
                            >
                            Quay trở lại danh sách
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
}

export default SendNotification;