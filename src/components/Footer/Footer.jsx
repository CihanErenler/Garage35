import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import useTranslation from '../../hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Logo" className="h-12 mb-4" />
            <p className="text-sm mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-red-500 transition-colors">
                  {t('footer.quickLinks.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-500 transition-colors">
                  {t('footer.quickLinks.about')}
                </Link>
              </li>
              <li>
                <Link to="/listing" className="hover:text-red-500 transition-colors">
                  {t('footer.quickLinks.listing')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500 transition-colors">
                  {t('footer.quickLinks.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaPhone className="text-red-500" />
                <span>{t('footer.contact.phone')}</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-red-500" />
                <span>{t('footer.contact.email')}</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span>{t('footer.contact.address')}</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.hours.title')}</h3>
            <ul className="space-y-2">
              <li>{t('footer.hours.weekdays')}</li>
              <li>{t('footer.hours.saturday')}</li>
              <li>{t('footer.hours.sunday')}</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>{t('footer.copyright.start')} {new Date().getFullYear()} {t('footer.copyright.end')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 