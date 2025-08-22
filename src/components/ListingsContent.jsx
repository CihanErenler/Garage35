import useTranslation from "../hooks/useTranslation";
import PageHero from "./common/PageHero";
import SearchCars from "./Home/SearchCars";
import SortingOptions from "./Listings/SortingOptions";
import hero from "../assets/hero.jpg";
import { useState } from "react";
import { useListings } from "../context/listingContext";
import FeaturedCarCard from "./common/FeaturedCarCard";
import Pagination from "./common/Pagination";

const ListingsContent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { t } = useTranslation();
  const { isLoading, listings } = useListings();
  const itemsPerPage = 6;

  const totalPages = Math.ceil(listings.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listings.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading.all) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-gray-900"></div>
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
              {currentItems.length > 0 ? (
                currentItems.map((car) => (
                  <FeaturedCarCard
                    key={car.nettix_id}
                    car={car}
                    featured={false}
                  />
                ))
              ) : (
                <p className="col-span-full mt-10 flex flex-col items-center gap-4 text-center text-xl text-gray-500">
                  {t("listings.noVehicles")}
                </p>
              )}
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
