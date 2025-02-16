import { Link } from "react-router-dom";
import useTranslation from "../../hooks/useTranslation";

const FinancingCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left side - Content */}
          <div className="order-2 space-y-6 md:order-1">
            <h2 className="text-4xl font-bold text-gray-900">
              {t("home.financing.title")}
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              {t("home.financing.description")}
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-lg bg-red-500 px-8 py-3 text-white transition-colors hover:bg-red-600"
            >
              {t("home.financing.cta")}
            </Link>
          </div>

          {/* Right side - Image */}
          <div className="relative order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1638272181967-7d3772a91265?auto=format&fit=crop&q=80"
              alt="Car Financing"
              className="h-[500px] w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingCTA;
