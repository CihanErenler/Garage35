import PropTypes from "prop-types";

const Input = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
  disabled = false,
  required = false,
  error = "",
  ...rest
}) => {
  const baseInputStyles =
    "w-full px-4 py-2 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent";
  const inputStateStyles = error
    ? "border-red-500 bg-red-50"
    : disabled
      ? "border-slate-300 bg-slate-100 cursor-not-allowed"
      : "border-slate-300 bg-slate-50 hover:border-slate-400";

  // Hide number input arrows
  const numberInputStyles =
    type === "number"
      ? "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      : "";

  const handleChange = (e) => {
    if (type === "number") {
      const inputValue = e.target.value;
      // Allow empty string or positive numbers
      if (
        inputValue === "" ||
        (!isNaN(inputValue) && parseFloat(inputValue) >= 0)
      ) {
        onChange(e);
      }
    } else {
      onChange(e);
    }
  };

  return (
    <div className={`${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        min={type === "number" ? "0" : undefined}
        className={`${baseInputStyles} ${inputStateStyles} ${numberInputStyles}`}
        {...rest}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default Input;
