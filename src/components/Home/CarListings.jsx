import { FaCog, FaTachometerAlt, FaCarSide } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTranslation from '../../hooks/useTranslation';
import SectionTitle from '../common/SectionTitle';

const CarListings = () => {
  const { t } = useTranslation();

  const cars = [
    {
      id: 1,
      name: "BMW 3 Series 2022",
      price: "45,000",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800",
      specs: {
        mileage: "15,000 km",
        transmission: "Automatic",
        fuelType: "Petrol",
        year: "2022",
        bodyType: "Sedan",
        color: "Alpine White"
      }
    },
    {
      id: 2,
      name: "Mercedes C-Class 2023",
      price: "52,000",
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800",
      specs: {
        mileage: "8,000 km",
        transmission: "Automatic",
        fuelType: "Hybrid",
        year: "2023",
        bodyType: "Sedan",
        color: "Black"
      }
    },
    {
      id: 3,
      name: "Audi A4 2022",
      price: "48,000",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800",
      specs: {
        mileage: "12,000 km",
        transmission: "Automatic",
        fuelType: "Petrol",
        year: "2022",
        bodyType: "Sedan",
        color: "Titanium Gray"
      }
    },
    {
      id: 4,
      name: "Tesla Model 3 2023",
      price: "55,000",
      image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=800",
      specs: {
        mileage: "5,000 km",
        transmission: "Automatic",
        fuelType: "Electric",
        year: "2023",
        bodyType: "Sedan",
        color: "Red"
      }
    },
    {
      id: 5,
      name: "Porsche Taycan 2023",
      price: "89,000",
      image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800",
      specs: {
        mileage: "3,000 km",
        transmission: "Automatic",
        fuelType: "Electric",
        year: "2023",
        bodyType: "Sedan",
        color: "Inno Silver"
      }
    },
    {
      id: 6,
      name: "Range Rover Sport 2023",
      price: "75,000",
      image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=800",
      specs: {
        mileage: "10,000 km",
        transmission: "Automatic",
        fuelType: "Hybrid",
        year: "2023",
        bodyType: "SUV",
        color: "Santorini Black"
      }
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('home.featured.title')}
          subtitle={t('home.featured.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cars.map((car) => (
            <div 
              key={car.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div className="relative">
                <div className="absolute top-0 left-0 bg-red-500 text-white px-4 py-2 text-sm font-bold skew-x-[-15deg] transform -translate-x-2">
                  {t('home.featured.featured')}
                </div>
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{car.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>{car.specs.year}</span>
                      <span>•</span>
                      <span>{car.specs.mileage}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-red-500">${car.price}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaTachometerAlt className="text-gray-400" />
                    <span>{car.specs.mileage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCog className="text-gray-400" />
                    <span>{car.specs.transmission}</span>
                  </div>
           
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCarSide className="text-gray-400" />
                    <span>{car.specs.bodyType}</span>
                  </div>
                </div>

                <button className="w-full bg-gray-900 text-white py-2.5 rounded-md font-semibold hover:bg-gray-800 transition-colors">
                  {t('home.featured.viewDetails')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            to="/listing" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-all duration-300 hover:-translate-y-1"
          >
            {t('featuredCars.viewAll')}
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
    </section>
  );
};

export default CarListings; 
