import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  FaTachometerAlt,
  FaEuroSign,
  FaGasPump,
  FaCalendarAlt,
  FaCog,
} from "react-icons/fa";
import useTranslation from "../../hooks/useTranslation";

const FeaturedCarCard = ({ car, featured = true }) => {
  const { t } = useTranslation();

  const getFuelTypeLabel = (type) => {
    switch (type) {
      case "B":
        return "Petrol";
      case "D":
        return "Diesel";
      case "S":
        return "Electric";
      case "HB":
        return "Hybrid";
      default:
        return "N/A";
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("fi-FI").format(price);
  };

  return (
    <Link to={`/listing/${car.registration}/${car.vehicle_type}`}>
      <div className="relative cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
        {featured && (
          <div className="absolute top-0 left-0 z-10 -translate-x-2 skew-x-[-10deg] transform bg-red-500 px-4 py-2 text-sm font-bold text-white">
            {t("home.featured.featured")}
          </div>
        )}
        <div className="relative">
          <img
            src={car.image.url}
            alt={`${car.make} ${car.model}`}
            className="h-64 w-full object-cover"
          />
        </div>

        <div className="flex h-[150px] flex-col p-6">
          <div>
            <div className="mb-1 flex gap-2 text-lg font-black text-gray-900">
              <span>{car.make}</span>
              <span>{car.model}</span>
            </div>
            <div className="mb-2 flex flex-wrap gap-2 text-sm">
              <div className="flex items-center gap-1 text-gray-600">
                <FaCalendarAlt className="text-red-500" />
                <span>{car.year}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <FaTachometerAlt className="text-red-500" />
                <span>
                  {car.mileage > 1000
                    ? (car.mileage / 1000).toFixed(0)
                    : car.mileage}
                  {car.mileage > 1000 ? "tkm" : "km"}
                </span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <FaGasPump className="text-red-500" />
                <span>{getFuelTypeLabel(car.fuel_type)}</span>
              </div>
              {car.drive && (
                <div className="flex items-center gap-1 text-gray-600">
                  <FaCog className="text-red-500" />
                  <span>{car.drive}</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <FaEuroSign className="text-gray-900" size={20} />
              <span className="text-xl font-black text-gray-900">
                {formatPrice(car.price)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

FeaturedCarCard.propTypes = {
  car: PropTypes.shape({
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    trim: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    fuel_type: PropTypes.string.isRequired,
    drive: PropTypes.string,
    registration: PropTypes.string.isRequired,
    vehicle_type: PropTypes.string.isRequired,
  }).isRequired,
  featured: PropTypes.bool,
};

export default FeaturedCarCard;
