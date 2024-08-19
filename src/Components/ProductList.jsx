import ProductItem from "./ProductItem";

import "../assets/css/container.css";
import React, { useState } from "react";

const ProductList = ({ items }) => {
  const itemsDisplay = items.map((item) => {
    return (
      <ProductItem
        productImage={item.image}
        productName={item.name}
        productPrice={item.price}
      />
    );
  });
  return <div className="divs">{itemsDisplay}</div>;
};

export default ProductList;
