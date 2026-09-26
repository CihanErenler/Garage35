import PropTypes from "prop-types";

const Textarea = ({
  id,
  label,
  value,
  onChange,
  placeholder = "",
  className = "",
  disabled = false,
  required = false,
  error = "",
  rows = 4,
  resize = true,
  ...rest
}) => {
  const baseTextareaStyles =
    "w-full px-4 py-2 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent";
  const textareaStateStyles = error
    ? "border-red-500 bg-red-50"
    : disabled
      ? "border-gray-300 bg-slate-100 cursor-not-allowed"
      : "border-gray-300 bg-slate-50 hover:border-gray-400";
  const resizeStyles = resize ? "resize-y" : "resize-none";

  return (
    <div className={`${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
        className={`${baseTextareaStyles} ${textareaStateStyles} ${resizeStyles}`}
        {...rest}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  rows: PropTypes.number,
  resize: PropTypes.bool,
};

export default Textarea;
