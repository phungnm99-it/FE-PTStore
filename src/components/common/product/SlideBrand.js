import React, { useEffect, useState } from "react";
import "../../../css/product/slideBrand.css";
import { Link } from "react-router-dom";
import brandApi from "../../../api/brandApi";
function SlideBrand() {
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    getActiveBrand();
  }, []);
  const getActiveBrand = async () => {
    brandApi.getActive().then((response) => {
      setBrand(response.data);
    });
  };
  return (
    <div>
      <section className="slideBrands">
        <div className="container">
          <div className="box-quicklink">
            <div className="lst-quickfilter q-manu">
              {brand.map((item) => {
                let lk = "/brand/" + item.name;
                return (
                  <Link
                    key={item.id}
                    to={lk}
                    data-href={item.name}
                    data-index="0"
                    className={
                      "box-quicklink__item bd-radius quicklink-logo" +
                      (brand === "iphone" && " active-brand")
                    }
                  >
                    <img src={item.imageUrl} className="no-text" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SlideBrand;
