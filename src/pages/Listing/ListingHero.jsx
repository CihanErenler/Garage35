import useTranslation from '../../hooks/useTranslation';

const ListingHero = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          {t('listing.hero.title')}
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          {t('listing.hero.subtitle')}
        </p>
      </div>
    </div>
  );
};

export default ListingHero; 