import { createContext, useContext, useState, useEffect } from "react";
import listingService from "../services/listingService";
import PropTypes from "prop-types";

const ListingContext = createContext();

export const ListingProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchListings = async (params) => {
    try {
      setLoading(true);
      setError(null);
      const data = await listingService.getListings(params);
      setListings(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <ListingContext.Provider
      value={{ listings, loading, error, fetchListings }}
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
