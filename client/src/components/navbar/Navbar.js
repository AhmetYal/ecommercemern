import "./navbar.css";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="left">
          <span className="lang">EN</span>
          <div className="searchcontainer">
            <input className="input" />
          </div>
        </div>
        <div className="center">
          <Link to="/" className="logo">
            <h1> Shop-INN</h1>
          </Link>
        </div>
        <div className="right">
          <Link to="/register" className="menuitem">
            REGISTER
          </Link>
          <Link to="/login" className="menuitem">
            SING IN
          </Link>
          <Link to="/cart" className="menuitem">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
