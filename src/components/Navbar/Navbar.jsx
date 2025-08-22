import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import useTranslation from "../../hooks/useTranslation";
import { useListings } from "../../context/listingContext";
import LanguageSelector from "./LanguageSelector";
import navList from "./navList";
import logo from "../../assets/garage35.svg";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { resetFilters } = useListings();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onNavClick = (e, to) => {
    e.preventDefault();
    navigate(to);
    resetFilters();
  };

  // Function to check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-gray-950 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className={`transition-all duration-300 ${
                isScrolled ? "h-8" : "h-10"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navList.map((item) => (
              <Link
                key={item.id}
                onClick={(e) => onNavClick(e, item.path)}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-red-500"
                    : "text-white hover:text-red-500"
                }`}
              >
                {t(item.name)}
              </Link>
            ))}
            <LanguageSelector theme="dark" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`text-gray-700 transition-colors hover:text-red-500 md:hidden ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50 md:hidden`}
      >
        <div className="p-6">
          <div className="mb-8 flex justify-end">
            <button
              className="text-white transition-colors hover:text-red-500"
              onClick={toggleMenu}
            >
              <FaTimes size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            {navList.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-red-500"
                    : "text-gray-900 hover:text-red-500"
                }`}
                onClick={toggleMenu}
              >
                {t(item.name)}
              </Link>
            ))}

            <LanguageSelector theme="light" />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 transition-opacity duration-300 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
