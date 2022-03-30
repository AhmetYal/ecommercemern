import React from "react";
import { Link } from "react-router-dom";

import "./categoryItem.css";

const CategoryItems = ({ item }) => {
  return (
    <div className="cat-item">
      <Link to={`/products/${item.cat}`}>
        <img className="cat-img" alt="" src={item.img} />
        <div className="cat-info">
          <h1 className="cat-title">{item.title}</h1>
          <button className="cat-button">SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItems;
