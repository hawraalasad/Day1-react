import "../assets/css/container.css";

const Search = ({ setSearch }) => {
  return (
    <input
      className="searchBar"
      type="search"
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search"
    ></input>
  );
};

export default Search;
