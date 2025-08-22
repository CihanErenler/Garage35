import PropTypes from "prop-types";

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

export default FeatureItem;
