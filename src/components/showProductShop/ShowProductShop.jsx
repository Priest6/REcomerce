import React, { useState } from "react";
import "./showProductShop.css";
import { useSelector } from "react-redux";
import {
  stateCategoryShopPage,
  stateData,
  stateFormatPrice,
} from "../../redux/selector";
import { Link } from "react-router-dom";

const ShowProductShop = () => {
  //get data
  const data = useSelector(stateData);
  //get category
  const category = useSelector(stateCategoryShopPage);
  //get formatPrice
  const formatPrice = useSelector(stateFormatPrice);
  //
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    console.log("e :>> ", e);
    setSearch(e.target.value);
  };

  //render
  return (
    <div>
      <div className="inputShowShop">
        <input
          type="text"
          placeholder="Enter search here!"
          onChange={searchHandler}
        />
        <div className="">
          <select>
            <option>Default Sorting</option>
            <option>Sort By Name</option>
          </select>
        </div>
      </div>
      {data
        .filter((item) =>
          category === "All" ? item : item.category === category
        )
        .filter((sea) => sea.name.toUpperCase().includes(search.toUpperCase()))
        .map((item, index) => (
          <div className="itemShowShop" key={index}>
            <Link to={`/detail/${item._id.$oid}`}>
              <img src={item.img1} id={item._id.$oid} alt="" />
            </Link>
            <h3>{item.name}</h3>
            <p>{formatPrice(item.price)} VND</p>
          </div>
        ))}
    </div>
  );
};

export default ShowProductShop;
