import React from "react";
import "./popup.css";
import { useDispatch, useSelector } from "react-redux";
import { stateFormatPrice } from "../../redux/selector";
import { useNavigate } from "react-router-dom";
import { HIDE_POPUP } from "../../redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Popup = ({ dataList }) => {
  // console.log("dataList :>> ", dataList);
  const formatPrice = useSelector(stateFormatPrice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //hide popup
  const btnCloseHandler = () => {
    dispatch(HIDE_POPUP());
  };

  //to detail
  const navigatingDetailHandler = () => {
    navigate(`detail/${dataList._id.$oid}`);
    dispatch(HIDE_POPUP());
  };

  //render
  return (
    <div className="wapperPopup">
      <div className="containerPopup row">
        <div className="itemPopup1 col-md-6">
          <img src={dataList.img1} alt="" />
        </div>
        <div className="itemPopup2 col-md-6">
          <div className="btnX row">
            <button className="btnClose" onClick={btnCloseHandler}>
              x
            </button>
          </div>
          <div className="col-md-12">
            <h3>{dataList.name}</h3>
            <p>{formatPrice(dataList)}</p>
            <p>{dataList.short_desc}</p>
            <button className="btnDetail" onClick={navigatingDetailHandler}>
              <FontAwesomeIcon icon={faCartShopping} />
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
