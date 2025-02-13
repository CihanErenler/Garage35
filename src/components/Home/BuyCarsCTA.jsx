import { Link } from 'react-router-dom';
import useTranslation from '../../hooks/useTranslation';

const BuyCarsCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80" 
              alt="Car Dealership" 
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              {t('home.buyCars.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('home.buyCars.description')}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              {t('home.buyCars.cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyCarsCTA; 