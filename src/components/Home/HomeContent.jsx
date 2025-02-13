import { Hero, Stats, WhyChooseUs, CarListings, Brands, Testimonials, CallToAction } from '../';
import BuyCarsCTA from './BuyCarsCTA';
import FinancingCTA from './FinancingCTA';
import SearchCars from './SearchCars';

const HomeContent = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <SearchCars />
      <CarListings />
      <Brands />
      <WhyChooseUs />
      <BuyCarsCTA />
      <FinancingCTA />
      <Stats />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomeContent; 