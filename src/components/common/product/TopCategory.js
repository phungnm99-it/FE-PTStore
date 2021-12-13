import React from "react";
import "../../../css/product/topCategory.css";

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
                    src="http://res.cloudinary.com/dobsh4rbw/image/upload/v1639403472/commom/banner121321085025.jpg"
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
