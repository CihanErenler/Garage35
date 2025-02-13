import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import useTranslation from '../../hooks/useTranslation';

const SortingOptions = () => {
  const { t } = useTranslation();
  const [selectedSort, setSelectedSort] = useState('newest');

  const sortOptions = [
    { value: 'newest', label: t('listings.sort.newest') },
    { value: 'price-asc', label: t('listings.sort.priceAsc') },
    { value: 'price-desc', label: t('listings.sort.priceDesc') },
    { value: 'mileage', label: t('listings.sort.mileage') },
    { value: 'year', label: t('listings.sort.year') }
  ];

  return (
    <div className="bg-gray-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-600 text-lg font-bold">
            Showing 104 vehicles
          </div>
          
          <div className="relative inline-block">
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:border-red-500"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortingOptions; 