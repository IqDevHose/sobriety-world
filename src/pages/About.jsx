import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const About = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Mini Image */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/logo.png" // Ensure this path is correct based on your project structure
            alt="About Us Hero"
            className="w-64 object-cover mb-10"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            {t("aboutUs.title")}
          </h1>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-left rtl:text-right">
          {t("aboutUs.content")}
        </p>
      </section>

      {/* service Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          {t("aboutUs.ourServices")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          <ul class="list-disc text-left ml-2 md:ml-0 rtl:text-right">
            <li>{t("aboutUs.services.1")}</li>
            <li>{t("aboutUs.services.2")}</li>
            <li>{t("aboutUs.services.3")}</li>
          </ul>
        </p>
      </section>

      {/* Goals Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          {t("aboutUs.ourGoals")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          <ul class="list-disc text-left ml-2 md:ml-0 rtl:text-right">
            <li>{t("aboutUs.Goals.1")}</li>
            <li>{t("aboutUs.Goals.2")}</li>
            <li>{t("aboutUs.Goals.3")}</li>
            <li>{t("aboutUs.Goals.4")}</li>
            <li>{t("aboutUs.Goals.5")}</li>
          </ul>
        </p>
      </section>

      {/* history Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          {t("aboutUs.history")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-left rtl:text-right mb-4">
          {t("aboutUs.historyContent1")}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-left rtl:text-right mb-4">
          {t("aboutUs.historyContent2")}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-left rtl:text-right mb-4">
          {t("aboutUs.historyContent3")}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-left rtl:text-right mb-4">
          {t("aboutUs.historyContent4")}
        </p>
      </section>
    </div>
  );
};

export default About;
