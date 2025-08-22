import { useState, useMemo } from "react";
import useTranslation from "../../hooks/useTranslation";
import { FaCar, FaCog, FaCalendarAlt, FaGasPump } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import { BiDollar } from "react-icons/bi";
import RangeSlider from "../common/RangeSlider";
import DropdownCard from "../common/DropdownCard";
import CheckboxGroup from "../common/CheckboxGroup";
import PropTypes from "prop-types";
import { useListings } from "../../context/listingContext";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
const SearchCars = ({ bgColor = "bg-gray-950", layout = "default" }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isLightBg = bgColor.includes("white");

  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isQuidOpen, setIsQuidOpen] = useState(false);
  const [isMakeOpen, setIsMakeOpen] = useState(false);
  const [isGearingOpen, setIsGearingOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isEngineTypeOpen, setIsEngineTypeOpen] = useState(false);

  const {
    filters,
    isLoading,
    searchResultsAmount,
    updateFilters,
    resetFilters,
  } = useListings();

  const fuelTypeToShow = useMemo(() => {
    const fuelTypeMapper = {
      HB: "Hybrid",
      D: "Diesel",
      B: "Petrol",
      E: "Electric",
    };

    return filters.fuelType.map((type) => {
      return fuelTypeMapper[type];
    });
  }, [filters.fuelType]);

  const convertFuelTypeToDropdown = (fuelType, isDropdown = false) => {
    const fuelTypeMapper = isDropdown
      ? {
          Hybrid: "HB",
          Diesel: "D",
          Petrol: "B",
          Electric: "E",
        }
      : {
          HB: "Hybrid",
          D: "Diesel",
          B: "Petrol",
          E: "Electric",
        };

    return fuelType.map((type) => {
      return fuelTypeMapper[type];
    });
  };

  const getDropdownLabel = (type, selectedItems) => {
    if (selectedItems.length === 0) {
      return t(`home.search.${type}`);
    }
    if (selectedItems.length === 1) {
      return selectedItems[0];
    }
    return `${selectedItems.length} ${t("home.search.selected")}`;
  };

  const modelsToShow = useMemo(() => {
    const getModelsToShow = () => {
      const models = new Set();

      for (const makeItem of filters.selectedMakes) {
        filters.make[makeItem].forEach((model) => models.add(model));
      }
      return Array.from(models);
    };
    return filters.selectedMakes.length > 0 ? getModelsToShow() : filters.model;
  }, [filters.selectedMakes, filters.model, filters.make]);

  const formatPrice = (value) => {
    return `€${value.toLocaleString()}`;
  };

  const formatYear = (value) => {
    return value.toString();
  };

  // Don't render until we have the search options loaded
  if (isLoading.all || !filters.make) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <section
      className={`${layout === "default" ? "py-6" : "border border-gray-200 p-4"} ${bgColor} `}
    >
      <div
        className={`${layout === "default" ? "container mx-auto px-4" : ""}`}
      >
        <h2
          className={`${layout === "sidebar" ? "text-2xl" : "text-3xl"} mb-8 font-bold ${isLightBg ? "text-gray-900" : "text-white"}`}
        >
          {t("home.search.title")}
        </h2>

        <div
          className={`grid grid-cols-1 ${layout === "default" ? "md:grid-cols-3" : ""} mb-2 gap-2`}
        >
          {/* Make */}
          <DropdownCard
            isOpen={isMakeOpen}
            onToggle={() => setIsMakeOpen(!isMakeOpen)}
            onClose={() => setIsMakeOpen(false)}
            icon={FaCar}
            label={getDropdownLabel("make", filters.selectedMakes)}
            isLightBg={isLightBg}
            layout={layout}
          >
            <CheckboxGroup
              options={Object.keys(filters.make)}
              selectedValues={filters.selectedMakes}
              onChange={(value) => updateFilters("selectedMakes", value)}
            />
          </DropdownCard>

          {/* Model */}
          <DropdownCard
            isOpen={isQuidOpen}
            onToggle={() => setIsQuidOpen(!isQuidOpen)}
            onClose={() => setIsQuidOpen(false)}
            icon={FaCog}
            label={getDropdownLabel("quid", filters.selectedQuids)}
            isLightBg={isLightBg}
            layout={layout}
          >
            <CheckboxGroup
              options={modelsToShow}
              selectedValues={filters.selectedQuids}
              onChange={(value) => updateFilters("selectedQuids", value)}
            />
          </DropdownCard>

          {/* Year */}
          <DropdownCard
            isOpen={isYearOpen}
            onToggle={() => setIsYearOpen(!isYearOpen)}
            onClose={() => setIsYearOpen(false)}
            icon={FaCalendarAlt}
            label={
              filters.selectedYearRange[0] === 0 &&
              filters.selectedYearRange[1] === 0
                ? t("home.search.modelYear")
                : `${formatYear(filters.selectedYearRange[0])} — ${formatYear(filters.selectedYearRange[1])}`
            }
            isLightBg={isLightBg}
            layout={layout}
            hasSlider={true}
          >
            <RangeSlider
              value={filters.yearRange}
              onChange={(value) => {
                updateFilters("yearRange", value);
                updateFilters("selectedYearRange", value);
              }}
              min={filters.minYear}
              max={filters.maxYear}
              step={1}
              formatValue={formatYear}
            />
          </DropdownCard>
        </div>

        <div
          className={`grid grid-cols-1 ${layout === "default" ? "md:grid-cols-3" : ""} mb-6 gap-2`}
        >
          {/* Price */}
          <DropdownCard
            isOpen={isPriceOpen}
            onToggle={() => setIsPriceOpen(!isPriceOpen)}
            onClose={() => setIsPriceOpen(false)}
            icon={BiDollar}
            label={
              filters.selectedPriceRange[0] === 0 ||
              (filters.selectedPriceRange[0] === filters.minPrice &&
                filters.selectedPriceRange[1] === 0) ||
              filters.selectedPriceRange[1] === filters.maxPrice
                ? t("home.search.price")
                : `${formatPrice(filters.selectedPriceRange[0])} — ${formatPrice(filters.selectedPriceRange[1])}`
            }
            isLightBg={isLightBg}
            layout={layout}
            hasSlider={true}
          >
            <RangeSlider
              value={filters.priceRange}
              min={filters.minPrice}
              max={filters.maxPrice}
              onChange={(value) => {
                updateFilters("priceRange", value);
                updateFilters("selectedPriceRange", value);
              }}
              step={100}
              formatValue={formatPrice}
            />
          </DropdownCard>

          {/* Fuel Type */}
          <DropdownCard
            isOpen={isEngineTypeOpen}
            onToggle={() => setIsEngineTypeOpen(!isEngineTypeOpen)}
            onClose={() => setIsEngineTypeOpen(false)}
            icon={FaGasPump}
            label={getDropdownLabel(
              "fuelType",
              convertFuelTypeToDropdown(filters.selectedFuelType),
            )}
            isLightBg={isLightBg}
          >
            <CheckboxGroup
              options={fuelTypeToShow}
              selectedValues={convertFuelTypeToDropdown(
                filters.selectedFuelType,
              )}
              onChange={(value) =>
                updateFilters(
                  "selectedFuelType",
                  convertFuelTypeToDropdown(value, true),
                )
              }
            />
          </DropdownCard>

          {/* Gearing */}
          <DropdownCard
            isOpen={isGearingOpen}
            onToggle={() => setIsGearingOpen(!isGearingOpen)}
            onClose={() => setIsGearingOpen(false)}
            icon={TbManualGearbox}
            label={getDropdownLabel("gearing", filters.selectedGearing)}
            isLightBg={isLightBg}
            layout={layout}
          >
            <CheckboxGroup
              options={filters.gearing}
              selectedValues={filters.selectedGearing}
              onChange={(value) => updateFilters("selectedGearing", value)}
            />
          </DropdownCard>
        </div>

        <div
          className={`${layout === "sidebar" ? "flex flex-col gap-3" : "flex flex-col items-center justify-between gap-4 md:flex-row"}`}
        >
          <>
            <button
              className={`${isLightBg ? "text-gray-700" : "text-white"} transition-colors hover:text-gray-500`}
              onClick={resetFilters}
            >
              {t("home.search.clearSelections")}
            </button>

            {layout === "default" && (
              <div className="flex w-full gap-4 md:w-auto">
                <Button
                  variant="primary"
                  size="large"
                  className="w-full md:w-[500px]"
                  onClick={() => {
                    navigate("/listing");
                  }}
                >
                  {searchResultsAmount} {t("home.search.vehicles")}
                </Button>
              </div>
            )}
          </>
        </div>
      </div>
    </section>
  );
};

SearchCars.propTypes = {
  bgColor: PropTypes.string,
  layout: PropTypes.string,
};

export default SearchCars;
