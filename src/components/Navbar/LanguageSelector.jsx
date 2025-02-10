import { useState, useRef } from 'react';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import useLanguage from '../../hooks/useLanguage';
import useClickOutside from '../../hooks/useClickOutside';
import { GB, FI } from 'country-flag-icons/react/3x2';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { currentLanguage, changeLanguage, languages } = useLanguage();

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const getFlagComponent = (code) => {
    switch (code) {
      case 'en':
        return <GB className="w-5 h-3" />;
      case 'fi':
        return <FI className="w-5 h-3" />;
      default:
        return null;
    }
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center justify-between gap-2 text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors py-2 px-4 rounded-full w-[120px]"
      >
        <div className="flex items-center gap-2">
          <FaGlobe size={16} className="text-gray-500" />
          <span className="text-sm font-medium min-w-[40px]">{currentLang.label}</span>
        </div>
        <FaChevronDown 
          size={12} 
          className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-[120px] bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-20">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  changeLanguage(language.code);
                  setIsOpen(false);
                }}
                className={`cursor-pointer w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2
                  ${currentLanguage === language.code ? 'text-red-500 font-medium bg-red-50' : 'text-gray-700'}`}
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

export default LanguageSelector; 