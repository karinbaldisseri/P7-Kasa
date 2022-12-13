/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import "./stars.scss";

function Stars({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars[i] = true;
    } else {
      stars[i] = false;
    }
  }

  return (
    <div className="ratingStars">
      {stars.map((starRate, i) => (
        <FaStar
          key={i}
          className="star"
          fill={starRate ? "#FF6060" : "#E3E3E3"}
        />
      ))}
    </div>
  );
}

Stars.propTypes = {
  rating: PropTypes.string,
};

Stars.defaultProps = {
  rating: "0",
};

export default Stars;
