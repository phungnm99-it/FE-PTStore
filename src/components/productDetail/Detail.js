import "../../css/productDetail/Detail.css";
import { useParams, useHistory } from "react-router";
import { useState } from "react";
import productApi from "../../api/productApi";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { priceFormat } from "../../utils/priceFormat";
function Detail() {
  window.scrollTo(0, 0);
  const context = useContext(AuthContext);
  const history = useHistory();
  const { id } = useParams();
  const [info, setInfo] = useState({});
  useEffect(() => {
    productApi.getAll(id).then((response) => {
      if (response.data === null) {
        window.location.href = "http://localhost:3000/";
      }
      setInfo(response.data);
    });
  }, [id]);

  const handleBuy = () => {
    let product = {
      id: id,
      name: info.name,
      price: info.price,
      currentPrice: info.currentPrice,
      imageUrl: info.imageUrl,
      quantity: 1,
    };
    context.addToCart({ product });
    history.push("/cart");
  };
  return (
    <div>
      <div className="detail">
        <div className="container">
          <div className="product-details">
            <div className="top-product">
              <h1 id="productName">{info?.name}</h1>
            </div>
            <div className="product-details-container">
              <div className="product-image">
                <div className="productImage">
                  <img src={info?.imageUrl} alt="#"></img>
                </div>
              </div>
              <div className="product-center">
                <p className="price current-product-price">
                  <strong>{priceFormat(info?.currentPrice)}</strong>
                  <i>
                    Giá Niêm Yết: <strike>{priceFormat(info?.price)}</strike>
                  </i>
                </p>
                <p className="freeship">
                  <span>Miễn phí vận chuyển toàn quốc</span>
                </p>
                <div className="product-option color">
                  <strong className="label">
                    Lựa chọn màu và xem địa chỉ còn hàng
                  </strong>
                  <div className="options" id="colorOptions">
                    <div
                      data-name="Đen"
                      data-pricenote=""
                      data-buyonline="true"
                      data-bestprice="9,490,000 ₫"
                      data-lastprice="9,490,000 ₫"
                      data-idx="0"
                      data-hex="#000000"
                      data-title=""
                      data-id="123"
                      data-sku="XM11LD"
                      className="item selected ins-init-condition-tracking"
                    >
                      <span>
                        <label>
                          <strong>{info?.color}</strong>
                        </label>
                      </span>
                      <strong>{priceFormat(info?.currentPrice)}</strong>
                    </div>
                  </div>
                </div>
                <div className="product-promotion">
                  <div className="product-shop">
                    <div className="warranty">
                      <h4>THÔNG TIN</h4>
                      <p>
                        <i className="icon-shield fa fa-check"></i>
                        <span>
                          Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp
                          Lighining - Type C
                        </span>
                      </p>
                      <p>
                        <i className="icon-shield fa fa-check"></i>
                        <span>
                          Bảo hành chính hãng điện thoại 12 tháng tại trung tâm
                          bảo hành ủy quyền.
                        </span>
                      </p>
                      <p>
                        <i className="icon-shield fa fa-check"></i>
                        <span>
                          1 đổi 1 đối với sản phẩm lỗi trong 15 ngày đầu.
                        </span>
                      </p>
                      <p>
                        <i className="icon-shield fa fa-check"></i>
                        <span>
                          Miễn phí giao hàng tận nơi trên phạm vi toàn quốc.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="product-action">
                  {info?.status === "Ngừng kinh doanh" ? (
                    <p className="freeship">
                      <span>Sản phẩm ngừng kinh doanh</span>
                    </p>
                  ) : info?.stock === 0 ? (
                    <p className="freeship">
                      <span>Sản phẩm tạm hết hàng</span>
                    </p>
                  ) : (
                    <button
                      onClick={handleBuy}
                      title="Mua ngay"
                      data-sku="XM11LH"
                      className="btn-red btnQuickOrder btnbuy"
                    >
                      <strong>MUA NGAY</strong>
                      <span> Giao hàng tận nhà (COD) miễn phí vận chuyển</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
