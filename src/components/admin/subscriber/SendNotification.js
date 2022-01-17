import React from "react";
import subscriberApi from "../../../api/subscriberApi";
import "../../../css/admin/subscriber/SendNotification.css";
function SendNotification(props) {
  const handleSendNews = (e) => {
    e.preventDefault();
    var subject = document.getElementById("emailSubject").value;
    var body = document.getElementById("emailBody").value;

    if (subject === "" || body === "") {
      alert("Vui lòng nhập nội dung!");
    } else {
      var formData = new FormData();
      formData.append("Subject", subject);
      formData.append("Body", body);
      subscriberApi.sendNew(formData).then((res) => {
        if (res.code === 401) {
          alert("Gửi thất bại!");
        } else {
          alert("Gửi thành công!");
          props.switch(27);
        }
      });
    }
  };
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
                  <input className="form-control" id="emailSubject" type="text" placeholder="Chủ đề" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label" for="inputReply">
                  Nội dung phản hồi
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="emailBody"
                  placeholder="Nội dung"
                />
              </div>
              <div className="mb-3">
                <button
                  onClick={(e) => handleSendNews(e)}
                  id="sendNews"
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
