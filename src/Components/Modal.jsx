import React from "react";

import "../assets/css/container.css";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <h4>Are you sure you want to delete Item?</h4>
        <div className="two">
          <button className="modal-button" onClick={() => closeModal(false)}>
            Close
          </button>
          <button className="modal-button-delete">Yes, Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
