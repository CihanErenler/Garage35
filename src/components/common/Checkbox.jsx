import PropTypes from "prop-types";

const Checkbox = ({ label, checked, onChange, className = "" }) => {
  return (
    <label
      className={`flex cursor-pointer items-center ${className} mb-2 rounded-lg p-1 transition-colors hover:bg-gray-50 ${
        checked ? "bg-red-50" : ""
      }`}
    >
      <div className="relative flex items-center">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
        <div
          className={`mr-2 flex h-5 w-5 items-center justify-center rounded border transition-colors ${
            checked ? "border-red-500 bg-red-500" : "border-gray-300 bg-white"
          }`}
        >
          {checked && (
            <svg
              className="h-3 w-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
        <span className={`text-gray-700 transition-colors`}>{label}</span>
      </div>
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Checkbox;
