import { Link } from 'react-router-dom';
import useTranslation from '../../hooks/useTranslation';
import heroImage from '../../assets/hero.jpg';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[60vh] md:min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/50" />
        <img
          src={heroImage}
          alt="Luxury Car"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-12 md:py-0">
        <div className="max-w-3xl">
          <span className="text-red-500 font-semibold text-base md:text-lg mb-2 md:mb-4 block">
            {t('home.hero.welcome')}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl">
            {t('home.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16">
            <Link
              to="/listing"
              className="inline-flex items-center justify-center px-6 py-3 text-base md:text-lg font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-all duration-300 hover:-translate-y-1"
            >
              {t('home.hero.cta')}
              <svg 
                className="w-5 h-5 ml-2" 
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
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
