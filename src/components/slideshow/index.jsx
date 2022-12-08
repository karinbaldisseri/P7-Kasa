import PropTypes from "prop-types";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./slideshow.scss";

const images = [
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
]; 

// function Slideshow({ images }) {
function Slideshow({ title }) {
  console.log(title);
  console.log(images);
  const [currentPic, setCurrentPic] = useState(0);

  const nextImg = () => {
    if (currentPic === images.length - 1) {
      setCurrentPic(0);
    } else {
      setCurrentPic(currentPic + 1);
    }
  };

  const previousImg = () => {
    if (currentPic === 0) {
      setCurrentPic(images.length - 1);
    } else {
      setCurrentPic(currentPic - 1);
    }
  };

  return (
    <section className="slideshowContainer">
      {/* {console.log(images)}
      {console.log(images[2])} */}
      <img src={images[currentPic]} alt="This accommodation" />
      {images.length > 1 && (
        <>
          <FaChevronLeft
            fill="white"
            className="chevronLeft"
            onClick={previousImg}
          />
          <FaChevronRight
            fill="white"
            className="chevronRight"
            onClick={nextImg}
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
  title: PropTypes.string.isRequired,
  // images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
