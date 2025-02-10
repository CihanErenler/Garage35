import { FaUsers, FaCarSide, FaCog, FaTachometerAlt, FaSnowflake } from 'react-icons/fa';
import useTranslation from '../hooks/useTranslation';
import PageHero from './common/PageHero';
import hero from '../assets/hero.jpg';

const ListingsContent = () => {
  const { t } = useTranslation();

  const cars = [
    {
      id: 1,
      title: "Creta Hyundai",
      category: "SUV",
      price: "210",
      originalPrice: "250",
      discount: "16% Off!",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/10544/1689588616959/front-left-side-47.jpg",
      specs: {
        seats: "5",
        bags: "2",
        transmission: "Auto",
        mileage: "Unlimited",
        ac: true
      },
      features: [
        "Free Cancellation",
        "Instantly Confirmed",
        "Third Party Liability"
      ],
      rating: {
        score: 4.7,
        text: "Excellent",
        reviews: 183
      }
    },
    {
      id: 2,
      title: "Innova Crysta",
      category: "Economy",
      price: "351",
      originalPrice: "390",
      discount: "10% Off!",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9612/1677999508267/front-left-side-47.jpg",
      specs: {
        seats: "7",
        bags: "1",
        transmission: "Manual",
        mileage: "Unlimited",
        ac: true
      },
      features: [
        "Free Cancellation",
        "Price Guarantee",
        "Third Party Liability"
      ],
      rating: {
        score: 3.8,
        text: "Good",
        reviews: 256
      }
    },
    {
      id: 3,
      title: "Toyota Etios",
      category: "Compact",
      price: "192",
      originalPrice: "240",
      discount: "20% Off!",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Etios/7299/1563856636506/front-left-side-47.jpg",
      specs: {
        seats: "5",
        bags: "2",
        transmission: "Manual",
        mileage: "Unlimited",
        ac: true
      },
      features: [
        "Free Cancellation",
        "Price Guarantee",
        "Third Party Liability"
      ],
      rating: {
        score: 4.5,
        text: "Excellent",
        reviews: 147
      }
    },
    {
      id: 4,
      title: "Mahindra XUV500",
      category: "Economy",
      price: "374",
      originalPrice: "440",
      discount: "15% Off!",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV500/7779/1583137398228/front-left-side-47.jpg",
      specs: {
        seats: "7",
        bags: "2",
        transmission: "Manual",
        mileage: "Unlimited",
        ac: true
      },
      features: [
        "Free Cancellation",
        "Price Guarantee",
        "Third Party Liability"
      ],
      rating: {
        score: 4.2,
        text: "Very Good",
        reviews: 167
      }
    }
  ];

  return (
    <div>
      <PageHero 
        title={t('listings.hero.title')}
        subtitle={t('listings.hero.subtitle')}
        image={hero}
      />

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            {cars.map((car) => (
              <div 
                key={car.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Car Image */}
                  <div className="w-full md:w-1/4">
                    <img 
                      src={car.image} 
                      alt={car.title}
                      className="w-full h-48 object-contain rounded-2xl"
                    />
                  </div>

                  {/* Car Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-gray-900">{car.title}</h3>
                          <span className="px-2 py-1 bg-gray-100 text-sm rounded-md">{car.category}</span>
                        </div>
                        
                        {/* Specs Icons */}
                        <div className="flex gap-4 mt-3 text-gray-600">
                          <div className="flex items-center gap-1">
                            <FaUsers className="text-gray-400" />
                            <span>{car.specs.seats}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaCarSide className="text-gray-400" />
                            <span>{car.specs.bags}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaCog className="text-gray-400" />
                            <span>{car.specs.transmission}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaTachometerAlt className="text-gray-400" />
                            <span>{car.specs.mileage}</span>
                          </div>
                          {car.specs.ac && (
                            <div className="flex items-center gap-1">
                              <FaSnowflake className="text-gray-400" />
                              <span>A/C</span>
                            </div>
                          )}
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          {car.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-gray-600">
                              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price Section */}
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">${car.price}</div>
                        <div className="text-sm text-gray-500">per day</div>
                        <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                          Display on Nettiauto
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsContent; 