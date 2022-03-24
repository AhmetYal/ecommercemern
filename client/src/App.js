import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductsPage from "./pages/productspage/ProductsPage";
import Navbar from "./components/navbar/Navbar";
import Announcment from "./components/announcment/Announcment";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";
import ProductList from "./components/productlist/ProductList";
import SingleProduct from "./pages/product/SingleProduct";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
function App() {
  return (
    <>
      <Announcment />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ProductList />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
