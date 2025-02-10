import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png";
import PropTypes from 'prop-types';
import LanguageSelector from './LanguageSelector';
import useTranslation from '../../hooks/useTranslation';
import useScrollPosition from '../../hooks/useScrollPosition';

const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const scrolled = useScrollPosition();

  return (
    <nav className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <img 
              src={logo} 
              alt="logo" 
              className={`transition-all duration-300 ${
                scrolled ? 'h-8' : 'h-10'
              }`}
            />
          </Link>
          <div className="flex items-center space-x-8">  
            <div className="flex items-center space-x-6">
              <NavLink to="/" active={location.pathname === "/"}>
                {t('nav.home')}
              </NavLink>
              <NavLink to="/listing" active={location.pathname === "/listing"}>
                {t('nav.listing')}
              </NavLink>
              <NavLink to="/about" active={location.pathname === "/about"}>
                {t('nav.about')}
              </NavLink>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, active }) => {
  return (
    <Link
      to={to}
      className={`${
        active ? "text-red-500" : "text-gray-700"
      } font-medium hover:text-red-500 transition-colors`}
    >
      {children}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  active: PropTypes.bool
};

NavLink.defaultProps = {
  active: false
};

export default Navbar; 