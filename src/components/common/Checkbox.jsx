import PropTypes from 'prop-types';

const Checkbox = ({ label, checked, onChange, className = '' }) => {
  return (
    <label className={`flex items-center p-2 hover:bg-gray-50 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
        checked={checked}
        onChange={onChange}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Checkbox; 