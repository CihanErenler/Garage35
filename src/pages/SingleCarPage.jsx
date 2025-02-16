import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {
  FaCalendarAlt,
  FaTachometerAlt,
  FaGasPump,
  FaCog,
  FaCarSide,
  FaDoorOpen,
  FaBalanceScale,
} from "react-icons/fa";
import { BsSpeedometer } from "react-icons/bs";
import { MdPower } from "react-icons/md";
import useTranslation from "../hooks/useTranslation";
import { useListings } from "../context/listingContext";

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

const FeatureItem = ({ feature }) => (
  <div className="flex items-center gap-2 text-gray-600">
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
  </div>
);

FeatureItem.propTypes = {
  feature: PropTypes.string.isRequired,
};

const ImageGallery = ({ images, activeImage, setActiveImage, make, model }) => (
  <div className="relative mb-4">
    <div className="relative aspect-auto overflow-hidden">
      <img
        src={images[activeImage].url}
        alt={`${make} ${model}`}
        className="h-full w-full object-cover"
      />
    </div>
    <div className="mt-2">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`relative h-20 w-32 flex-shrink-0 overflow-hidden border-2 ${
              activeImage === index ? "border-red-500" : "border-transparent"
            }`}
          >
            <img
              src={image.url}
              alt={`${make} ${model} - Image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  </div>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activeImage: PropTypes.number.isRequired,
  setActiveImage: PropTypes.func.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};

const SingleCarPage = () => {
  const { registration, vehicleType } = useParams();
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState(0);
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { fetchCarById } = useListings();

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

  const formatPrice = (price) => {
    return new Intl.NumberFormat("fi-FI").format(price);
  };

  const carSpecs = [
    {
      icon: FaCalendarAlt,
      label: t("listings.car.specs.year"),
      value: car.year,
    },
    {
      icon: FaTachometerAlt,
      label: t("listings.car.specs.mileage"),
      value: `${(car.mileage / 1000).toFixed(0)} tkm`,
    },
    {
      icon: FaGasPump,
      label: t("listings.car.specs.fuelType"),
      value: getFuelTypeLabel(car.fuel_type),
    },
    {
      icon: FaCog,
      label: t("listings.car.specs.transmission"),
      value: t(
        `listings.car.specs.transmissionTypes.${car.transmission_type.toLowerCase()}`,
      ),
    },
    {
      icon: MdPower,
      label: t("listings.car.specs.power"),
      value: `${car.power} kW`,
    },
    {
      icon: FaCog,
      label: t("listings.car.specs.drive"),
      value: t(`listings.car.specs.gearingTypes.${car.drive.toLowerCase()}`),
    },
    {
      icon: FaCarSide,
      label: t("listings.car.specs.bodyType"),
      value: t(`listings.car.specs.bodyTypes.${car.body_type.toLowerCase()}`),
    },
    {
      icon: FaDoorOpen,
      label: t("listings.car.specs.doors"),
      value: car.doors,
    },
    {
      icon: FaBalanceScale,
      label: t("listings.car.specs.weight"),
      value: `${car.dry_weight} kg`,
    },
    {
      icon: BsSpeedometer,
      label: t("listings.car.specs.topSpeed"),
      value: `${car.top_speed} km/h`,
    },
    {
      icon: FaGasPump,
      label: t("listings.car.specs.consumption"),
      value: `${car.consumption} l/100km`,
    },
    {
      icon: FaGasPump,
      label: t("listings.car.specs.co2"),
      value: `${car.co2} g/km`,
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column - Image Gallery */}
          <ImageGallery
            images={car.images}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
            make={car.make}
            model={car.model}
          />

          {/* Right Column - Car Info */}
          <div className="">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {car.make} {car.model}
              </h1>
              <p className="mt-1 text-gray-700">{car.trim}</p>
            </div>
            <div>
              {/* Car Specifications */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                {carSpecs.map((spec, index) => (
                  <CarSpecItem key={index} {...spec} />
                ))}
              </div>
              <div className="mt-4 text-3xl font-bold text-gray-900">
                {formatPrice(car.price)} €
              </div>
              {car.financing && (
                <div className="mt-1 space-y-1">
                  <p className="text-gray-600">
                    {t("listings.car.financing")} {Math.round(car.financing)}€/
                    {t("listings.car.month")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Car Details */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          {/* Description */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              {t("listings.car.description")}
            </h2>
            <p className="whitespace-pre-line text-gray-600">
              {car.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              {t("listings.car.features")}
            </h2>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {car.accessories.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCarPage;
