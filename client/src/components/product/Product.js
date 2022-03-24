import "./product.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Product = ({ item }) => {
  return (
    <div className="product">
      <div className="circle" />
      <img className="product-img" src={item.img} alt="" />
      <div className="product-info">
        <div className="product-icon">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="product-icon">
          <SearchIcon />
        </div>
        <div className="product-icon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
