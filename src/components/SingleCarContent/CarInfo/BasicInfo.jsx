import PropTypes from "prop-types";
import useTranslation from "../../../hooks/useTranslation";
import InfoItem from "../InfoItem";

const BasicInfo = ({ car }) => {
  const { t } = useTranslation();
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

  return (
    <div className="rounded-lg bg-white">
      <div className="grid gap-4 md:grid-cols-2">
        <InfoItem
          label={t("listings.car.specs.make")}
          value={car.make || t("listings.car.specs.unknown")}
        />
        <InfoItem
          label={t("listings.car.specs.model")}
          value={car.model || t("listings.car.specs.unknown")}
        />
        <InfoItem
          label={t("listings.car.specs.year")}
          value={car.year || t("listings.car.specs.unknown")}
        />
        <InfoItem
          label={t("listings.car.specs.mileage")}
          value={
            car.mileage ? `${car.mileage} km` : t("listings.car.specs.unknown")
          }
        />
        <InfoItem
          label={t("listings.car.specs.bodyType")}
          value={
            car.bodyType
              ? t(`listings.car.specs.bodyTypes.${car.bodyType.toLowerCase()}`)
              : t("listings.car.specs.unknown")
          }
        />
        <InfoItem
          label={t("listings.car.specs.registration")}
          value={car.registration || t("listings.car.specs.unknown")}
        />
        <InfoItem
          label={t("listings.car.specs.fuelType")}
          value={
            car.fuelType
              ? getFuelTypeLabel(car.fuelType)
              : t("listings.car.specs.unknown")
          }
        />
        <InfoItem
          label={t("listings.car.specs.transmission")}
          value={
            car.transmission
              ? t(`listings.car.specs.transmissionTypes.${car.transmission}`)
              : t("listings.car.specs.unknown")
          }
        />
      </div>
    </div>
  );
};

BasicInfo.propTypes = {
  car: PropTypes.shape({
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    mileage: PropTypes.number,
    bodyType: PropTypes.string,
    registration: PropTypes.string,
    fuelType: PropTypes.string,
    transmission: PropTypes.string,
  }).isRequired,
};

export default BasicInfo;
