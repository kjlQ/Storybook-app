import PropTypes from "prop-types";

const Button = ({ children, variant, size, onClick }) => {
  return (
    <button onClick={onClick} className={`${variant} ${size}`}>
      {children}
    </button>
  );
};
export default Button;

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["medium", "large"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
};
