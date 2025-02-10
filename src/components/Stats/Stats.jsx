import { FaAward, FaCar, FaUsers, FaHandshake } from 'react-icons/fa';
import useTranslation from '../../hooks/useTranslation';
const Stats = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: FaAward, value: '10+', label: t('stats.yearsExperience.label') },
    { icon: FaCar, value: '500+', label: t('stats.carsSold.label') },
    { icon: FaUsers, value: '1000+', label: t('stats.happyClients.label') },
    { icon: FaHandshake, value: '50+', label: t('stats.carBrands.label') },
  ];

  return (
    <div className="bg-gray-50 py-16 mb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="text-red-500 text-4xl mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats; 