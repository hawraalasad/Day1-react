import "../assets/css/container.css";
import items from "../assets/Data/Data";
import Modal from "./Modal";
import React, { useState } from "react";
import ProductList from "./ProductList";

const ProductItem = ({ productImage, productName, productPrice }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="item-container">
      <img src={productImage} alt="cookies" className="item-image" />
      <h3>{productName}</h3>
      <p>{productPrice}</p>
      <button className="modal-button" onClick={() => setModal(true)}>
        Delete Item
      </button>{" "}
      {modal && <Modal closeModal={setModal} />}
    </div>
  );
};

export default ProductItem;
