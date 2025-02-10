import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import useTranslation from '../../hooks/useTranslation';
import SectionTitle from '../common/SectionTitle';

const Testimonials = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      id: 1,
      name: "John Smith",
      role: t('home.testimonials.first.role'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300",
      text: t('home.testimonials.first.text'),
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: t('home.testimonials.second.role'),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300",
      text: t('home.testimonials.second.text'),
      rating: 5
    },
    {
      id: 3,
      name: "Michael Brown",
      role: t('home.testimonials.third.role'),
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300",
      text: t('home.testimonials.third.text'),
      rating: 5
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('home.testimonials.title')}
          subtitle={t('home.testimonials.subtitle')}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-8 rounded-lg border-2 border-transparent hover:border-red-500 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover ring-4 ring-red-500/10"
                />
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
              <div className="mb-6">
                <FaQuoteLeft className="text-red-500 text-2xl mb-4" />
                <p className="text-gray-600 leading-relaxed">{review.text}</p>
              </div>
              <div className="flex text-yellow-400 space-x-1">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 