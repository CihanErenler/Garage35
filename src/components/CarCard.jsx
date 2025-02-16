import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaTachometerAlt } from "react-icons/fa";
import useTranslation from "../hooks/useTranslation";

const CarCard = ({ car }) => {
  const { t } = useTranslation();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("fi-FI").format(price);
  };

  return (
    <Link
      to={`/listings/${car.registration}/${car.vehicle_type}`}
      className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={car.image.url}
          alt={`${car.make} ${car.model}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {car.slogan && (
          <div className="absolute top-4 left-0 bg-red-500 px-3 py-1 text-sm font-medium text-white">
            {car.slogan}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">
          {car.make} {car.model}
        </h3>
        <p className="mt-1 text-sm text-gray-600">{car.trim}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            {formatPrice(car.price)} €
          </div>
          {car.financing && (
            <div className="text-sm text-gray-600">
              {t("listings.car.financing")} {Math.round(car.financing)}€/
              {t("listings.car.month")}
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <FaCalendarAlt className="text-red-500" />
            {car.year}
          </div>
          <div className="flex items-center gap-1">
            <FaTachometerAlt className="text-red-500" />
            {(car.mileage / 1000).toFixed(0)} tkm
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {car.accessories.slice(0, 3).map((accessory, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
            >
              {accessory}
            </span>
          ))}
          {car.accessories.length > 3 && (
            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
              +{car.accessories.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    registration: PropTypes.string.isRequired,
    vehicle_type: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    trim: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mileage: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    slogan: PropTypes.string,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    financing: PropTypes.number,
  }).isRequired,
};

export default CarCard;
