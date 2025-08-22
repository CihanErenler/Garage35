import useTranslation from "../../../hooks/useTranslation";
import CollapsableArea from "../../CollapsableArea/CollapsableArea";
import BasicInfo from "./BasicInfo";
import TechnicalInfo from "./TechnicalInfo";
import FeatureItem from "../FeatureItem";
import PropTypes from "prop-types";

const CarInfo = ({ car }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-8 space-y-4">
        <CollapsableArea title={t("listings.car.basicInfo")} defaultOpen>
          <BasicInfo car={car} />
        </CollapsableArea>

        <CollapsableArea title={t("listings.car.technicalInfo")}>
          <TechnicalInfo car={car} />
        </CollapsableArea>

        <CollapsableArea title={t("listings.car.features")}>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            {car.accessories.map((feature, index) => (
              <FeatureItem key={index} feature={feature} />
            ))}
          </div>
        </CollapsableArea>
      </div>
    </>
  );
};

CarInfo.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarInfo;
