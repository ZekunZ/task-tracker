import PropTypes from "prop-types";

// use three props color, text and onClick

const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="btn"
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

// declare default button props
Button.defaultProps = {
  color: "steelblue",
};

// declare props types
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func, // func is onClick is a function
};

export default Button;
