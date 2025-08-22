import PropTypes from "prop-types";

const PageHero = ({ title, subtitle, image }) => {
  return (
    <div className="relative flex min-h-[200px] items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 to-gray-950/70" />
        <img
          src={image}
          alt="Luxury Car Showroom"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <span className="mb-4 block text-lg font-semibold text-red-500">
            Garage35
          </span>
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            {title}
          </h1>
          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-300">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute right-0 bottom-0 left-0 z-10 h-32 bg-gradient-to-t from-white to-transparent" /> */}
    </div>
  );
};

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PageHero;
