import PropTypes from "prop-types";
import useTranslation from "../../hooks/useTranslation";

const InfoItem = ({ label, value }) => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-start gap-2 rounded bg-gray-50 p-2">
      <div className="font-medium font-semibold text-red-500">{label}: </div>
      <div className="text-navy-900 font-medium">
        {value || t("listings.car.specs.unknown")}
      </div>
    </div>
  );
};

InfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InfoItem;
