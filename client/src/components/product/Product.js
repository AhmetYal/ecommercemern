import "./product.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className="product">
      <div className="circle" />
      <img className="product-img" src={item.img} alt="" />
      <div className="product-info">
        <div className="product-icon">
          <ShoppingCartOutlinedIcon />
        </div>
        <Link className="product-icon" to={`/product/${item._id}`}>
          <SearchIcon />
        </Link>
        <div className="product-icon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
