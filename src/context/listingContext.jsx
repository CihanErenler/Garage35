import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import PropTypes from "prop-types";
import listingApi from "../api/listingApi";

const ListingContext = createContext();

export const ListingProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [copiedListings, setCopiedListings] = useState([]);
  const [latestListings, setLatestListings] = useState([]);
  const [isLoading, setIsLoading] = useState({ all: false, latest: false });
  const [searchResultsAmount, setSearchResultsAmount] = useState(0);
  const [error, setError] = useState(null);

  // Search options
  const [filters, setFilters] = useState({
    make: [],
    model: [],
    fuelType: [],
    gearing: [],
    priceRange: [0, 0],
    yearRange: [0, 0],
    maxPrice: 0,
    minPrice: 0,
    maxYear: 0,
    minYear: 0,
    selectedMakes: [],
    selectedQuids: [],
    selectedFuelType: [],
    selectedGearing: [],
    selectedPriceRange: [0, 0],
    selectedYearRange: [0, 0],
  });

  const setSelectedOptions = (options) => {
    setFilters((prev) => ({
      ...prev,
      make: options.make,
      model: Array.from(options.model),
      fuelType: Array.from(options.fuelType),
      gearing: Array.from(options.gearing),
      maxPrice: Math.max(...options.prices),
      minPrice: Math.min(...options.prices),
      maxYear: Math.max(...options.years),
      minYear: Math.min(...options.years),
      priceRange: [Math.min(...options.prices), Math.max(...options.prices)],
      yearRange: [Math.min(...options.years), Math.max(...options.years)],
    }));
  };

  const reduceSearchOptions = (vehicles) => {
    return vehicles.reduce(
      (acc, { make, model, fuel_type, transmission_type, price, year }) => {
        acc.make[make] = acc.make[make] || [];
        acc.make[make].push(model);
        acc.model.add(model);
        acc.fuelType.add(fuel_type);
        acc.gearing.add(transmission_type);
        acc.prices.push(price);
        acc.years.push(year);
        return acc;
      },
      {
        make: {},
        model: new Set(),
        fuelType: new Set(),
        gearing: new Set(),
        prices: [],
        years: [],
      },
    );
  };

  const fetchAllListings = useCallback(async () => {
    try {
      setIsLoading((prev) => ({ ...prev, all: true }));
      setError(null);
      const response = await listingApi.getAllListings();
      const vehicles = response.data.vehicles;
      setListings([...vehicles]);
      setCopiedListings([...vehicles]);
      setSearchResultsAmount(response.data.vehicle_amount);
      setLatestListings(vehicles.slice(0, 6));
      setSelectedOptions(reduceSearchOptions(vehicles));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading((prev) => ({ ...prev, all: false }));
    }
  }, []);

  const fetchCarById = async (registration, vehicleType) => {
    try {
      const response = await listingApi.getCarById(registration, vehicleType);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const sortListings = (sortBy) => {
    const sortedListings = [...listings];
    if (sortBy === "year-asc") {
      sortedListings.sort((a, b) => a.year - b.year);
    } else if (sortBy === "year-desc") {
      sortedListings.sort((a, b) => b.year - a.year);
    } else if (sortBy === "price-asc") {
      sortedListings.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      sortedListings.sort((a, b) => b.price - a.price);
    } else if (sortBy === "mileage-asc") {
      sortedListings.sort((a, b) => a.mileage - b.mileage);
    } else if (sortBy === "mileage-desc") {
      sortedListings.sort((a, b) => b.mileage - a.mileage);
    }
    setListings(sortedListings);
  };

  const filterListings = useCallback(() => {
    let filtered = [...copiedListings];
    const {
      selectedMakes,
      selectedQuids,
      selectedFuelType,
      selectedGearing,
      selectedPriceRange,
      selectedYearRange,
    } = filters;

    if (selectedMakes.length)
      filtered = filtered.filter(({ make }) => selectedMakes.includes(make));
    if (selectedQuids.length)
      filtered = filtered.filter(({ model }) => selectedQuids.includes(model));
    if (selectedFuelType.length)
      filtered = filtered.filter(({ fuel_type }) =>
        selectedFuelType.includes(fuel_type),
      );
    if (selectedGearing.length)
      filtered = filtered.filter(({ transmission_type }) =>
        selectedGearing.includes(transmission_type),
      );
    if (selectedPriceRange[0] > 0 || selectedPriceRange[1] > 0)
      filtered = filtered.filter(
        ({ price }) =>
          price >= selectedPriceRange[0] && price <= selectedPriceRange[1],
      );
    if (selectedYearRange[0] > 0 || selectedYearRange[1] > 0)
      filtered = filtered.filter(
        ({ year }) =>
          year >= selectedYearRange[0] && year <= selectedYearRange[1],
      );

    setListings(filtered);
    setSearchResultsAmount(filtered.length);
  }, [copiedListings, filters]);

  const resetFilters = () => {
    setFilters({
      ...filters,
      selectedMakes: [],
      selectedQuids: [],
      selectedFuelType: [],
      selectedGearing: [],
      selectedPriceRange: [0, 0],
      selectedYearRange: [0, 0],
    });
    setListings(copiedListings);
    setSearchResultsAmount(copiedListings.length);
  };

  const updateFilters = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    filterListings();
  };

  useEffect(() => {
    filterListings();
  }, [filters, filterListings]);

  return (
    <ListingContext.Provider
      value={{
        listings,
        latestListings,
        isLoading,
        searchResultsAmount,
        error,
        fetchAllListings,
        fetchCarById,
        filters,
        updateFilters,
        copiedListings,
        sortListings,
        resetFilters,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};

ListingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useListings = () => {
  const context = useContext(ListingContext);
  if (!context) {
    throw new Error("useListings must be used within a ListingProvider");
  }
  return context;
};

export default ListingContext;
