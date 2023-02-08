import PropTypes from "prop-types";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./slideshow.scss";

function Slideshow({ images }) {
  const [currentPic, setCurrentPic] = useState(0);

  const nextPic = () => {
    if (currentPic === images.length - 1) {
      setCurrentPic(0);
    } else {
      setCurrentPic(currentPic + 1);
    }
  };

  const previousPic = () => {
    if (currentPic === 0) {
      setCurrentPic(images.length - 1);
    } else {
      setCurrentPic(currentPic - 1);
    }
  };

  return (
    <section className="slideshowContainer">
      <img src={images[currentPic]} alt="This accommodation" />
      {images.length > 1 && (
        <>
          <FaChevronLeft
            fill="white"
            className="chevron left"
            onClick={previousPic}
          />
          <FaChevronRight
            fill="white"
            className="chevron right"
            onClick={nextPic}
          />
          <p>
            {currentPic + 1}/{images.length}
          </p>
        </>
      )}
    </section>
  );
}

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

Slideshow.defaultProps = {
  images: [],
};

export default Slideshow;
