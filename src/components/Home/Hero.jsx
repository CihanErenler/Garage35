import useTranslation from "../../hooks/useTranslation";
import heroImage from "../../assets/hero.jpg";
import Button from "../common/Button";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex min-h-[60vh] items-center md:min-h-[80vh]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 to-gray-950/50" />
        <img
          src={heroImage}
          alt="Luxury Car"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-0">
        <div className="max-w-3xl">
          <span className="mb-2 block text-base font-semibold text-red-500 md:mb-4 md:text-lg">
            {t("home.hero.welcome")}
          </span>
          <h1 className="mb-4 text-4xl leading-tight font-bold text-white md:mb-6 md:text-6xl">
            {t("home.hero.title")}
          </h1>
          <p className="mb-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:mb-8 md:text-xl">
            {t("home.hero.subtitle")}
          </p>

          <div className="mb-12 flex flex-col gap-4 sm:flex-row md:mb-16">
            <Button variant="primary" size="large" to="/listing">
              <div className="flex items-center gap-2">
                {t("home.hero.cta")}
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="flex h-[50px] w-[30px] items-start justify-center rounded-full border-2 border-white/30 p-2">
          <div className="h-3 w-1 animate-bounce rounded-full bg-white/50" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
