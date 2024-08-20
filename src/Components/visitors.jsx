import React, { useState } from "react";

const Visitors = () => {
  const [visitor, setVisitor] = useState(0);
  const updateVisitor = () => {
    setVisitor(visitor + 1);
  };

  return (
    <div>
      <button className="visitor-button" onClick={updateVisitor}>
        Try a Cookie
      </button>
      <p>Cookies: {visitor}</p>
    </div>
  );
};

export default Visitors;
