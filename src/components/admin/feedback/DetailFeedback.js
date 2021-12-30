import React from "react";
import "../../../css/admin/feedback/DetailFeedback.css";
import { timeFormat } from "../../../utils/dateUtils";
function DetailFeedback(props) {
  console.log(props.feedback.isReplied);
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
                      <li>{props.feedback.id}</li>
                      <li>{props.feedback.fullName}</li>
                      <li>{props.feedback.email}</li>
                      <li>{props.feedback.topic}</li>
                      <li>{timeFormat(props.feedback.feedbackTime)}</li>
                      <li>{props.feedback.content}</li>
                    </ul>
                  </div>
                </div>
                {props.feedback.isReplied === true ? (
                  <div>
                    <div className="title-ReplyItem">
                      <p>Thông tin phản hồi</p>
                    </div>
                    <div className="col-sm-5">
                      <div className="list-left">
                        <ul className="nav">
                          <li>Tên người phản hồi:</li>
                          <li>Thời gian phản hồi:</li>
                          <li>Nội dung phản hồi:</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="list-right">
                        <ul className="nav">
                          <li>{props.feedback.replierName}</li>
                          <li>{timeFormat(props.feedback.replyTime)}</li>
                          <li>{props.feedback.replyContent}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              {props.feedback.isReplied === true ? (
                <button
                  onClick={() => props.switch(28)}
                  className="btn btn-primary btn-color btn-comeback"
                >
                  Quay trở lại danh sách
                </button>
              ) : (
                <button
                  onClick={() => props.switch(24)}
                  className="btn btn-primary btn-color btn-comeback"
                >
                  Quay trở lại danh sách
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailFeedback;
