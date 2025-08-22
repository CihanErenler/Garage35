import { FaWrench } from "react-icons/fa";
import { MdCarRepair } from "react-icons/md";
import { GiCarWheel } from "react-icons/gi";
import VisitOurShowroom from "../../components/About/VisitOurShowroom";
import PageHero from "../../components/common/PageHero";
import useTranslation from "../../hooks/useTranslation";
import maintenanceHero from "../../assets/hero.jpg";
import InfoBoxItem from "../../components/common/InfoBoxItem";
import Parallax from "../../components/common/Parallax";
import fixingImage from "../../assets/fixing.jpg";

const MaintenancePage = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <GiCarWheel className="text-4xl text-red-500" />,
      title: t("maintenance.services.tireServices.title"),
      description: t("maintenance.services.tireServices.description"),
    },
    {
      icon: <MdCarRepair className="text-4xl text-red-500" />,
      title: t("maintenance.services.vehicleInspection.title"),
      description: t("maintenance.services.vehicleInspection.description"),
    },
    {
      icon: <FaWrench className="text-4xl text-red-500" />,
      title: t("maintenance.services.generalMaintenance.title"),
      description: t("maintenance.services.generalMaintenance.description"),
    },
  ];

  return (
    <>
      <PageHero
        title={t("maintenance.hero.title")}
        subtitle={t("maintenance.hero.subtitle")}
        image={maintenanceHero}
      />
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-800">
              {t("maintenance.hero.title")}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              {t("maintenance.hero.subtitle")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <InfoBoxItem
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
      <Parallax
        image={fixingImage}
        speed={0.2}
        title={t("maintenance.parallax.title")}
        subtitle={t("maintenance.parallax.subtitle")}
      />
      <div className="container mx-auto px-4">
        <VisitOurShowroom
          title={t("maintenance.callNow.title")}
          description={t("maintenance.callNow.description")}
        />
      </div>
    </>
  );
};

export default MaintenancePage;
