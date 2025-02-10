import { 
  SiBmw, 
  SiMercedes, 
  SiAudi, 
  SiToyota, 
  SiHonda, 
  SiFord, 
  SiTesla, 
  SiPorsche 
} from 'react-icons/si';
import useTranslation from '../../hooks/useTranslation';

const Brands = () => {
  const { t } = useTranslation();

  const brands = [
    {
      name: "BMW",
      icon: SiBmw
    },
    {
      name: "Mercedes-Benz",
      icon: SiMercedes
    },
    {
      name: "Audi",
      icon: SiAudi
    },
    {
      name: "Toyota",
      icon: SiToyota
    },
    {
      name: "Honda",
      icon: SiHonda
    },
    {
      name: "Ford",
      icon: SiFord
    },
    {
      name: "Tesla",
      icon: SiTesla
    },
    {
      name: "Porsche",
      icon: SiPorsche
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">{t('home.brands.title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {brands.map((brand, index) => {
            const Icon = brand.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-8 bg-white rounded-lg border-2 border-transparent hover:border-red-500 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-full h-12 mb-3">
                  <Icon className="text-5xl text-gray-600 group-hover:text-red-500 transition-colors" />
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover:text-red-500 transition-colors">
                  {brand.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands; 