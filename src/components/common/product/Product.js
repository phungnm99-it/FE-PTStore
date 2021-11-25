import React, { useEffect, useState } from "react";
import "../../../css/product/product.css";
import ProductFrame from "../../common/ProductFrame";
import productApi from "../../../api/productApi";

function Products() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  //const {page} = useParams(1);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    productApi.getAll().then((response) => {
      setProduct(response.data);
    });
  };
  return (
    <div>
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
            <div
              className="dataTables_paginate paging_simple_numbers"
              id="dataTable_paginate"
            >
              {page - 1 > 0 && (
                <a
                  className="paginate_button next"
                  aria-controls="dataTable"
                  data-dt-idx="7"
                  tabIndex="0"
                  id="dataTable_next"
                  onClick={() => setPage(page - 1)}
                >
                  <i className="fas fa-backward"></i>
                </a>
              )}
              {page - 2 > 0 && (
                <span>
                  <a
                    className="paginate_button "
                    aria-controls="dataTable"
                    data-dt-idx="1"
                    tabIndex="0"
                    onClick={() => setPage(page - 2)}
                  >
                    {page - 2}
                  </a>
                </span>
              )}
              {page - 1 > 0 && (
                <span>
                  <a
                    className="paginate_button "
                    aria-controls="dataTable"
                    data-dt-idx="1"
                    tabIndex="0"
                    onClick={() => setPage(page - 1)}
                  >
                    {page - 1}
                  </a>
                </span>
              )}
              <span>
                <a
                  className="paginate_button active-page"
                  aria-controls="dataTable"
                  data-dt-idx="1"
                  tabIndex="0"
                >
                  {page}
                </a>
              </span>
              <span>
                <a
                  className="paginate_button "
                  aria-controls="dataTable"
                  data-dt-idx="1"
                  tabIndex="0"
                  onClick={() => setPage(page + 1)}
                >
                  {page + 1}
                </a>
              </span>
              <span>
                <a
                  className="paginate_button "
                  aria-controls="dataTable"
                  data-dt-idx="1"
                  tabIndex="0"
                  onClick={() => setPage(page + 2)}
                >
                  {page + 2}
                </a>
              </span>
              <a
                className="paginate_button next"
                aria-controls="dataTable"
                data-dt-idx="7"
                tabIndex="0"
                id="dataTable_next"
                onClick={() => setPage(page + 1)}
              >
                <i className="fas fa-forward"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
