import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShowAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color="green"
        text={showAdd ? "Close" : "Add"}
        onClick={onShowAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  // give default values for props
  title: "Task Tracker",
};

Header.propTypes = {
  // define prop types
  title: PropTypes.string.isRequired, // title should be string and required
};

export default Header;
