import PropTypes from "prop-types";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "./collapse.scss";
// import OpenedArrow from "../../assets/opened_arrow.png";

function Collapse({ header, content }) {
  const [expand, setExpand] = useState(false);
  const toggleCollapse = () => setExpand((previous) => !previous);

  return (
    <article className="collapseElement">
      <button type="button" onClick={toggleCollapse}>
        <h2>{header}</h2>
        <span>
          {expand ? (
            <FaChevronUp fill="white" />
          ) : (
            <FaChevronDown fill="white" />
          )}
        </span>
      </button>
      {expand && <p> {content}</p>}
    </article>
  );
}

Collapse.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Collapse;
