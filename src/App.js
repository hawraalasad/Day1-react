import "./App.css";
import shop from "./assets/media/millie-s-cookie-shop-york-yorkshire-uk-BARE9Y.jpg";
import "./assets/css/container.css";
import items from "./assets/Data/Data";

function App() {
  const itemsDisplay = items.map((item) => (
    <div className="item-container">
      <img src={item.image} alt="cookies" className="item-image" />
      <h3>{item.name}</h3>
      <p>{item.price}</p>
    </div>
  ));
  return (
    <div className="main-div">
      <div className="name">
        <h1>Cookies and Beyond</h1>
        <h5>Where cookies maniacs gather</h5>
        <img src={shop} alt="shop" className="image" />
      </div>
      <div className="divs">{itemsDisplay}</div>
    </div>
  );
}

export default App;
