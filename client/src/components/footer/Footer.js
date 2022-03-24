import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerleft">
        <h1 className="logo">Shop-INN</h1>
        <div className="footerdesc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </div>
        <div className="socialcontainer">
          <div className="socialicom">
            <FacebookIcon />
          </div>
          <div className="socialicom">
            <InstagramIcon />
          </div>
          <div className="socialicom">
            <TwitterIcon />
          </div>
          <div className="socialicom">
            <PinterestIcon />
          </div>
        </div>
      </div>
      <div className="footercenter">
        <div className="footertitle">Useful Links</div>
        <ul className="ul">
          <li className="li">Home</li>
          <li className="li">Cart</li>
          <li className="li">Man Fashion</li>
          <li className="li">Woman Fashion</li>
          <li className="li">Accessories</li>
          <li className="li">My Account</li>
          <li className="li">Order Tracking</li>
          <li className="li">Wishlist</li>
          <li className="li">Settings</li>
          <li className="li">Terms</li>
        </ul>
      </div>
      <div className="footerright">
        <div className="contactitem">
          622 Dixie Path , South Tobinchester 98336
        </div>
        <div className="contactitem">+1 234 56 78</div>
        <div className="contactitem">contact@shopinn.dev</div>
        <img
          alt=""
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          className="payment"
        />
      </div>
    </div>
  );
};

export default Footer;
