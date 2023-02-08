import PropTypes from "prop-types";
import "./banner.scss";

function Banner({ children }) {
  return <section className="bannerContainer">{children}</section>;
}

Banner.propTypes = {
  children: PropTypes.element,
};

Banner.defaultProps = {
  children: (
    <div>
      <img alt="" />
    </div>
  ),
};

export default Banner;
