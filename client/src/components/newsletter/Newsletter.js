import "./newsletter.css";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1 className="newstitle">Newsletter</h1>
      <div className="newsdesc">
        Get timely updates from your favorite products.
      </div>
      <div className="input-container">
        <input className="input" placeholder="Your email" />
        <button className="newsbutton">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
