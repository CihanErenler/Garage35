import PropTypes from 'prop-types';
import { Slider } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: '#ef4444',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid #ef4444',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(239, 68, 68, 0.1)',
    },
    '&:focus, &.Mui-active': {
      boxShadow: '0 0 0 12px rgba(239, 68, 68, 0.2)',
    },
  },
  '& .MuiSlider-track': {
    height: 3,
    backgroundColor: '#ef4444',
    border: 'none'
  },
  '& .MuiSlider-rail': {
    height: 3,
    backgroundColor: '#d1d5db',
    opacity: 1
  },
}));

const RangeSlider = ({ 
  min, 
  max, 
  step, 
  value, 
  onChange,
  formatValue = (value) => value
}) => {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <div className="px-2 pt-6">
      <StyledSlider
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        disableSwap
      />
      <div className="flex justify-between mt-1">
        <span className="text-sm text-gray-600">{formatValue(value[0])}</span>
        <span className="text-sm text-gray-600">{formatValue(value[1])}</span>
      </div>
    </div>
  );
};

RangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
  formatValue: PropTypes.func
};

export default RangeSlider; 