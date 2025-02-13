import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const CheckboxGroup = ({ 
  options, 
  selectedValues, 
  onChange,
  className = '',
  getOptionLabel = (option) => option 
}) => {
  const handleChange = (option) => {
    const newSelected = selectedValues.includes(option)
      ? selectedValues.filter(item => item !== option)
      : [...selectedValues, option];
    onChange(newSelected);
  };

  return (
    <div className={`max-h-60 overflow-auto ${className}`}>
      {options.map((option) => (
        <Checkbox
          key={option}
          label={getOptionLabel(option)}
          checked={selectedValues.includes(option)}
          onChange={() => handleChange(option)}
        />
      ))}
    </div>
  );
};

CheckboxGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  getOptionLabel: PropTypes.func
};

export default CheckboxGroup; 