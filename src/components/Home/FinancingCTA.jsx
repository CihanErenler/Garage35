import { Link } from 'react-router-dom';
import useTranslation from '../../hooks/useTranslation';

const FinancingCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 md:order-1 order-2">
            <h2 className="text-4xl font-bold text-gray-900">
              {t('home.financing.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('home.financing.description')}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              {t('home.financing.cta')}
            </Link>
          </div>

          {/* Right side - Image */}
          <div className="relative md:order-2 order-1">
            <img 
              src="https://images.unsplash.com/photo-1638272181967-7d3772a91265?auto=format&fit=crop&q=80" 
              alt="Car Financing" 
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingCTA; 