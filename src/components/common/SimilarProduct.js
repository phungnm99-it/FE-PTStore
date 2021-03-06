import React, { useState, useEffect } from "react";
import ProductFrame from "./ProductFrame";
import "../../css/common/RecommendProduct.css";
import productApi from "../../api/productApi";
import { useParams } from "react-router";

function SimilarProduct() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getProduct();
  }, [id]);
  const getProduct = async () => {
    productApi.getSimilarProduct(id).then((response) => {
      setProduct(response.data);
    });
  };
  return (
    <div>
      <section className="similarProducts">
        <div className="container">
          <div className="ins-preview-wrapper ins-preview-wrapper-480">
            <div className="ins-content-wrapper ins-content-wrapper-480">
              <div className="ins-notification-content ins-notification-content-480 inline-resolution tada">
                <div className="ins-web-smart-recommender-main-wrapper">
                  <div>
                    <div className="ins-web-smart-recommender-header">
                      <div
                        id="wrap-text"
                        className="ins-selectable-element ins-element-wrap ins-element-text"
                      >
                        <div
                          id="text"
                          className="ins-element-content ins-editable-text"
                          not-sortable="true"
                        >
                          <a href="#text" className="ins-element-link">
                            <div
                              className="ins-editable ins-element-editable"
                              id="editable-text-1454703450633"
                              data-bind-menu="notification|text_editing"
                            >
                              SẢN PHẨM TƯƠNG TỰ
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-recommend">
              {product.map((item, idx) => (
                <ProductFrame
                  currentPrice={item.currentPrice}
                  key={idx + 1}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SimilarProduct;
