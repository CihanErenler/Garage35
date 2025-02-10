import { FaGasPump, FaCog, FaTachometerAlt } from 'react-icons/fa';
import useTranslation from '../../hooks/useTranslation';

const VehicleGrid = ({ filters }) => {
  const { t } = useTranslation();

  // This would normally come from an API
  const vehicles = []; // Add your vehicle data here

  return (
    <div>
      <p className="text-gray-600 mb-6">
        {t('listing.results.showing').replace('{{count}}', vehicles.length)}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="relative">
              <img 
                src={vehicle.image} 
                alt={vehicle.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {vehicle.featured && (
                <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-sm">
                  {t('listing.vehicle.featured')}
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
              <p className="text-2xl font-bold text-red-500 mb-4">${vehicle.price}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <FaGasPump className="mx-auto text-gray-400 mb-1" />
                  <span className="text-sm text-gray-600">{vehicle.fuel}</span>
                </div>
                <div className="text-center">
                  <FaCog className="mx-auto text-gray-400 mb-1" />
                  <span className="text-sm text-gray-600">{vehicle.transmission}</span>
                </div>
                <div className="text-center">
                  <FaTachometerAlt className="mx-auto text-gray-400 mb-1" />
                  <span className="text-sm text-gray-600">{vehicle.mileage}</span>
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
                {t('listing.vehicle.viewDetails')}
              </button>
            </div>
          </div>
        ))}
      </div>

      {vehicles.length > 0 && (
        <div className="text-center mt-12">
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors">
            {t('listing.results.loadMore')}
          </button>
        </div>
      )}
    </div>
  );
};

export default VehicleGrid; 