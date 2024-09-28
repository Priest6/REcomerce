import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <div className="wapperCategory">
        <div className="row titleCategory">
          <p>Carefully created collections</p>
          <h3>browse out categories</h3>
        </div>
        <div className="row itemCategory1">
          <Link className="col-mmd-6" to="/shop">
            <img src="/image/product_1.png" alt="" />
          </Link>
          <Link className="col-mmd-6" to="/shop">
            <img src="/image/product_2.png" alt="" />
          </Link>
        </div>
        <div className="row itemCategory2">
          <Link className="col-mmd-6" to="/shop">
            <img src="/image/product_3.png" alt="" />
          </Link>
          <Link className="col-mmd-6" to="/shop">
            <img src="/image/product_4.png" alt="" />
          </Link>
          <Link className="col-mmd-6" to="/shop">
            <img src="/image/product_5.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
