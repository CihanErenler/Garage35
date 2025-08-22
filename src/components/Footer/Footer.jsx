import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/Garage35.svg";
import { Link } from "react-router-dom";
import useTranslation from "../../hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-950 pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Logo" className="mb-4 h-12" />
            <p className="mb-4 text-sm">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Garage35-Oy/100063502600852/?locale=fi_FI&_rdr"
                className="transition-colors hover:text-red-500"
                target="_blank"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.nettiauto.com/yritys/1592446"
                className="transition-colors hover:text-red-500"
                target="_blank"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/garage35oy/#"
                className="transition-colors hover:text-red-500"
                target="_blank"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {t("footer.quickLinks.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="transition-colors hover:text-red-500">
                  {t("footer.quickLinks.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-red-500"
                >
                  {t("footer.quickLinks.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/listing"
                  className="transition-colors hover:text-red-500"
                >
                  {t("footer.quickLinks.listing")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-red-500"
                >
                  {t("footer.quickLinks.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {t("footer.contact.title")}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaPhone className="text-red-500" />
                <span> 0205300950</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-red-500" />
                <span>{t("footer.contact.email")}</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span>{t("footer.contact.address")}</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {t("footer.hours.title")}
            </h3>
            <ul className="space-y-2">
              <li>{t("footer.hours.weekdays")}</li>
              <li>{t("footer.hours.saturday")}</li>
              <li>{t("footer.hours.sunday")}</li>
            </ul>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            {t("footer.copyright.start")} {new Date().getFullYear()}{" "}
            {t("footer.copyright.end")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
