// eslint-disable-next-line react/prop-types
const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="bg-gray-900 py-12 mb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white text-center">{title}</h1>
        {subtitle && (
          <p className="text-gray-400 text-center mt-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageTitle; 