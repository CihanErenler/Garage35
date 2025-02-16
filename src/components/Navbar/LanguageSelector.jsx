import { useState, useRef } from "react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import useLanguage from "../../hooks/useLanguage";
import useClickOutside from "../../hooks/useClickOutside";
import { GB, FI, TR } from "country-flag-icons/react/3x2";
import PropTypes from "prop-types";

const LanguageSelector = ({ theme = "dark" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { currentLanguage, changeLanguage, languages } = useLanguage();

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const getFlagComponent = (code) => {
    switch (code) {
      case "en":
        return <GB className="h-3 w-5" />;
      case "fi":
        return <FI className="h-3 w-5" />;
      case "tr":
        return <TR className="h-3 w-5" />;
      default:
        return null;
    }
  };

  const currentLang = languages.find((lang) => lang.code === currentLanguage);

  const buttonClasses =
    theme === "dark"
      ? "flex w-[120px] cursor-pointer items-center justify-between gap-2 rounded-full bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700"
      : "flex w-[120px] cursor-pointer items-center justify-between gap-2 rounded-full bg-gray-100 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200";

  const iconClasses = theme === "dark" ? "text-gray-400" : "text-gray-500";

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className={buttonClasses}>
        <div className="flex items-center gap-2">
          <FaGlobe size={16} className={iconClasses} />
          <span className="min-w-[40px] text-sm font-medium">
            {currentLang.label}
          </span>
        </div>
        <FaChevronDown
          size={12}
          className={`${iconClasses} transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 z-20 mt-2 w-[120px] rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  changeLanguage(language.code);
                  setIsOpen(false);
                }}
                className={`flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-left text-sm transition-colors hover:bg-gray-50 ${currentLanguage === language.code ? "bg-red-50 font-medium text-red-500" : "text-gray-700"}`}
              >
                {getFlagComponent(language.code)}
                <span>{language.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

LanguageSelector.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"]),
};

export default LanguageSelector;
