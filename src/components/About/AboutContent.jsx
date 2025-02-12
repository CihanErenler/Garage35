import useTranslation from '../../hooks/useTranslation';
import Map from '../common/Map';
import PageHero  from "../common/PageHero";
import hero from "../../assets/hero.jpg";

const AboutContent = () => {
  const { t } = useTranslation();

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
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            {t('about.contact.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('about.contact.description')}
          </p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors">
            {t('about.contact.cta')}
          </button>
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