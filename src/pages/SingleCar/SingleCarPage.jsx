import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { FaCalendarAlt, FaGasPump } from "react-icons/fa";
import { BsSpeedometer } from "react-icons/bs";
import useTranslation from "../../hooks/useTranslation";
import { useListings } from "../../context/listingContext";
import { GiGearStickPattern } from "react-icons/gi";

import SingleCarContent from "../../components/SingleCarContent/SingleCarContent";

const CarSpecItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-2 text-gray-600">
    <Icon className="text-red-500" />
    <span>
      {label}: {value}
    </span>
  </div>
);

CarSpecItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const SingleCarPage = () => {
  const { registration, vehicleType } = useParams();
  const { t } = useTranslation();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { fetchCarById } = useListings();

  const getFuelTypeLabel = (type) => {
    switch (type) {
      case "B":
        return t("listings.car.specs.fuelTypes.petrol");
      case "D":
        return t("listings.car.specs.fuelTypes.diesel");
      case "S":
        return t("listings.car.specs.fuelTypes.electric");
      case "HB":
        return t("listings.car.specs.fuelTypes.hybrid");
      default:
        return t("listings.car.specs.fuelTypes.unknown");
    }
  };

  useEffect(() => {
    const loadCar = async () => {
      try {
        const response = await fetchCarById(registration, vehicleType);
        console.log(response);
        setCar(response);
      } catch (error) {
        console.error("Error loading car:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCar();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl text-gray-600">{t("listings.car.notFound")}</p>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("fi-FI").format(price);
  };

  return (
    <div className="bg-gray-50">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-navy-900 text-4xl font-bold">{car.make}</h1>
              <p className="text-xl text-gray-600">{car.model}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-red-500">
                {Math.round(car.financing)}€/kk
              </div>
              <div className="text-right text-gray-600">
                Tai {formatPrice(car.price)}€
                <div className="text-sm">+ toimistokulu</div>
              </div>
            </div>
          </div>

          {/* Car Quick Specs */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-gray-400" />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <GiGearStickPattern className="text-gray-400" />
              <span>
                {t(
                  `listings.car.specs.transmissionTypes.${car.transmission_type.toLowerCase()}`,
                )}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BsSpeedometer className="text-gray-400" />
              <span>{(car.mileage / 1000).toFixed(0)}tkm</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGasPump className="text-gray-400" />
              <span>{getFuelTypeLabel(car.fuel_type)}</span>
            </div>
          </div>

          <SingleCarContent car={car} />

          {/* Value Proposition Tag */}
          {car.value_proposition && (
            <div className="mt-4">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                {car.value_proposition}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCarPage;
