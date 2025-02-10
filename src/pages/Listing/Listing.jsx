import { useState } from 'react';
import ListingHero from './ListingHero';
import Filters from './Filters';
import VehicleGrid from './VehicleGrid';
import useTranslation from '../../hooks/useTranslation';

const Listing = () => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    brand: '',
    model: '',
    year: '',
    price: '',
    type: ''
  });

  return (
    <div>
      <ListingHero />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Filters filters={filters} setFilters={setFilters} />
          <VehicleGrid filters={filters} />
        </div>
      </section>
    </div>
  );
};

export default Listing; 