import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { useListings } from "./context/listingContext";

const App = () => {
  const { fetchAllListings, listings } = useListings();

  const initialLoad = async () => {
    if (listings.length === 0) {
      await fetchAllListings();
    }
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return <AppRouter />;
};

export default App;
