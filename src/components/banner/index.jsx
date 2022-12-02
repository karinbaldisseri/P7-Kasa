import "./banner.scss";
import PropTypes from "prop-types";

/* export default function Banner(props) {
  return (
    <section className="bannerContainer">
      <img src={props.img} alt={props.alt}/>
      <h2>{props.title}</h2>
    </section>
  );
} */

function Banner({ children }) {
  return <section className="bannerContainer">{children}</section>;
}

Banner.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Banner;
