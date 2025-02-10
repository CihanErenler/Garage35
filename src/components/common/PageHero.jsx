

const PageHero = ({ title, subtitle, image }) => {
  return (
    <div className="relative min-h-[40vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70" />
        <img
          src={image}
          alt="Luxury Car Showroom"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="text-red-500 font-semibold text-lg mb-4 block">
            Garage35
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
};

export default PageHero; 