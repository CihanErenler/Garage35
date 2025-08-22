import {
  Hero,
  Stats,
  WhyChooseUs,
  CarListings,
  Brands,
  Testimonials,
  CallToAction,
} from "../";
import ScrollToTop from "../common/ScrollToTop";
import BuyCarsCTA from "./BuyCarsCTA";
import FixingCTA from "./FixingCTA";
import SearchCars from "./SearchCars";

const HomeContent = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Hero />
      <SearchCars />
      <CarListings />
      <Brands />
      <WhyChooseUs />
      <BuyCarsCTA />
      <FixingCTA />
      <Stats />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomeContent;
