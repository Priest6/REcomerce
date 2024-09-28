import React, { useEffect, useState } from "react";
import "./detailPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  dataCartProduct,
  stateData,
  stateFormatPrice,
} from "../../redux/selector";
import { saveToLocalStorage } from "../../data/localstorage";
import { ADD_CART, UPDATE_CART } from "../../redux/action";
import PreviewImages from "../../components/previewImages/PreviewImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import RelatedProducts from "../../components/relatedProducts/RelatedProducts";

const DetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataCart = useSelector(dataCartProduct);

  //savelocal
  saveToLocalStorage("dataCart", dataCart);

  //det data
  const data = useSelector(stateData);
  const formatPrice = useSelector(stateFormatPrice);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const para = useParams().id;

  //filter product from id
  const [item] = data.filter((item) => item._id.$oid === para);
  console.log("item :>> ", item);

  useEffect(() => {
    setProduct(item);
  }, [item]);

  const plusHandler = () => {
    setQuantity((prev) => {
      return prev + 1;
    });
  };

  const minusHandler = () => {
    setQuantity((prev) => {
      if (prev === 1) {
        return 1;
      } else {
        return prev - 1;
      }
    });
  };

  //addCart
  const addCartHandler = () => {
    const indexCart = dataCart.findIndex(
      (e) => e.item._id.$oid === product._id.$oid
    );

    //dispatch action
    if (indexCart > 0) {
      dispatch(UPDATE_CART({ index: indexCart, quantityUpdate: quantity }));
    } else {
      dispatch(
        ADD_CART({
          item: product,
          quantityCart: quantity,
        })
      );
    }
    alert("them vao gio hang thanh cong!");
    navigate("/cart");
  };
  //render
  return (
    <div>
      {product && product.length !== 0 && (
        <div className="containerDetail row">
          <div className="itemDetail">
            <div className="col-md-6">
              <PreviewImages product={product} />
            </div>
            <div className="col-md-6">
              <div className="productDetail">
                <p className="productDetail_p1">{product.name}</p>
                <p className="productDetail_p2">
                  {formatPrice(product.price)}VND
                </p>
                <p className="productDetail_p3">{product.short_desc}</p>
                <p className="">
                  <span className="productDetail_p4_span1">
                    CATEGORY:{""}
                    <span className="productDetail_p4_span2">
                      {product.category}
                    </span>
                  </span>
                </p>
                <div className="containerQuantityDetail">
                  <div className="quantityDetail">
                    <button className="quantityDetail_button">QUANTITY</button>
                    <div
                      className="quantityDetail_span_plus_minus"
                      onClick={minusHandler}
                    >
                      <FontAwesomeIcon icon={faCaretLeft} />
                    </div>
                    <span className="quantityDetail_span">{quantity}</span>
                    <div
                      className="quantityDetail_span_plus_minus"
                      onClick={plusHandler}
                    >
                      <FontAwesomeIcon icon={faCaretRight} />
                    </div>
                  </div>

                  <button className="addButtonDetail" onClick={addCartHandler}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* -----Description---- */}
          <div className="descriptionDetail">
            <button className="descriptionDetail_button">DESCRIPTION</button>
            <p className="descriptionDetail_p1">PRODUCT DESCRIPTION</p>
            <p className="descriptionDetail_p2">{product.long_desc}</p>
          </div>
          <RelatedProducts products={product} />
        </div>
      )}
    </div>
  );
};

export default DetailPage;
