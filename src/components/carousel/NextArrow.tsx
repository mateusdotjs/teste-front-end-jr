import Next from "../../assets/icons/carousel/right-arrow.svg?react";
import "./carousel.scss";

const NextArrow = ({ onClick }) => {
  return (
    <button className="carousel-button right-arrow" onClick={onClick}>
      <Next />
    </button>
  );
};

export default NextArrow;
