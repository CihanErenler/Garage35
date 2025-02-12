import { Hero, Stats, WhyChooseUs, CarListings, Brands, Testimonials, CallToAction } from '../';

const HomeContent = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <CarListings />
      <Brands />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomeContent; 