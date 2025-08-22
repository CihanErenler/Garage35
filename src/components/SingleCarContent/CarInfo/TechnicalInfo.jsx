import PropTypes from "prop-types";
import useTranslation from "../../../hooks/useTranslation";
import InfoItem from "../InfoItem";

const TechnicalInfo = ({ car }) => {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg bg-white">
      <div className="grid gap-4 md:grid-cols-2">
        <InfoItem
          label={t("listings.car.specs.power")}
          value={
            car.power ? `${car.power} kW` : t("listings.car.specs.unknown")
          }
        />
        <InfoItem
          label={t("listings.car.specs.weight")}
          value={
            car.weight ? `${car.weight} kg` : t("listings.car.specs.unknown")
          }
        />
        <InfoItem
          label={t("listings.car.specs.topSpeed")}
          value={
            car.topSpeed
              ? `${car.topSpeed} km/h`
              : t("listings.car.specs.unknown")
          }
        />
        <InfoItem
          label={t("listings.car.specs.consumption")}
          value={
            car.consumption
              ? `${car.consumption} l/100km`
              : t("listings.car.specs.unknown")
          }
        />
        <InfoItem
          label={t("listings.car.specs.co2")}
          value={car.co2 ? `${car.co2} g/km` : t("listings.car.specs.unknown")}
        />
      </div>
    </div>
  );
};

TechnicalInfo.propTypes = {
  car: PropTypes.shape({
    power: PropTypes.number,
    weight: PropTypes.number,
    topSpeed: PropTypes.number,
    consumption: PropTypes.number,
    co2: PropTypes.number,
  }).isRequired,
};

export default TechnicalInfo;
