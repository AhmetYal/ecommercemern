import React from "react";
import "./productspage.css";

const ProductsPage = () => {
  return (
    <div className="productspage">
      <h1 className="producttitle">Dresses</h1>
      <div className="filtercontainer">
        <div className="filter">
          <span className="filtertext">Filter Products:</span>
          <select className="select">
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className="select">
            <option disabled selected>
              Size
            </option>
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
          <select className="select">
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
