import "../assets/css/container.css";
import Modal from "./Modal";
import React, { useState } from "react";
import Review from "./ReviewModal";

const ProductItem = ({ productImage, productName, productPrice }) => {
  const [modal, setModal] = useState(false);
  const [review, setReview] = useState(false);
  return (
    <div className="item-container">
      <img src={productImage} alt="cookies" className="item-image" />

      <h3>{productName}</h3>
      <p>{productPrice}</p>
      <div className="buttons">
        <button className="modal-button" onClick={() => setReview(true)}>
          Share your review
        </button>
        {review && <Review closeModal={setReview} />}
        {/* <button className="modal-button" onClick={() => setModal(true)}>
          Delete Item
        </button>{" "} */}

        {modal && <Modal closeModal={setModal} />}
      </div>
    </div>
  );
};

export default ProductItem;
