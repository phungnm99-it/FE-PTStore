import React, { useEffect, useState } from "react";
import "../../../css/product/slideBrand.css";
import { Link } from "react-router-dom";
import brandApi from "../../../api/brandApi";
import { useParams } from "react-router-dom";
function SlideBrand() {
  const { brandName } = useParams();
  console.log(brandName);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    getActiveBrand();
  }, []);
  const getActiveBrand = async () => {
    brandApi.getActive().then((response) => {
      setBrands(response.data);
    });
  };
  return (
    <div>
      <section className="slideBrands">
        <div className="container">
          <div className="box-quicklink">
            <div className="lst-quickfilter q-manu">
              {brands.map((item) => {
                let lk = "/brand/" + item.name;
                return (
                  <Link
                    key={item.id}
                    to={lk}
                    data-href={item.name}
                    data-index="0"
                    className={
                      "box-quicklink__item bd-radius quicklink-logo" +
                      (brandName === item.name && " active-brand")
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
