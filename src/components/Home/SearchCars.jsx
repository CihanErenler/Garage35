import { useState } from 'react';
import useTranslation from '../../hooks/useTranslation';
import {  FaCar, FaCog, FaCalendarAlt, FaGasPump } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb';
import { BiDollar } from 'react-icons/bi';
import RangeSlider from '../common/RangeSlider';
import DropdownCard from '../common/DropdownCard';
import CheckboxGroup from '../common/CheckboxGroup';
import PropTypes from 'prop-types';

const SearchCars = ({ bgColor = "bg-gray-950", layout = "default" }) => {
  const { t } = useTranslation();
  const isLightBg = bgColor.includes('white');
  const [priceRange, setPriceRange] = useState([2000, 200000]);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isQuidOpen, setIsQuidOpen] = useState(false);
  const [isMakeOpen, setIsMakeOpen] = useState(false);
  const [selectedMakes, setSelectedMakes] = useState([]);
  const [selectedQuids, setSelectedQuids] = useState([]);
  const [isEngineTypeOpen, setIsEngineTypeOpen] = useState(false);
  const [selectedEngineType, setSelectedEngineType] = useState([]);
  const [isGearingOpen, setIsGearingOpen] = useState(false);
  const [selectedGearing, setSelectedGearing] = useState([]);
  const [yearRange, setYearRange] = useState([1970, 2025]);
  const [isYearOpen, setIsYearOpen] = useState(false);


  const carMakes = [
    'Audi',
    'BMW',
    'Mercedes-Benz',
    'Volkswagen',
    'Toyota',
    'Tesla'
  ];

  const carModels = [
    'CLA',
    'Transit',
    'Vitara',
    '530',
    'A4',
    'B',
    'Caddy Maxi',
    'Octavia'
  ];

  const engineTypes = [
    'Petrol',
    'Diesel',
    'Hybrid',
    'Electric',
    'Plug-in Hybrid'
  ];

  const gearingTypes = [
    'Automatic',
    'Manual',
    'Semi-automatic',
    'CVT'
  ];



  const getDropdownLabel = (type, selectedItems) => {
    if (selectedItems.length === 0) {
      return t(`home.search.${type}`);
    }
    if (selectedItems.length === 1) {
      return selectedItems[0];
    }
    return `${selectedItems.length} ${t('home.search.selected')}`;
  };

  const handlePriceChange = ( newValue) => {

    setPriceRange(newValue);
  };

  const formatPrice = (value) => {
    return `€${value.toLocaleString()}`;
  };

  const handleYearChange = (newValue) => {
    setYearRange(newValue);
  };

  const formatYear = (value) => {
    return value.toString();
  };


  return (
    <section className={`${layout === 'default' ? 'py-6' : 'p-4'} ${bgColor} `}>
      <div className={`${layout === 'default' ? 'container mx-auto px-4' : ''}`}>
        <h2 className={`${layout === 'sidebar' ? 'text-2xl' : 'text-3xl'} font-bold mb-8 ${isLightBg ? 'text-gray-900' : 'text-white'}`}>
          {t('home.search.title')}
        </h2>

        <div className={`grid grid-cols-1 ${layout === 'default' ? 'md:grid-cols-3' : ''} gap-2 mb-2`}>
          <DropdownCard
            isOpen={isMakeOpen}
            onToggle={() => setIsMakeOpen(!isMakeOpen)}
            onClose={() => setIsMakeOpen(false)}
            icon={FaCar}
            label={getDropdownLabel('make', selectedMakes)}
            isLightBg={isLightBg}
            layout={layout}
          >
            <CheckboxGroup
              options={carMakes}
              selectedValues={selectedMakes}
              onChange={setSelectedMakes}
            />
          </DropdownCard>

          <DropdownCard
            isOpen={isQuidOpen}
            onToggle={() => setIsQuidOpen(!isQuidOpen)}
            onClose={() => setIsQuidOpen(false)}
            icon={FaCog}
            label={getDropdownLabel('quid', selectedQuids)}
            isLightBg={isLightBg}
            layout={layout}
          >
            <CheckboxGroup
              options={carModels}
              selectedValues={selectedQuids}
              onChange={setSelectedQuids}
            />
          </DropdownCard>

          <DropdownCard
            isOpen={isYearOpen}
            onToggle={() => setIsYearOpen(!isYearOpen)}
            onClose={() => setIsYearOpen(false)}
            icon={FaCalendarAlt}
            label={yearRange[0] === 1970 && yearRange[1] === 2025
              ? t('home.search.modelYear')
              : `${formatYear(yearRange[0])} — ${formatYear(yearRange[1])}`
            }
            isLightBg={isLightBg}
            layout={layout}
            hasSlider={true}
          >
            <RangeSlider
              value={yearRange}
              onChange={handleYearChange}
              min={1970}
              max={2025}
              step={1}
              formatValue={formatYear}
            />
          </DropdownCard>
        </div>

        <div className={`grid grid-cols-1 ${layout === 'default' ? 'md:grid-cols-3' : ''} gap-2 mb-6`}>
          <DropdownCard
            isOpen={isPriceOpen}
            onToggle={() => setIsPriceOpen(!isPriceOpen)}
            onClose={() => setIsPriceOpen(false)}
            icon={BiDollar}
            label={priceRange[0] === 5500 && priceRange[1] === 68900 
              ? t('home.search.price')
              : `${formatPrice(priceRange[0])} — ${formatPrice(priceRange[1])}`
            }
            isLightBg={isLightBg}
            layout={layout}
            hasSlider={true}
          >
            <RangeSlider
              value={priceRange}
              onChange={handlePriceChange}
              min={5500}
              max={200000}
              step={100}
              formatValue={formatPrice}
            />
          </DropdownCard>

          <DropdownCard
            isOpen={isEngineTypeOpen}
            onToggle={() => setIsEngineTypeOpen(!isEngineTypeOpen)}
            onClose={() => setIsEngineTypeOpen(false)}
            icon={FaGasPump}
            label={getDropdownLabel('engineType', selectedEngineType)}
            isLightBg={isLightBg}
            layout={layout}
          >
            <CheckboxGroup
              options={engineTypes}
              selectedValues={selectedEngineType}
              onChange={setSelectedEngineType}
            />
          </DropdownCard>

          <DropdownCard
            isOpen={isGearingOpen}
            onToggle={() => setIsGearingOpen(!isGearingOpen)}
            onClose={() => setIsGearingOpen(false)}
            icon={TbManualGearbox}
            label={getDropdownLabel('gearing', selectedGearing)}
            isLightBg={isLightBg}
            layout={layout}
          >
            <CheckboxGroup
              options={gearingTypes}
              selectedValues={selectedGearing}
              onChange={setSelectedGearing}
            />
          </DropdownCard>
        </div>

        <div className={`${layout === 'sidebar' ? 'flex flex-col gap-3' : 'flex flex-col md:flex-row justify-between items-center gap-4'}`}>
          {layout === 'sidebar' ? (
            <>
              <button className="w-full py-3 bg-red-500 text-white text-center rounded-lg hover:bg-red-600 transition-colors">
                SHOW 104 VEHICLES
              </button>
              <button 
                className="text-gray-700 text-center hover:text-gray-500 transition-colors"
                onClick={() => {/* Clear all selections */}}
              >
                Clear selections
              </button>
            </>
          ) : (
            <>
              <button 
                className={`${isLightBg ? 'text-gray-700' : 'text-white'} hover:text-gray-500 transition-colors`}
                onClick={() => {/* Clear all selections */}}
              >
                {t('home.search.clearSelections')}
              </button>
              <div className="flex gap-4 w-full md:w-auto">
                <button className="px-12 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex-1 md:w-[500px]">
                  SHOW 104 VEHICLES
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

SearchCars.propTypes = {
  bgColor: PropTypes.string,
  layout: PropTypes.string
};

export default SearchCars; 