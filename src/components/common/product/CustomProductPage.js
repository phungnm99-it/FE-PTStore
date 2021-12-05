import React, { useEffect, useState, useContext } from "react";
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
import { ProductContext } from "./ProductContext";

function CustomProductPage() {
  const { filter } = useParams();
  const history = useHistory();
  const context = useContext(ProductContext);

  const getCurrentPage = () => {
    if (filter !== undefined) {
      let arr = filter.split("page=");
      if (arr !== undefined && arr.length == 2) return arr[1][0];
      else return 1;
    } else {
      return 1;
    }
  };

  const getCurrentBrand = () => {
    if (filter !== undefined) {
      let arr = filter.split("brand=");
      if (arr === undefined || arr.length === 1) {
        return "all";
      } else {
        return arr[1].split("&")[0];
      }
    }
    return "all";
  };

  const [brands, setBrands] = useState([]);

  const [product, setProduct] = useState([]);

  const [currentPage, setCurrentPage] = useState(getCurrentPage());
  const [currentBrand, setCurrentBrand] = useState(getCurrentBrand());
  const [totalPage, setTotalPage] = useState(1);

  useEffect(async () => {
    getActiveBrand();
    getProduct();
    await setCurrentBrand(getCurrentBrand());
  }, [filter]);

  const getActiveBrand = async () => {
    brandApi.getActive().then((response) => {
      setBrands(response.data);
    });
  };

  const getProduct = async () => {
    productApi.getByFilter(filter).then((response) => {
      setProduct(response.data);
      setTotalPage(Math.floor(response.count / 12));
    });
  };

  const changeCurrentPage = (numPage) => {
    setCurrentPage(numPage);
    window.scrollTo(0, 300);
    let link = "/dienthoai/brand=all&page=" + numPage;
    history.push(link);
  };

  const handleClickBrand = (name) => {
    context.changeBrandName(name);
    let lk = "/dienthoai/brand=" + name;
    history.push(lk);
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
                className={
                  "box-quicklink__item bd-radius quicklink-logo" +
                  (currentBrand === "all" && " active-brand")
                }
              >
                Tất cả điện thoại
              </div>
              {brands.map((item) => {
                return (
                  <div
                    style={{ cursor: "pointer" }}
                    key={item.id}
                    id={item.name}
                    onClick={() => handleClickBrand(item.name)}
                    data-index="0"
                    className={
                      "box-quicklink__item bd-radius quicklink-logo" +
                      (currentBrand === item.name && " active-brand")
                    }
                  >
                    <img src={item.imageUrl} className="no-text" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="products">
        <div className="container">
          <div className="list-product">
            <h1>Điện thoại</h1>
            <div className="col-content lts-product">
              <div className="row-recommend">
                {product.map((item, idx) => (
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

export default CustomProductPage;
