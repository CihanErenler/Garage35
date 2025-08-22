import { FaTrophy, FaHandshake, FaCar } from "react-icons/fa";
import useTranslation from "../../hooks/useTranslation";
import SectionTitle from "../common/SectionTitle";
import InfoBoxItem from "../common/InfoBoxItem";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t("home.whyChooseUs.features.expert.title"),
      description: t("home.whyChooseUs.features.expert.description"),
      icon: <FaTrophy className="text-4xl text-red-500" />,
    },
    {
      title: t("home.whyChooseUs.features.trusted.title"),
      description: t("home.whyChooseUs.features.trusted.description"),
      icon: <FaHandshake className="text-4xl text-red-500" />,
    },
    {
      title: t("home.whyChooseUs.features.selection.title"),
      description: t("home.whyChooseUs.features.selection.description"),
      icon: <FaCar className="text-4xl text-red-500" />,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t("home.whyChooseUs.title")}
          subtitle={t("home.whyChooseUs.subtitle")}
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <InfoBoxItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
