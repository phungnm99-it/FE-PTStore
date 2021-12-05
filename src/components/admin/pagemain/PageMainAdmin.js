import React from 'react';
import "../../../css/admin/pageMain/pageMainAdmin.css"
function PageMainAdmin () {
    return (
        <div className="pageMainAdmin">
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="full counterSection">
                        <div className="counterIcon">
                            <i className="fa fa-user yellow_color"></i>
                        </div>
                        <div className="counterNo">
                            <p className="totalNo">100</p>
                            <p className="headCounter">Tài khoản</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="full counterSection">
                        <div className="counterIcon">
                            <i className="fas fa-box-open green_color"></i>
                        </div>
                        <div className="counterNo">
                            <p className="totalNo">10</p>
                            <p className="headCounter">Đơn hàng</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="full counterSection">
                        <div className="counterIcon">
                            <i className="fa fa-comments-o red_color"></i>
                        </div>
                        <div className="counterNo">
                            <p className="totalNo">10</p>
                            <p className="headCounter">Đánh giá</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="full counterSection">
                        <div className="counterIcon">
                            <i className="fas fa-bell blue_color"></i>
                        </div>
                        <div className="counterNo">
                            <p className="totalNo">10</p>
                            <p className="headCounter">Theo dõi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageMainAdmin;