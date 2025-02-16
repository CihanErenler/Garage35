import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import listingApi from "../api/listingApi";
const ListingContext = createContext();

export const ListingProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [latestListings, setLatestListings] = useState([]);
  const [isLoadingAllListings, setIsLoadingAllListings] = useState(false);
  const [isLoadingLatestListings, setIsLoadingLatestListings] = useState(false);
  const [searchResultsAmount, setSearchResultsAmount] = useState(0);
  const [searchOptions, setSearchOptions] = useState({});
  const [error, setError] = useState(null);

  const reduceSearchOptions = (searchOptions) => {
    const reducedOptions = searchOptions.reduce((acc, curr) => {
      if (!acc.make) {
        acc.make = {};
      }

      if (!acc.fuelType) {
        acc.fuelType = [];
      }

      if (!acc.gearing) {
        acc.gearing = [];
      }

      if (!acc.make[curr.make]) {
        acc.make[curr.make] = [];
      }

      acc.make[curr.make].push(curr.model);

      if (!acc.fuelType.includes(curr.fuel_type)) {
        acc.fuelType.push(curr.fuel_type);
      }

      if (!acc.gearing.includes(curr.transmission_type)) {
        acc.gearing.push(curr.transmission_type);
      }

      return acc;
    }, {});
    console.log("reducedOptions", reducedOptions);
    setSearchOptions(reducedOptions);
  };

  const fetchAllListings = async () => {
    try {
      setIsLoadingAllListings(true);
      setError(null);
      const response = await listingApi.getListings();
      setListings(response.data.vehicles);
      return response.data;
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoadingAllListings(false);
    }
  };

  const fetchLatestListings = async () => {
    try {
      setIsLoadingLatestListings(true);
      setError(null);
      const response = await listingApi.getLatestListing();
      reduceSearchOptions(response.data.vehicles);
      const featuredListings = response.data.vehicles.splice(0, 6);
      setSearchResultsAmount(response.data.vehicle_amount);
      setLatestListings(featuredListings);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoadingLatestListings(false);
    }
  };

  const fetchCarById = async (registration, vehicleType) => {
    try {
      const response = await listingApi.getCarById(registration, vehicleType);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return (
    <ListingContext.Provider
      value={{
        listings,
        latestListings,
        isLoadingAllListings,
        setIsLoadingAllListings,
        isLoadingLatestListings,
        setIsLoadingLatestListings,
        searchResultsAmount,
        setSearchResultsAmount,
        error,
        setError,
        setListings,
        setLatestListings,
        fetchAllListings,
        fetchLatestListings,
        fetchCarById,
        searchOptions,
        setSearchOptions,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};

ListingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useListings = () => {
  const context = useContext(ListingContext);
  if (!context) {
    throw new Error("useListings must be used within a ListingProvider");
  }
  return context;
};

export default ListingContext;
