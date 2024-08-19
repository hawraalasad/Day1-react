import React, { useState } from "react";

const Visitors = () => {
  const [visitor, setVisitor] = useState(0);
  const updateVisitor = () => {
    setVisitor(visitor + 1);
  };

  return (
    <div>
      <button className="visitor-button" onClick={updateVisitor}>
        Click Me
      </button>
      <p>Visitors: {visitor}</p>
    </div>
  );
};

export default Visitors;
