import React from "react";
import noOrder from "../../images/noOder.png";
import "../../css/customer/noOrder.css";

function NoOrder() {
  return (
    <div>
      <section className="orderHistory">
        <div className="body-content">
          <h1>Đơn hàng của bạn</h1>
          <div className="account-layout">
            <div className="row equaHeight" data-obj=".col .box-bg-white">
              <div className="col col-lg">
                <div className="box-bg-white">
                  <div className="not-found-list">
                    <a>
                      <img src={noOrder} alt="not-found-list" />
                    </a>
                    <p>Bạn chưa có đơn hàng nào</p>
                    <a className="button_direct" href="/">
                      Về trang chủ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default noOrder;
