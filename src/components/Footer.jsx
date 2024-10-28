import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaTelegram, FaViber, FaWhatsapp } from "react-icons/fa6";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-6">
        {/* Left Section - Logo and Company Name */}
        {/* Right Section - Contact Information */}
        <div>
          <div className="text-left rtl:text-right mb-2">
            <h3 className="text-lg md:text-xl font-bold text-white">
              {t("footer.companyName")}
            </h3>
            <p className="text-sm text-gray-400">{t("footer.rights")}</p>
          </div>

          <div className="flex flex-col ">
            <div className="flex items-center gap-3">
              <FaPhone />
              <a href="tel:+9647812077766" className="hover:text-gray-200">
                07812077766
              </a>
              <FaWhatsapp />
              <FaTelegram />
              <FaViber />
            </div>
            <div className="flex items-center gap-3">
              <FaPhone />
              <a href="tel:+9647803444600" className="hover:text-gray-200">
                07803444600
              </a>
            </div>
            {/* <div className="flex items-center gap-3">
              <FaPhone />
              <a href="tel:+9647801397214" className="hover:text-gray-200">
                07801397214
              </a>
            </div> */}
            {/* <div className="flex items-center gap-3">
              <FaPhone />
              <a href="tel:+9647748011579" className="hover:text-gray-200">
                07748011579
              </a>
            </div> */}
            <div className="flex items-center gap-3">
              <MdEmail />
              <a
                href="mailto:alemalrasana@gmail.com"
                className="hover:text-gray-200"
              >
                alemalrasana@gmail.com
              </a>
            </div>
            {/* New Google Maps Location Section */}
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <a
                // href="https://maps.app.goo.gl/YY18PMjkj6fzb9J38"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                {t("footer.location")}
              </a>
            </div>
          </div>
        </div>

        <img
          src="/logo2.png"
          alt="albaraa Logo"
          className="hidden md:block md:w-40 object-cover rounded-lg"
        />
      </div>

      <div className="text-center mt-2">
        <p>Powered by IqDevHouse</p>
      </div>
    </footer>
  );
};

export default Footer;
