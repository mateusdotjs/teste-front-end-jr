import Prev from "../../assets/icons/carousel/left-arrow.svg?react";
import "./carousel.scss";

const PrevArrow = ({ onClick }) => {
  return (
    <button className="carousel-button left-arrow" onClick={onClick}>
      <Prev />
    </button>
  );
};

export default PrevArrow;
