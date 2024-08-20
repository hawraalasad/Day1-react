import React, { useState } from "react";

const Visitors = () => {
  const [visitor, setVisitor] = useState(0);
  const updateVisitor = () => {
    setVisitor(visitor + 1);
  };

  return (
    <div className="visitor-container">
      <button className="visitor-button" onClick={updateVisitor}>
        <b>Try a Cookie</b>
      </button>

      <p className="cookies">Cookies: {visitor}</p>
    </div>
  );
};

export default Visitors;
