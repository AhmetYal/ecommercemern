import { useState } from "react";
import "./productspage.css";
import { useLocation } from "react-router";
import Products from "../../components/productlist/ProductList";

const ProductsPage = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters, sort);

  return (
    <div className="productspage">
      <h1 className="producttitle">{cat.toUpperCase()}</h1>
      <div className="filtercontainer">
        <div className="filter">
          <span className="filtertext">Filter Products:</span>
          <select className="select" name="color" onChange={handleFilters}>
            <option disabled>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className="select" name="size" onChange={handleFilters}>
            <option disabled>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
        <div className="filter">
          <span className="filtertext">Sort Products:</span>
          <select className="select" onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc"> Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
    </div>
  );
};

export default ProductsPage;
