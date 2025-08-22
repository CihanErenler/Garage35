import useTranslation from "../../hooks/useTranslation";
import { FaHandshake, FaStar, FaUser } from "react-icons/fa";
import InfoBoxItem from "../common/InfoBoxItem";
const Values = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <FaHandshake className="text-4xl text-red-500" />,
      title: t("about.values.items.integrity.title"),
      description: t("about.values.items.integrity.description"),
    },
    {
      icon: <FaStar className="text-4xl text-red-500" />,
      title: t("about.values.items.excellence.title"),
      description: t("about.values.items.excellence.description"),
    },
    {
      icon: <FaUser className="text-4xl text-red-500" />,
      title: t("about.values.items.customer.title"),
      description: t("about.values.items.customer.description"),
    },
  ];
  return (
    <div className="rounded-lg py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          {t("about.values.title")}
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value) => (
            <InfoBoxItem
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
