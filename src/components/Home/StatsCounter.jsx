import { useState, useEffect, useRef } from 'react';
import useTranslation from '../../hooks/useTranslation';
import PropTypes from 'prop-types';

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const start = 0;
    const increment = end / (duration / 16);
    let currentCount = start;

    countRef.current = setInterval(() => {
      currentCount += increment;
      if (currentCount >= end) {
        clearInterval(countRef.current);
        setCount(end);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 16);

    return () => clearInterval(countRef.current);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

CountUp.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number
};

const StatsCounter = () => {
  const { t } = useTranslation();
  
  const stats = [
    {
      number: 15000,
      label: t('stats.carsAvailable.label')
    },
    {
      number: 5000,
      label: t('stats.happyCustomers.label')
    },
    {
      number: 15,
      label: t('stats.yearsExperience.label')
    },
    {
      number: 100,
      label: t('stats.satisfactionRate.label'),
      suffix: '%'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">
                <CountUp end={stat.number} />
                {stat.suffix || '+'}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter; 