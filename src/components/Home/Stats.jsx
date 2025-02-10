import { FaCar, FaUsers, FaAward, FaHandshake } from 'react-icons/fa';
import useTranslation from '../../hooks/useTranslation';

const Stats = () => {
  const { t } = useTranslation();

  const stats = [
    {
      number: t('home.stats.carsAvailable.number'),
      label: t('home.stats.carsAvailable.label'),
      icon: FaCar
    },
    {
      number: t('home.stats.happyCustomers.number'),
      label: t('home.stats.happyCustomers.label'),
      icon: FaUsers
    },
    {
      number: t('home.stats.yearsExperience.number'),
      label: t('home.stats.yearsExperience.label'),
      icon: FaAward
    },
    {
      number: t('home.stats.satisfactionRate.number'),
      label: t('home.stats.satisfactionRate.label'),
      icon: FaHandshake
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center transform hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-block p-4 rounded-full bg-red-500/10 mb-4 hover:bg-red-500/20 transition-colors">
                  <Icon className="text-3xl text-red-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats; 