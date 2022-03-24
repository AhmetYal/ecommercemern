import { useState } from "react";
import { sliderItems } from "../../data";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./slider.css";

const Slider = () => {
  const [slideindex, setSlideIndex] = useState(0);
  const handleClickR = () => {
    setSlideIndex(slideindex < 2 ? slideindex + 1 : 0);
  };

  const handleClickL = () => {
    setSlideIndex(slideindex > 0 ? slideindex - 1 : 2);
  };
  return (
    <div className="slider">
      <div className="arrow-left" onClick={handleClickL}>
        <ArrowBackIosIcon />
      </div>
      <div className="slider-wrapper">
        {sliderItems.map((item) => (
          <div className="slide" key={item.id}>
            <div className="img-container">
              <img className="image" alt="" src={item.img} />
            </div>
            <div className="info-container">
              <h1 className="title">{item.title}</h1>
              <p className="desc">{item.desc}</p>
              <button className="button">SHOW NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow-right" direction="right" onClick={handleClickR}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default Slider;
