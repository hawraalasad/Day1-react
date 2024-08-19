import React from "react";
import "../assets/css/container.css";
import items from "../assets/Data/Data";

const ProductItem = ({ productImage, productName, productPrice }) => {
  return (
    <div key={items.id} className="item-container">
      <img src={productImage} alt="cookies" className="item-image" />
      <h3>{productName}</h3>
      <p>{productPrice}</p>
    </div>
  );
};

export default ProductItem;
