import useTranslation from "../../hooks/useTranslation";
import Map from "../common/Map";
import PageHero from "../common/PageHero";
import hero from "../../assets/hero.jpg";
import Story from "./Story";
import Values from "./Values";
import VisitOurShowroom from "./VisitOurShowroom";

const AboutContent = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <PageHero
          title={t("about.hero.title")}
          subtitle={t("about.hero.subtitle")}
          image={hero}
        />
        <Story />
        <Values />
        <VisitOurShowroom />

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                {t("about.findUs.title")}
              </h2>
              <p className="text-gray-600">{t("about.findUs.description")}</p>
            </div>
            <Map className="h-[450px] shadow-lg" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutContent;
