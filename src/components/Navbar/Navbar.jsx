import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import useTranslation from '../../hooks/useTranslation';
import LanguageSelector from './LanguageSelector';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10' : 'h-12'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-red-500' 
                  : 'text-gray-700 hover:text-red-500'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/listing" 
              className={`font-medium transition-colors ${
                isActive('/listing') 
                  ? 'text-red-500' 
                  : 'text-gray-700 hover:text-red-500'
              }`}
            >
              {t('nav.listing')}
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-red-500' 
                  : 'text-gray-700 hover:text-red-500'
              }`}
            >
              {t('nav.about')}
            </Link>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden text-gray-700 hover:text-red-500 transition-colors ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-50`}
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button 
              className="text-gray-700 hover:text-red-500 transition-colors"
              onClick={toggleMenu}
            >
              <FaTimes size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-red-500' 
                  : 'text-gray-700 hover:text-red-500'
              }`}
              onClick={toggleMenu}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/listing" 
              className={`font-medium transition-colors ${
                isActive('/listing') 
                  ? 'text-red-500' 
                  : 'text-gray-700 hover:text-red-500'
              }`}
              onClick={toggleMenu}
            >
              {t('nav.listing')}
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-red-500' 
                  : 'text-gray-700 hover:text-red-500'
              }`}
              onClick={toggleMenu}
            >
              {t('nav.about')}
            </Link>
            <div className="pt-4">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed transition-opacity duration-300 inset-0 bg-black opacity-50 md:hidden z-40"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar; 