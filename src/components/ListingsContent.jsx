import useTranslation from '../hooks/useTranslation';
import PageHero from './common/PageHero';
import CarCard from './common/CarCard';
import SearchCars from './Home/SearchCars';
import SortingOptions from './Listings/SortingOptions';
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
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800",
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
      title: "Toyota Camry",
      category: "Compact",
      price: "192",
      originalPrice: "240",
      discount: "20% Off!",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800",
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
      title: "BMW 3 Series",
      category: "Economy",
      price: "374",
      originalPrice: "440",
      discount: "15% Off!",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800",
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
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title={t('listings.hero.title')}
        subtitle={t('listings.hero.subtitle')}
        image={hero}
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 py-8">
          {/* Left sidebar with search options */}
          <div className="w-full md:w-[300px] shrink-0 md:sticky md:top-4 md:h-[calc(100vh-2rem)]">
            <SearchCars bgColor="bg-white" layout="sidebar" />
          </div>

          {/* Main content */}
          <div className="flex-1">
            <SortingOptions />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {cars.map((car) => (
                <CarCard 
                  key={car.id} 
                  car={car}
                  showFeatures={true}
                  showFeaturedTag={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsContent; 