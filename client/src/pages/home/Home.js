import React from "react";
import Category from "../../components/categories/Category";
import Slider from "../../components/slider/Slider";
import ProductList from "../../components/productlist/ProductList";

const Home = () => {
  return (
    <div>
      <Slider />
      <Category />
      <ProductList />
    </div>
  );
};

export default Home;
