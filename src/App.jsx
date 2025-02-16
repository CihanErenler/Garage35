import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { useListings } from "./context/listingContext";

const App = () => {
  const { fetchLatestListings, listings } = useListings();

  const initialLoad = async () => {
    if (listings.length === 0) {
      await fetchLatestListings();
    }
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return <AppRouter />;
};

export default App;
