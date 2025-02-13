import { Link } from 'react-router-dom';
import useTranslation from '../../hooks/useTranslation';
import SectionTitle from '../common/SectionTitle';
import CarCard from '../common/CarCard';

const CarListings = () => {
  const { t } = useTranslation();

  const cars = [
    {
      id: 1,
      title: "BMW 3 Series 2022",
      category: "Luxury",
      price: "45,000",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800",
      specs: {
        seats: "5",
        bags: "2",
        transmission: "Automatic",
        mileage: "15,000 km",
        ac: true
      },
      features: [
        t('listings.car.features.cancellation'),
        t('listings.car.features.guarantee'),
        t('listings.car.features.liability')
      ]
    },
    {
      id: 2,
      title: "Mercedes C-Class 2023",
      category: "Luxury",
      price: "52,000",
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800",
      specs: {
        seats: "5",
        bags: "2",
        transmission: "Automatic",
        mileage: "8,000 km",
        ac: true
      },
      features: [
        t('listings.car.features.cancellation'),
        t('listings.car.features.guarantee'),
        t('listings.car.features.liability')
      ]
    },
    {
      id: 3,
      title: "Audi A4 2022",
      category: "Luxury",
      price: "48,000",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800",
      specs: {
        seats: "5",
        bags: "2",
        transmission: "Automatic",
        mileage: "12,000 km",
        ac: true
      },
      features: [
        t('listings.car.features.cancellation'),
        t('listings.car.features.guarantee'),
        t('listings.car.features.liability')
      ]
    },
    {
      id: 4,
      title: "Tesla Model 3 2023",
      category: "Electric",
      price: "55,000",
      image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=800",
      specs: {
        seats: "5",
        bags: "2",
        transmission: "Automatic",
        mileage: "5,000 km",
        ac: true
      },
      features: [
        t('listings.car.features.cancellation'),
        t('listings.car.features.guarantee'),
        t('listings.car.features.liability')
      ]
    },
    {
      id: 5,
      title: "Porsche Taycan 2023",
      category: "Electric",
      price: "89,000",
      image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800",
      specs: {
        seats: "5",
        bags: "2",
        transmission: "Automatic",
        mileage: "3,000 km",
        ac: true
      },
      features: [
        t('listings.car.features.cancellation'),
        t('listings.car.features.guarantee'),
        t('listings.car.features.liability')
      ]
    },
    {
      id: 6,
      title: "Range Rover Sport 2023",
      category: "SUV",
      price: "75,000",
      image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=800",
      specs: {
        seats: "5",
        bags: "2",
        transmission: "Automatic",
        mileage: "10,000 km",
        ac: true
      },
      features: [
        t('listings.car.features.cancellation'),
        t('listings.car.features.guarantee'),
        t('listings.car.features.liability')
      ]
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('home.featured.title')}
          subtitle={t('home.featured.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cars.map((car) => (
            <CarCard 
              key={car.id} 
              car={car}
              showFeatures={false}
              showFeaturedTag={true}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            to="/listing" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-all duration-300 hover:-translate-y-1"
          >
            {t('home.featured.viewAll')}
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
