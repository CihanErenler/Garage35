import PropTypes from "prop-types";

const InfoBoxItem = ({ icon, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rotate-45 transform rounded-full bg-red-500/5" />
      <div className="relative">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red-500/10 transition-colors group-hover:bg-red-500/20">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-semibold">{title}</h3>
        <p className="leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  );
};

InfoBoxItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default InfoBoxItem;
