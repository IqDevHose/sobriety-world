import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../lib/i18next";

export function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Update document direction on language change
    document.documentElement.setAttribute(
      "dir",
      currentLanguage === "ar" ? "rtl" : "ltr"
    );
  }, [currentLanguage]);

  const navItems = [
    { name: t("home"), path: "/" },
    { name: t("gallery"), path: "/gallery" },
    { name: t("about"), path: "/about" },
  ];

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className="sticky top-0 z-10 bg-lightbulb backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex">
            <NavLink to="/" className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="albaraah Logo"
                className="w-20 md:w-28 object-cover"
              />
            </NavLink>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline gap-6 text-xl">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-black font-bold" : "text-black "
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              {/* Single Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="py-1 px-3 bg-gray-200 rounded hover:bg-gray-300"
              >
                {currentLanguage === "en" ? "AR" : "EN"}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md  hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-3 text-black rounded-md text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Language Toggle Button in Mobile Menu */}
            <div className="pt-4">
              <button
                onClick={toggleLanguage}
                className="py-2 px-4 w-full bg=black rounded hover:bg-gray-300"
              >
                {currentLanguage === "en" ? "ARABIC" : "ENGLISH"}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
