import { Link } from "react-router-dom";
import useTranslation from "../../hooks/useTranslation";
import SectionTitle from "../common/SectionTitle";
import FeaturedCarCard from "../common/FeaturedCarCard";
import { useListings } from "../../context/listingContext";

const CarListings = () => {
  const { t } = useTranslation();
  const { latestListings, latestListingsLoading } = useListings();

  console.log(latestListings);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t("home.featured.title")}
          subtitle={t("home.featured.subtitle")}
        />

        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestListingsLoading ? (
            <div className="flex justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-red-500"></div>
            </div>
          ) : (
            latestListings.map((car) => (
              <FeaturedCarCard key={car.nettix_id} car={car} />
            ))
          )}
        </div>

        <div className="flex justify-center">
          <Link
            to="/listing"
            className="inline-flex items-center justify-center rounded-lg bg-red-500 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600"
          >
            {t("home.featured.viewAll")}
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarListings;
