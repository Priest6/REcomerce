import React from "react";
import { useSelector } from "react-redux";
import "./relatedProducts.css";
import { stateData, stateFormatPrice } from "../../redux/selector";
import { useNavigate } from "react-router-dom";

const RelatedProducts = ({ products }) => {
  const navigate = useNavigate();
  const data = useSelector(stateData);
  const formatPrice = useSelector(stateFormatPrice);

  //filter
  const relateProduct = data.filter((item) => {
    return item.category === products.category && item.name !== products.name;
  });

  //
  const detailHandler = (id) => {
    navigate(`/detail/${id}`);
  };

  //render
  return (
    <div>
      {relateProduct.length !== 0 && (
        <div className="related">
          <p className="related_p">RELATED PRODUCTS</p>
          <div className="containerRelated">
            {relateProduct.map((item) => (
              <div
                className="productRelated"
                key={item._id.$oid}
                onClick={() => detailHandler(item._id.$oid)}
              >
                <img src={item.img1} alt="" />
                <h5 className="productRelated_name">{item.name}</h5>
                <p className="productRelated_price">
                  {formatPrice(item.price)}VND
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatedProducts;
