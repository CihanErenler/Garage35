import PropTypes, { string } from "prop-types";
import { useNavigate } from "react-router-dom";

const Button = ({
  children,
  type = "button",
  className = "",
  onClick,
  disabled = false,
  variant = "primary",
  size = "medium",
  to = "",
}) => {
  const navigate = useNavigate();
  const baseStyles = "font-medium rounded-lg transition-colors duration-200";
  const variants = {
    primary: "bg-red-500 text-white hover:bg-red-600",
    outline: "border-2 border-red-500 text-red-500 hover:bg-red-50 bg-white",
    ghost: "text-white bg-gray-700 hover:bg-gray-800",
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      onClick();
    }
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "outline", "ghost"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  to: PropTypes.string,
};

export default Button;
