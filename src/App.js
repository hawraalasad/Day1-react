import "./App.css";
import shop from "./assets/media/real.jpg";
import "./assets/css/container.css";
import items from "./assets/Data/Data";
import React, { useState } from "react";

import ProductList from "./Components/ProductList";
import Visitors from "./Components/visitors";
import Search from "./Components/Search";
import ReviewsData from "./Components/ReviewsData";

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
    <div>
      <div className="main-div">
        <div className="name">
          <h1>MILLIES'S COOKIES</h1>
          <p>
            <b>"A little taste of heaven"</b>
          </p>
          <Visitors />
          <br></br>
          <img src={shop} alt="shop" className="image" />
        </div>
        <br />
        <h1 className="name">Explore our heavenly menu</h1>
        <Search setSearch={setSearch} />
        <div className="divs">
          <ProductList items={itemsSearch} />
        </div>
      </div>
      <div className="review-display">
        <h1>Your Reviews</h1>
        <ReviewsData />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default App;
