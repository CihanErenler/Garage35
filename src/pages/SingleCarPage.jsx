import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {
  FaCalendarAlt,
  FaGasPump,
  FaCarSide,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { BsSpeedometer } from "react-icons/bs";
import useTranslation from "../hooks/useTranslation";
import { useListings } from "../context/listingContext";
import { IoLocationOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";

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

const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-4"
      >
        <h2 className="text-navy-900 text-2xl font-bold">{title}</h2>
        <svg
          className={`h-6 w-6 transform text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="border-t border-gray-200 px-6 py-4">{children}</div>
      )}
    </div>
  );
};

CollapsibleSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool,
};

const SingleCarPage = () => {
  const { registration, vehicleType } = useParams();
  const { t } = useTranslation();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { fetchCarById } = useListings();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === car?.images?.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? car?.images?.length - 1 : prev - 1,
    );
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
                <div className="text-sm">+ toimitomaksu</div>
              </div>
            </div>
          </div>

          {/* Car Quick Specs */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <FaCarSide className="text-gray-400" />
              <span>Sedan</span>
            </div>
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
            <div className="flex items-center gap-2">
              <IoLocationOutline className="text-gray-400" />
              <span>Porvoo</span>
            </div>
          </div>

          {/* Value Proposition Tag */}
          {car.value_proposition && (
            <div className="mt-4">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                {car.value_proposition}
              </span>
            </div>
          )}
        </div>

        {/* Rest of your existing JSX (image gallery, etc.) */}
        <div className="mb-8">
          {/* Left Column - Image Gallery */}
          <div className="relative">
            {/* Image Container */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              {car?.images && car.images.length > 0 && (
                <img
                  src={car.images[currentImageIndex].url}
                  alt={`${car.make} ${car.model} - Image ${currentImageIndex + 1}`}
                  className="h-full w-full object-contain transition-transform duration-500"
                />
              )}

              {/* Navigation Arrows */}
              {car?.images && car.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft size={24} />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
                    aria-label="Next image"
                  >
                    <FaChevronRight size={24} />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute right-4 bottom-4 rounded bg-black/50 px-2 py-1 text-sm text-white">
                    {currentImageIndex + 1} / {car.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Preview */}
            {car?.images && car.images.length > 1 && (
              <div className="mt-4 flex gap-2 overflow-x-auto">
                {car.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded ${
                      index === currentImageIndex ? "ring-2 ring-red-500" : ""
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={`${car.make} ${car.model} - Thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Car Information Sections */}
        <div className="mt-8 space-y-4">
          <CollapsibleSection title={t("listings.car.basicInfo")} defaultOpen>
            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <div className="text-gray-500">
                  {t("listings.car.specs.make")}
                </div>
                <div className="text-navy-900 font-medium">{car.make}</div>
              </div>
              <div>
                <div className="text-gray-500">
                  {t("listings.car.specs.model")}
                </div>
                <div className="text-navy-900 font-medium">{car.model}</div>
              </div>
              <div>
                <div className="text-gray-500">
                  {t("listings.car.specs.mileage")}
                </div>
                <div className="text-navy-900 font-medium">
                  {(car.mileage / 1000).toFixed(0)} km
                </div>
              </div>
              <div>
                <div className="text-gray-500">
                  {t("listings.car.specs.bodyType")}
                </div>
                <div className="text-navy-900 font-medium">Sedan</div>
              </div>
              <div>
                <div className="text-gray-500">
                  {t("listings.car.specs.registration")}
                </div>
                <div className="text-navy-900 font-medium">
                  {car.registration}
                </div>
              </div>
              <div>
                <div className="text-gray-500">
                  {t("listings.car.specs.fuelType")}
                </div>
                <div className="text-navy-900 font-medium">
                  {getFuelTypeLabel(car.fuel_type)}
                </div>
              </div>
              <div>
                <div className="text-gray-500">
                  {t("listings.car.specs.transmission")}
                </div>
                <div className="text-navy-900 font-medium">
                  {t(
                    `listings.car.specs.transmissionTypes.${car.transmission_type.toLowerCase()}`,
                  )}
                </div>
              </div>
              <div>
                <div className="text-gray-500">
                  {t("listings.car.specs.doors")}
                </div>
                <div className="text-navy-900 font-medium">{car.doors}</div>
              </div>
              <div>
                <div className="text-gray-500">
                  {t("listings.car.specs.drive")}
                </div>
                <div className="text-navy-900 font-medium">
                  {t(
                    `listings.car.specs.gearingTypes.${car.drive.toLowerCase()}`,
                  )}
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title={t("listings.car.technicalInfo")}>
            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <div className="text-gray-500">
                  {t("listings.car.specs.power")}
                </div>
                <div className="text-navy-900 font-medium">{car.power} kW</div>
              </div>
              <div>
                <div className="text-gray-500">
                  {t("listings.car.specs.weight")}
                </div>
                <div className="text-navy-900 font-medium">
                  {car.dry_weight} kg
                </div>
              </div>
              <div>
                <div className="text-gray-500">
                  {t("listings.car.specs.topSpeed")}
                </div>
                <div className="text-navy-900 font-medium">
                  {car.top_speed} km/h
                </div>
              </div>
              <div>
                <div className="text-gray-500">
                  {t("listings.car.specs.consumption")}
                </div>
                <div className="text-navy-900 font-medium">
                  {car.consumption} l/100km
                </div>
              </div>
              <div>
                <div className="text-gray-500">
                  {t("listings.car.specs.co2")}
                </div>
                <div className="text-navy-900 font-medium">{car.co2} g/km</div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title={t("listings.car.features")}>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {car.accessories.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
};

export default SingleCarPage;
