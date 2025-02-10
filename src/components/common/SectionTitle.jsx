const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-xl text-gray-600">{subtitle}</p>
      <div className="w-20 h-1 bg-red-500 mx-auto mt-6" />
    </div>
  );
};

export default SectionTitle; 