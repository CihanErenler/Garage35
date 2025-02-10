import { Link } from 'react-router-dom';
import useTranslation from '../../hooks/useTranslation';

const CallToAction = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/listing" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors min-w-[12rem]"
            >
              {t('home.cta.primary')}
            </Link>
            <Link 
              to="/about" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors min-w-[12rem]"
            >
              {t('home.cta.secondary')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 