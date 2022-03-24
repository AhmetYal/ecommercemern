import React from "react";
import "./categoryItem.css";

const CategoryItems = ({ item }) => {
  return (
    <div className="cat-item">
      <img className="cat-img" alt="" src={item.img} />
      <div className="cat-info">
        <h1 className="cat-title">{item.title}</h1>
        <button className="cat-button">SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItems;
