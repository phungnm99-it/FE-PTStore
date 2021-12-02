import React, { useEffect, useState } from "react";
import "../../../css/product/product.css";
import { useParams } from "react-router";
import ProductFrame from "../../common/ProductFrame";
import productApi from "../../../api/productApi";

function BrandProduct() {
  const [product, setProduct] = useState([]);
  const { brandName } = useParams();

  useEffect(() => {
    productApi.findByBrandName(brandName).then((response) => {
      setProduct(response.data);
    });
  }, [brandName]);
  return (
    <div>
      <div className="products">
        <div className="container">
          <div className="list-product">
            <h1>Điện thoại</h1>
            <div className="col-content lts-product">
              <div className="row-recommend">
                {product?.map((item, idx) => (
                  <ProductFrame
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
        </div>
      </div>
    </div>
  );
}

export default BrandProduct;
