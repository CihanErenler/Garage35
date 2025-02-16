import { FaUsers, FaCarSide, FaCog, FaTachometerAlt } from "react-icons/fa";
import useTranslation from "../../hooks/useTranslation";
import PropTypes from "prop-types";

const CarCard = ({
  car,
  showFeatures = false, // Control features visibility
  showFeaturedTag = true, // Control featured tag visibility
}) => {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      {showFeaturedTag && (
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

      <div className="p-6">
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-red-500">{car.make}</span>
            <span className="text-sm font-medium text-gray-500">
              {car.year}
            </span>
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            {car.model} {car.trim.split("*")[0]}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              €{car.price.toLocaleString()}
            </span>
            {car.financing && (
              <span className="text-sm text-gray-500">
                {t("listings.car.from")} €{Math.round(car.financing)}/
                {t("listings.car.month")}
              </span>
            )}
          </div>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <FaTachometerAlt className="text-red-500" />
            <span>{(car.mileage / 1000).toFixed(0)}k km</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaCarSide className="text-red-500" />
            <span>{car.vehicle_type === "5" ? "SUV" : car.vehicle_type}</span>
          </div>
          {car.accessories.includes("Automaattivaihteisto") && (
            <div className="flex items-center gap-2 text-gray-600">
              <FaCog className="text-red-500" />
              <span>{t("listings.car.automatic")}</span>
            </div>
          )}
          {car.accessories.includes("Ilmastointi: Automaattinen") && (
            <div className="flex items-center gap-2 text-gray-600">
              <FaUsers className="text-red-500" />
              <span>{t("listings.car.ac")}</span>
            </div>
          )}
        </div>

        {showFeatures && (
          <div className="border-t border-gray-100 pt-4">
            <ul className="space-y-2">
              {car.accessories.slice(0, 3).map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="mt-6 w-full rounded-lg bg-gray-900 py-3 text-white transition-colors hover:bg-red-500">
          {t("listings.car.cta")}
        </button>
      </div>
    </div>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    trim: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mileage: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    vehicle_type: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    financing: PropTypes.number,
  }).isRequired,
  showFeatures: PropTypes.bool,
  showFeaturedTag: PropTypes.bool,
};

export default CarCard;
