import React, { useState } from "react";
import "./previewImages.css";

const PreviewImages = ({ product }) => {
  const [selectImage, setSelectImage] = useState();

  return (
    <div className="containerPreview">
      <div className="image1234Preview">
        <img
          src={product.img1}
          alt=""
          onClick={() => setSelectImage(product.img1)}
        />
        <img
          src={product.img2}
          alt=""
          onClick={() => setSelectImage(product.img2)}
        />
        <img
          src={product.img3}
          alt=""
          onClick={() => setSelectImage(product.img3)}
        />
        <img
          src={product.img4}
          alt=""
          onClick={() => setSelectImage(product.img4)}
        />
      </div>
      <div className="imagePreviewPreview">
        <img src={selectImage ? selectImage : product.img1} alt="preview" />
      </div>
    </div>
  );
};

export default PreviewImages;
