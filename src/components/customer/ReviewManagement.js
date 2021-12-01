import React from 'react';
import "../../css/customer/reviewManagement.css"
function ReviewManagement () {
    return (
        <div>
            <section className="reviewHistory">
                <div className="body-content">
                    <h1>Đánh giá của bạn</h1>
                    <div className="account-layout">
                        <div className="row equaHeight" data-obj=".col .box-bg-white">
                            <div className="col col-lg">
                                <div className="box-bg-white">
                                    <div className="box-order">
                                        <table className="table table-striped table-bordered dataTable">
                                        <thead>
                                            <tr role="row">
                                            <th className="sorting" id="ReviewHistory-ProductCol">
                                                Tên sản phẩm
                                            </th>
                                            <th className="sorting" id="ReviewHistory-DateCol">
                                                Thời gian đánh giá
                                            </th>
                                            <th className="sorting" id="ReviewHistory-ContentCol">
                                                Nội dung đánh giá
                                            </th>
                                           
                                            </tr>
                                        </thead>
                                        <tbody>
                                           <tr>
                                               <td>Iphone 13 ProMax 512GB</td>
                                               <td>02/12/2021</td>
                                               <td>Sản phẩm chính hãng, chất lượng. Phục vụ chu đáo nhiệt tình.</td>
                                           </tr>
                                        </tbody>
                                        </table>
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

export default ReviewManagement;