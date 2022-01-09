import React from 'react';
import "../../css/common/StopSubscribe.css"
function StopSubscribe () {
    return (
        <div>
            <div className="stopSubscribe">
                <div className="midResetPass">
                    <div className="resetPassForm">
                        <div className="form">
                        <div className="title-stopSubscribe">
                            <p>Hủy đăng ký theo dõi</p>
                        </div>
                        <div className='content-stopSubscribe'>
                            <p>Bạn chắc chắn muốn hủy đăng ký nhận tin mới từ PT Store?</p>
                        </div>
                        <div></div>
                        <div className="row">
                            <button type="submit" >
                            <p className="btn-resetPass">Hủy đăng ký</p>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StopSubscribe;