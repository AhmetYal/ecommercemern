import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductsPage from "./pages/productspage/ProductsPage";
import Navbar from "./components/navbar/Navbar";
import Announcment from "./components/announcment/Announcment";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";
import SingleProduct from "./pages/product/SingleProduct";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Announcment />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Routes>

      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
