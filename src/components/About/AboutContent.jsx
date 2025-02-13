import useTranslation from '../../hooks/useTranslation';
import Map from '../common/Map';
import PageHero  from "../common/PageHero";
import hero from "../../assets/hero.jpg";
import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const AboutContent = () => {
  const { t } = useTranslation();

  const locations = [
    {
      id: 1,
      name: "Tampere Central",
      address: "Hatanpään valtatie 34",
      postal: "33100 Tampere",
      phone: "+358 123 456 789",
      hours: {
        weekdays: "9:00 - 18:00",
        saturday: "10:00 - 16:00",
        sunday: "Closed"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <PageHero 
          title={t('about.hero.title')}
          subtitle={t('about.hero.subtitle')}
          image={hero}
        />
    
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t('about.mission.title')}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12 text-center">
            {t('about.mission.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {["excellence", "integrity", "customer"].map((item) => (
            <div key={item} className="text-center">
              <div className="bg-gray-50 rounded-lg p-8 h-full">
                <h3 className="text-xl font-semibold mb-4">
                  {t(`about.values.items.${item}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`about.values.items.${item}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t('about.contact.title')}
          </h2>
          <p className="text-gray-600 mb-12 text-center">
            {t('about.contact.description')}
          </p>

          {locations.map(location => (
            <div key={location.id} className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{location.name}</h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-red-500 mt-1" />
                  <div>
                    <p className="text-gray-700">{location.address}</p>
                    <p className="text-gray-700">{location.postal}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <FaPhone className="text-red-500" />
                  <a 
                    href={`tel:${location.phone}`}
                    className="text-gray-700 hover:text-red-500 transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <FaClock className="text-red-500 mt-1" />
                  <div className="text-gray-700">
                    <p>Mon-Fri: {location.hours.weekdays}</p>
                    <p>Sat: {location.hours.saturday}</p>
                    <p>Sun: {location.hours.sunday}</p>
                  </div>
                </div>
              </div>

              <button 
                className="w-full mt-6 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
                onClick={() => window.location.href = `tel:${location.phone}`}
              >
                {t('about.contact.callNow')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('about.findUs.title')}</h2>
          <p className="text-gray-600">{t('about.findUs.description')}</p>
        </div>
        <Map className="h-[450px] shadow-lg" />
      </div>
    </section>
  </div>
</div>
  );
};

export default AboutContent; 