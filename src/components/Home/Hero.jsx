import { Link } from 'react-router-dom';
import useTranslation from '../../hooks/useTranslation';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/50" />
        <img
          src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80"
          alt="Luxury Car"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="text-red-500 font-semibold text-lg mb-4 block">
            {t('home.hero.welcome')}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            {t('home.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/listing"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-all duration-300 hover:-translate-y-1"
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
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-800/80 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              {t('home.hero.learnMore')}
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-1">1000+</div>
              <div className="text-gray-300">Cars Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="hidden md:block bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
