import useTranslation from "../hooks/useTranslation";
import PageHero from "./common/PageHero";
import SearchCars from "./Home/SearchCars";
import SortingOptions from "./Listings/SortingOptions";
import hero from "../assets/hero.jpg";
import { useEffect, useState } from "react";
import { useListings } from "../context/listingContext";
import FeaturedCarCard from "./common/FeaturedCarCard";
import Pagination from "./common/Pagination";

const ListingsContent = () => {
  const { t } = useTranslation();
  const { fetchAllListings, isLoadingAllListings, listings } = useListings();
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(listings.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listings.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetchAllListings();
        if (response?.vehicles) {
          setError(null);
        } else {
          setError("No vehicles found");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    if (listings.length === 0) {
      fetchListings();
    }
  }, []);

  if (isLoadingAllListings) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-red-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl text-gray-600">{t("listings.noVehicles")}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title={t("listings.hero.title")}
        subtitle={t("listings.hero.subtitle")}
        image={hero}
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 py-8 md:flex-row">
          {/* Left sidebar with search options */}
          <div className="w-full shrink-0 md:sticky md:top-4 md:h-[calc(100vh-2rem)] md:w-[300px]">
            <SearchCars bgColor="bg-white" layout="sidebar" />
          </div>

          {/* Main content */}
          <div className="flex-1">
            <SortingOptions />

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {currentItems.map((car) => (
                <FeaturedCarCard
                  key={car.nettix_id}
                  car={car}
                  featured={false}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsContent;
