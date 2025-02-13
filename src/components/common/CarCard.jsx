import { FaUsers, FaCarSide, FaCog, FaTachometerAlt, FaSnowflake } from 'react-icons/fa';
import useTranslation from '../../hooks/useTranslation';
import PropTypes from 'prop-types';

const CarCard = ({ 
  car, 
  showFeatures = false, // Control features visibility
  showFeaturedTag = true // Control featured tag visibility
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        {showFeaturedTag && (
          <div className="absolute top-0 left-0 bg-red-500 text-white px-4 py-2 text-sm font-bold skew-x-[-10deg] transform -translate-x-2">
            {t('home.featured.featured')}
          </div>
        )}
        <img 
          src={car.image} 
          alt={car.title}
          className="w-full h-48 sm:h-56 object-cover rounded-t-lg"
        />
      </div>

      <div className="p-3 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{car.title}</h3>
            <span className="text-sm text-gray-500">{car.category}</span>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <FaUsers className="text-gray-400" />
            <span className="text-sm">{car.specs.seats} {t('listings.car.specs.seats')}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaCarSide className="text-gray-400" />
            <span className="text-sm">{car.specs.bags} {t('listings.car.specs.bags')}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaCog className="text-gray-400" />
            <span className="text-sm">{car.specs.transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaTachometerAlt className="text-gray-400" />
            <span className="text-sm">{car.specs.mileage}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaSnowflake className="text-gray-400" />
            <span className="text-sm">{t('listings.car.specs.ac')}</span>
          </div>
        </div>

        {/* Features */}
        {showFeatures && car.features && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            {car.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Price Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6">
          <div className="mb-4 sm:mb-0">
            <div className="text-2xl font-bold text-gray-900">${car.price}</div>
          </div>
          <button className="w-full sm:w-auto px-6 py-2 bg-gray-950 text-white rounded-lg hover:bg-red-600 transition-colors">
            {t('listings.car.cta')}
          </button>
        </div>
      </div>
    </div>
  );
};

CarCard.propTypes = {
  car: PropTypes.object.isRequired,
  showFeatures: PropTypes.bool,
  showFeaturedTag: PropTypes.bool
};

export default CarCard; 