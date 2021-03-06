import React, { useEffect, useState, useContext } from "react";
import "../../../css/product/topCategory.css";
import "../../../css/product/slideBrand.css";
import { useParams, useHistory } from "react-router-dom";
import brandApi from "../../../api/brandApi";
import "../../../css/product/product.css";
import ProductFrame from "../../common/ProductFrame";
import productApi from "../../../api/productApi";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import "../../../css/common/Filter.css"

function SaleProductPage() {
  const { filter } = useParams();
  const history = useHistory();

  const getCurrentPage = () => {
    if (filter !== undefined) {
      let arr = filter.split("page=");
      if (arr !== undefined && arr.length == 2) return arr[1][0];
      else return 1;
    } else {
      return 1;
    }
  };

  const getSortType = () => {
    if (filter !== undefined) {
      let arr = filter.split("sortType=");
      if (arr === undefined || arr.length === 1) {
        return "";
      } else {
        return arr[1].split("&")[0];
      }
    }
    return "";
  };

  const getFilterPrice = () => {
    if (filter !== undefined) {
      let arr = filter.split("priceFilter=");
      if (arr === undefined || arr.length === 1) {
        return "";
      } else {
        return arr[1].split("&")[0];
      }
    }
    return "";
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

  const [sortType, setSortType] = useState("");

  const [filterPrice, setFilterPrice] = useState("");

  useEffect(async () => {
    getActiveBrand();
    getProduct();
    await setCurrentBrand(getCurrentBrand());
    document.getElementById("mySelect").value = getSortType();
    document.getElementById("mySelectPrice").value = getFilterPrice();
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
    if (sortType !== "") {
      let link =
        "/sale/brand=" +
        currentBrand +
        "&sortType=" +
        sortType +
        "&page=" +
        numPage;
      history.push(link);
    } else {
      let link2 = "/sale/brand=" + currentBrand + "&page=" + numPage;
      history.push(link2);
    }
  };

  const handleClickBrand = (name) => {
    let lk = "/sale/brand=" + name;
    history.push(lk);
  };

  const handleClickSortType = () => {
    let st = document.getElementById("mySelect").value;
    if (st !== "") {
      let lk =
        "/sale/brand=" +
        currentBrand +
        "&sortType=" +
        st +
        "&priceFilter=" +
        document.getElementById("mySelectPrice").value +
        "&page=1";
      setCurrentPage(1);
      setSortType(st);
      //document.getElementById("mySelect").value = "";
      history.push(lk);
    }
  };

  const handleClickFilterPrice = () => {
    let st = document.getElementById("mySelectPrice").value;
    if (st !== "") {
      let lk =
        "/sale/brand=" +
        currentBrand +
        "&sortType=" +
        document.getElementById("mySelect").value +
        "&priceFilter=" +
        st +
        "&page=1";
      setCurrentPage(1);
      //setSortType(getSortType());
      setFilterPrice(st);
      //document.getElementById("mySelectPrice").value = getFilterPrice();
      history.push(lk);
    }
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
                    src="http://res.cloudinary.com/dobsh4rbw/image/upload/v1639403472/commom/banner121321085025.jpg"
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
                onClick={() => history.push("/sale")}
                data-index="0"
                className={
                  "box-quicklink__item bd-radius quicklink-logo textAllProduct" +
                  (currentBrand === "all" && " active-brand")
                }
              >
                T???t c??? ??i???n tho???i
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
      <section>
        <div className="row">
          <select  id="mySelect" onChange={() => handleClickSortType()}>
            <option value="">S???p x???p</option>
            <option value="ascending">Gi?? th???p ?????n cao</option>
            <option value="descending">Gi?? cao ?????n th???p</option>
          </select>
          <select  id="mySelectPrice" onChange={() => handleClickFilterPrice()}>
            <option value="">Gi??</option>
            <option value="duoi5trieu">D?????i 5 tri???u</option>
            <option value="5trieutoi10trieu">5 tri???u t???i 10 tri???u</option>
            <option value="10trieutoi20trieu">10 tri???u t???i 20 tri???u</option>
            <option value="tren20trieu">Tr??n 20 tri???u</option>
          </select>
        </div>
      </section>
      <div className="products">
        <div className="container">
          <div className="list-product">
            <h1>??i???n tho???i {currentBrand !== "all" ? currentBrand : ""}</h1>
            <div className="col-content lts-product">
              <div className="row-recommend">
                {product.map((item, idx) => (
                  <ProductFrame
                    key={idx + 1}
                    id={item.id}
                    name={item.name}
                    currentPrice={item.currentPrice}
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

export default SaleProductPage;
