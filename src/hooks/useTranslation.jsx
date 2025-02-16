import useLanguage from "./useLanguage";
import en from "../translations/en.json";
import fi from "../translations/fi.json";
import tr from "../translations/tr.json";
const translations = {
  en,
  fi,
  tr,
};

const useTranslation = () => {
  const { currentLanguage } = useLanguage();

  const t = (key) => {
    // Split the key by dots to access nested properties
    const keys = key.split(".");
    let translation = translations[currentLanguage];

    // Traverse the nested object
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        console.warn(`Translation missing for key: ${key}`);
        return key;
      }
    }

    return translation;
  };

  return { t };
};

export default useTranslation;
