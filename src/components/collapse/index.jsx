import PropTypes from "prop-types";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "./collapse.scss";

function Collapse({ header, content }) {
  const [expand, setExpand] = useState(false);

  return (
    <article
      className={expand ? "collapseElement" : " collapseElement notExpanded"}
    >
      <button type="button" onClick={() => setExpand(!expand)}>
        <h2>{header}</h2>
        <span>
          {expand ? (
            <FaChevronUp fill="white" />
          ) : (
            <FaChevronDown fill="white" />
          )}
        </span>
      </button>
      {expand && <div className="content">{content}</div>}
    </article>
  );
}

Collapse.propTypes = {
  header: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Collapse.defaultProps = {
  header: "Titre",
  content: "Contenu",
};

export default Collapse;
