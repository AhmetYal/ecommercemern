import React from "react";
import "./cart.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

const KEY =
  "pk_test_51KidaXIPg1kOJiE0zn1amcSECWfzmXt56DGh9mbzBFRGLc6OuaSyeDWQhrKE6CuE1sPORGDf3vsO252Bi6P2uoJj00gZCaQHWF";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();

  console.log(KEY);
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <div className="cart">
      <div className="cartwrapper">
        <h1 className="carttitle">YOUR BAG</h1>
        <div className="top">
          <Link to="/">
            <button className="topbutton">CONTINUE SHOPPING</button>
          </Link>
          <div className="toptexts">
            <span className="toptext">Shopping Bag({cart.quantity})</span>
            <span className="toptext">Your Wishlist (0)</span>
          </div>
          <button className="topbutton">CHECKOUT NOW</button>
        </div>
        <div className="bottom">
          <div className="bottominfo">
            {cart.quantity === 0 ? (
              <h2>Your Cart is Empty</h2>
            ) : (
              cart.products.map((product, key) => (
                <div className="pro" key={key}>
                  <div className="producttail">
                    <img className="bottomimg" src={product.img} alt="" />
                    <div className="details">
                      <span className="proname">
                        <b>Product:</b> {product.title}
                      </span>
                      <span className="proid">
                        <b>ID:</b> {product._id}
                      </span>

                      <span className="prosize">
                        <b>Size:</b> 37.5
                      </span>
                    </div>
                    <div className="price">
                      <div className="proamount">
                        <RemoveIcon />
                        <span className="amountvalue">{product.quantity}</span>
                        <AddIcon />
                      </div>
                      <div className="proprice">
                        $ {product.price * product.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="summary">
            <h1 className="summarytitle">ORDER SUMMARY</h1>
            <div className="summaryitem">
              <span className="summarytext">Subtotal</span>
              <span className="summaryprice">$ {cart.total}</span>
            </div>
            <div className="summaryitem">
              <span className="summarytext">Estimated Shipping</span>
              <span className="summaryprice">$ 5.90</span>
            </div>
            <div className="summaryitem">
              <span className="summarytext">Shipping Discount</span>
              <span className="summaryprice">$ -5.90</span>
            </div>
            <div className="summaryitem">
              <span className="summarytext">Total Discount</span>
              <span className="summaryprice">$ {cart.total}</span>
            </div>
            <StripeCheckout
              name="ShopInn"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <div className="summarybutton">CHECKOUT NOW</div>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
