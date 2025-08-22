import { Link } from "react-router-dom";
import useTranslation from "../../hooks/useTranslation";
import buyingImage from "../../assets/buying.jpg";

const BuyCarsCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left side - Image */}
          <div className="relative">
            <img
              src={buyingImage}
              alt="Car Dealership"
              className="h-[500px] w-full rounded-lg object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              {t("home.buyCars.title")}
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              {t("home.buyCars.description")}
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-lg bg-red-500 px-8 py-3 text-white transition-colors hover:bg-red-600"
            >
              {t("home.buyCars.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyCarsCTA;
