import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import useTranslation from "../../hooks/useTranslation";
import { useListings } from "../../context/listingContext";

const SortingOptions = () => {
  const { t } = useTranslation();
  const { sortListings } = useListings();

  const [selectedSort, setSelectedSort] = useState("price-desc");
  const { searchResultsAmount } = useListings();

  const sortOptions = [
    { value: "newest", label: t("listings.sort.newest") },
    { value: "price-asc", label: t("listings.sort.priceAsc") },
    { value: "price-desc", label: t("listings.sort.priceDesc") },
    { value: "mileage-asc", label: t("listings.sort.mileageAsc") },
    { value: "mileage-desc", label: t("listings.sort.mileageDesc") },
    { value: "year-asc", label: t("listings.sort.yearAsc") },
    { value: "year-desc", label: t("listings.sort.yearDesc") },
  ];

  const handleSortChange = (value) => {
    setSelectedSort(value);
    sortListings(value);
  };

  return (
    <div className="border-b border-gray-200 bg-gray-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-lg text-gray-600">
            Filter results:{" "}
            <span className="font-bold">{searchResultsAmount}</span> vehicles
            found
          </div>

          <div className="relative inline-flex items-center gap-2">
            <span className="text-gray-600">Sort by:</span>
            <select
              value={selectedSort}
              onChange={(e) => handleSortChange(e.target.value)}
              className="appearance-none rounded-lg border border-gray-300 bg-white px-4 py-1 pr-8 text-gray-700 focus:border-red-500 focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <FaChevronDown className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortingOptions;
