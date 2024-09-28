import React from "react";
import "./banner.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate("/shop");
  };
  return (
    <div>
      <div className="wapperBanner">
        <p>NEW INSPIRATION 2023</p>
        <h3>10% OFF ON NEW SEASON</h3>
        <button onClick={handlerClick}>Browse Collections</button>
      </div>
    </div>
  );
};

export default Banner;
