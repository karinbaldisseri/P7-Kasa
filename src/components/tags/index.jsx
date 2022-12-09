import PropTypes from "prop-types";
import "./tags.scss";

function Tags({ tagItems }) {
  return (
    <div className="tagsContainer">
      {tagItems.map((tag, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <p className="tagName" key={index}>
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
  tagItems: ["none", "none", "none"],
};

export default Tags;
