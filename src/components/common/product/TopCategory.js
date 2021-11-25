import React from "react";
import "../../../css/product/topCategory.css";
import poster from "../../../images/iphone-13-series-pre-23423423.jpg";

function TopCategory() {
  return (
    <div>
      <section>
        <div className="top-category-ads">
          <div className="container">
            <div className="ads-container">
              <div className="full item">
                <a href="#" target="_top">
                  <img
                    alt="image"
                    src={poster}
                    className="img-responsive img-border-radius"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TopCategory;
