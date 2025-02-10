import { FaTrophy, FaHandshake, FaCar } from 'react-icons/fa';
import useTranslation from '../../hooks/useTranslation';
import SectionTitle from '../common/SectionTitle';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('home.whyChooseUs.features.expert.title'),
      description: t('home.whyChooseUs.features.expert.description'),
      icon: FaTrophy
    },
    {
      title: t('home.whyChooseUs.features.trusted.title'),
      description: t('home.whyChooseUs.features.trusted.description'),
      icon: FaHandshake
    },
    {
      title: t('home.whyChooseUs.features.selection.title'),
      description: t('home.whyChooseUs.features.selection.description'),
      icon: FaCar
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('home.whyChooseUs.title')}
          subtitle={t('home.whyChooseUs.subtitle')}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-red-500/5 rounded-full transform rotate-45" />
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                    <Icon className="text-3xl text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 