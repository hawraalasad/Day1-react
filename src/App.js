import "./App.css";
import shop from "./assets/media/millie-s-cookie-shop-york-yorkshire-uk-BARE9Y.jpg";
import "./assets/css/container.css";
import items from "./assets/Data/Data";
import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const itemsDisplay = items
    .filter((item) => {
      if (search.toLowerCase() === "") {
        return true;
      } else {
        return item.name.toLowerCase().includes(search.toLowerCase());
      }
    })
    .map((item) => (
      <div key={item.id} className="item-container">
        <img src={item.image} alt="cookies" className="item-image" />
        <h3>{item.name}</h3>
        <p>{item.price}</p>
      </div>
    ));
  return (
    <div className="main-div">
      <div className="name">
        <h1>Cookies and Beyond</h1>
        <p>
          <b>Where cookies maniacs gather</b>
        </p>
        <img src={shop} alt="shop" className="image" />
      </div>
      <br />
      <h1 className="name">Explore our heavenly cookies</h1>
      <input
        className="searchBar"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      ></input>
      <div className="divs">{itemsDisplay}</div>
    </div>
  );
}

export default App;
