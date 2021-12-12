import React from "react";
import "../../css/common/Slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Slide() {
  const history = useHistory();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
  };
  return (
    <div>
      <section className="slide">
        <div className="container background">
          <div className="row">
            <div className="col-sm-12">
              <Carousel responsive={responsive}>
                <div className="item no-padding">
                  <div className="col-sm-6">
                    <div className="slide-commend">
                      <h1>
                        <span>PT</span>-STORE
                      </h1>
                      <h2>100% Điện thoại chính hãng</h2>
                      <p>
                        Đến với PTStore bạn sẽ có được sản phẩm chất lượng, giá
                        cả hợp lý và dịch vụ bảo hành trọn gói
                      </p>
                      <button type="button" className="btn btn-default get" onClick={() => history.push("/")}>
                        Mua ngay
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="slide-img">
                      <img className="slide1" src={slide1} alt="" />
                    </div>
                  </div>
                </div>

                <div className="item no-padding">
                  <div className="slide-img">
                    <img src={slide2} alt="" />
                  </div>
                </div>

                <div className="item no-padding">
                  <div className="slide-img">
                    <img src={slide3} alt="" />
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Slide;
