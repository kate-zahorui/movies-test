import svg from "../../assets/sprite.svg";
import currentRatingImg from "../../assets/star-current.png";

const RatingStar = ({ type }) => {
  if (type === "full") {
    return (
      <svg width="16px" height="16px">
        <use href={`${svg}#icon-star-full`}></use>
      </svg>
    );
  }

  if (type === "current") {
    return (
      <div
        style={{
          width: "16px",
          height: "16px",
          backgroundImage: `url(${currentRatingImg})`,
        }}
      ></div>
    );
  }

  if (type === "empty") {
    return (
      <svg width="16px" height="16px">
        <use href={`${svg}#icon-star-empty`}></use>
      </svg>
    );
  }
};

export default RatingStar;
