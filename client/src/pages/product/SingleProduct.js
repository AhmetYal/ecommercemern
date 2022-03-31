import "./singleproduct.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };
  return (
    <div className="productspage">
      <div className="productwrapper">
        <div className="productimage">
          <img className="proimg" src={product.img} alt="" />
        </div>
        <div className="productinfo">
          <h1 className="protitle">{product.title}</h1>
          <p className="prodesc">{product.desc}</p>
          <span className="prize">$ {product.price}</span>
          <div className="profiltercontainer">
            <div className="profilter">
              <span className="filtertext">Color</span>
              <div className="filtercolor" />
            </div>
            <div className="profilter">
              <span className="filtertext">Size</span>
              <select className="select">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>
          <div className="addcontainer">
            <div className="amount">
              <RemoveIcon onClick={() => handleQuantity("dec")} />
              <span className="amountvalue">{quantity}</span>
              <AddIcon onClick={() => handleQuantity("inc")} />
            </div>
            <button onClick={handleClick} className="addbutton">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
