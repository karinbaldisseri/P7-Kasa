import PropTypes from "prop-types";
import "./tags.scss";

function Tags({ tagItems }) {
  return (
    <div className="tagsContainer">
      {tagItems.map((tag) => {
        return (
          <p className="tagName" key={tag}>
            {tag}
          </p>
        );
      })}
    </div>
  );
}

Tags.propTypes = {
  tagItems: PropTypes.arrayOf(PropTypes.string),
};

Tags.defaultProps = {
  tagItems: [],
};

export default Tags;
