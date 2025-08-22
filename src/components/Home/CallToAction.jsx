import { Link } from "react-router-dom";
import useTranslation from "../../hooks/useTranslation";
import { useNavigate } from "react-router-dom";
import { useListings } from "../../context/listingContext";
import Button from "../common/Button";

const CallToAction = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { resetFilters } = useListings();

  const handleClick = () => {
    resetFilters();
    navigate("/listing");
  };

  return (
    <section className="relative overflow-hidden bg-gray-950 py-24">
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            {t("home.cta.title")}
          </h2>
          <p className="mb-10 text-xl text-gray-300">
            {t("home.cta.description")}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            {/* <Link
              to="/listing"
              className="inline-flex w-full min-w-[12rem] items-center justify-center rounded-lg bg-red-500 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-red-600 sm:w-auto"
            >
              {t("home.cta.primary")}
            </Link>
            <Link
              to="/about"
              className="inline-flex w-full min-w-[12rem] items-center justify-center rounded-lg bg-gray-800 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-gray-700 sm:w-auto"
            >
              {t("home.cta.secondary")}
            </Link> */}
            <Button className="flex-1" onClick={handleClick} size="large">
              {t("home.cta.primary")}
            </Button>
            <Button
              className="flex-1"
              to="/about#visit-our-showroom"
              variant="ghost"
              size="large"
            >
              {t("home.cta.secondary")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
