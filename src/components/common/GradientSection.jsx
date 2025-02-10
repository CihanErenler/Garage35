const GradientSection = ({ children, className = "", dark = false }) => {
  return (
    <section className={`relative py-20 ${dark ? 'text-white' : ''} ${className}`}>
      {dark ? (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default GradientSection; 