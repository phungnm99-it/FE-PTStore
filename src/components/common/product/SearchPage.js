import React, { useEffect, useState } from "react";
import "../../../css/product/topCategory.css";
import poster from "../../../images/iphone-13-series-pre-23423423.jpg";
import "../../../css/product/slideBrand.css";
import { useParams, useHistory } from "react-router-dom";
import brandApi from "../../../api/brandApi";
import "../../../css/product/product.css";
import ProductFrame from "../../common/ProductFrame";
import productApi from "../../../api/productApi";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import "../../../css/common/SearchPage.css";
import "../../../css/common/RecommendProduct.css";
function SearchPage() {
  window.scrollTo(0, 0);
  const { filter } = useParams();
  const history = useHistory();

  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    let x = filter.split("=")[1];
    productApi.search(x).then((res) => {
      if (currentPage * 12 - 1 > res.data.length) {
        setProducts(res.data.slice((currentPage - 1) * 12));
        console.log(1);
      } else {
        setProducts(res.data.slice((currentPage - 1) * 12, currentPage * 12));
      }
      setTotalPage(Math.round(res.data.length / 12));
      setCount(res.data.length);
    });
  }, [filter, currentPage]);

  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
  };

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
      <section className="slideBrands">
        <div className="container">
          <div className="box-quicklink">
            <div className="lst-quickfilter q-manu">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/dienthoai")}
                data-index="0"
                className={"box-quicklink__item bd-radius quicklink-logo"}
              >
                Xem tất cả điện thoại
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <p className="countProduct">Tìm được {count} điện thoại</p>
        </div>
      </section>
      <div className="products">
        <div className="container">
          <div className="list-product">
            <div className="col-content lts-product">
              <div className="row-recommend">
                {products.map((item, idx) => (
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
        </div>
      </div>
      {totalPage === 1 ? (
        <div></div>
      ) : (
        <div style={{ margin: "auto", width: "50%" }}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPage}
            changeCurrentPage={changeCurrentPage}
            theme="square-i"
          />
        </div>
      )}
    </div>
  );
}

export default SearchPage;
