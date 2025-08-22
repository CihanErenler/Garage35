import useTranslation from "../../hooks/useTranslation";

const Story = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl text-center text-lg">
        <h2 className="mb-6 text-3xl font-bold">{t("about.story.title")}</h2>
        <p className="mb-4 text-gray-600">{t("about.story.description")}</p>
      </div>
    </div>
  );
};

export default Story;
