import "./App.css";
import shop from "./assets/media/real.jpg";
import "./assets/css/container.css";
import items from "./assets/Data/Data";
import React, { useState } from "react";
import ProductItem from "./Components/ProductItem";
import ProductList from "./Components/ProductList";
import Visitors from "./Components/visitors";
import Search from "./Components/Search";

function App() {
  const [search, setSearch] = useState("");
  const itemsSearch = items.filter((item) => {
    if (search.toLowerCase() === "") {
      return true;
    } else {
      return item.name.toLowerCase().includes(search.toLowerCase());
    }
  });
  return (
    <div className="main-div">
      <div className="name">
        <h1>MILLIES'S COOKIES</h1>
        <p>
          <b>A little taste of heaven</b>
        </p>
        <Visitors />
        <img src={shop} alt="shop" className="image" />
      </div>
      <br />
      <h1 className="name">Explore our heavenly menu</h1>
      <Search setSearch={setSearch} />
      <div className="divs">
        <ProductList items={itemsSearch} />
      </div>
    </div>
  );
}

export default App;
