import { FaSearch, FaTimes } from 'react-icons/fa';
import useTranslation from '../../hooks/useTranslation';

const Filters = ({ filters, setFilters }) => {
  const { t } = useTranslation();

  const clearFilters = () => {
    setFilters({
      brand: '',
      model: '',
      year: '',
      price: '',
      type: ''
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">{t('listing.filters.title')}</h2>
        <button
          onClick={clearFilters}
          className="text-gray-500 hover:text-red-500 flex items-center gap-2"
        >
          <FaTimes />
          <span>{t('listing.filters.clear')}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <select
          value={filters.brand}
          onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
          className="w-full p-2 border rounded-md"
        >
          <option value="">{t('listing.filters.brand')}</option>
          {/* Add brand options */}
        </select>

        {/* Add other filter inputs */}

        <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
          <FaSearch />
          <span>{t('listing.filters.search')}</span>
        </button>
      </div>
    </div>
  );
};

export default Filters; 