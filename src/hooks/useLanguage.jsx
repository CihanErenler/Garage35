import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

// eslint-disable-next-line react/prop-types
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Try to get language from localStorage, default to 'en'
    return localStorage.getItem("language") || "fi";
  });

  const languages = [
    { code: "fi", label: "Suomi" },
    { code: "en", label: "English" },
    { code: "tr", label: "Türkçe" },
  ];

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode);
    localStorage.setItem("language", languageCode);
    document.documentElement.lang = languageCode;
  };

  // Set initial language
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, []);

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, changeLanguage, languages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default useLanguage;
