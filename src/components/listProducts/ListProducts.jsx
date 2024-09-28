import React, { useState } from "react";
import "./listProducts.css";
import { useDispatch, useSelector } from "react-redux";
import { stateData, stateFormatPrice, statePopup } from "../../redux/selector";
import { SHOW_POPUP } from "../../redux/action";
import Popup from "../popup/Popup";

const ListProducts = () => {
  const [idImage, setIdImage] = useState("");
  const dispatch = useDispatch();

  //get data
  const data = useSelector(stateData);
  // console.log(data);
  //
  const formatPrice = useSelector(stateFormatPrice);
  //
  const showPopup = useSelector(statePopup);

  //
  const clickHandler = (e) => {
    // console.log(e._id.$oid);
    dispatch(SHOW_POPUP());
    setIdImage(e._id.$oid);
  };

  const dataPopup = data.filter((item) => item._id.$oid === idImage);
  // console.log("dataPopup :>> ", dataPopup);
  //render
  return (
    <div className="wapperList">
      <div className="row itemList1">
        <p>Made in hard way</p>
        <h3>Top Trending products</h3>
      </div>
      <div className="row itemList2">
        {data.map((item) => (
          <div key={item._id.$oid} className="col-md-4">
            <img
              id={item._id.$oid}
              onClick={() => clickHandler(item)}
              src={item.img1}
              alt=""
            />
            <p>{item.name}</p>

            <b>{formatPrice(item.price)} VND</b>
          </div>
        ))}
      </div>
      {showPopup && <Popup dataList={dataPopup[0]} />}
    </div>
  );
};

export default ListProducts;
