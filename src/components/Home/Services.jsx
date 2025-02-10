import { FaCar, FaTools, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaCar,
      title: "Trade-In Services",
      description: "Get the best value for your current vehicle with our fair trade-in program"
    },
    {
      icon: FaTools,
      title: "Maintenance",
      description: "Professional maintenance and repair services by certified technicians"
    },
    {
      icon: FaMoneyBillWave,
      title: "Financing Options",
      description: "Flexible financing solutions tailored to your needs and budget"
    },
    {
      icon: FaShieldAlt,
      title: "Extended Warranty",
      description: "Comprehensive warranty coverage for your peace of mind"
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center p-8 bg-gray-800 rounded-lg border-2 border-gray-700 hover:border-red-500 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-full h-16 mb-6">
                  <Icon className="text-5xl text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services; 