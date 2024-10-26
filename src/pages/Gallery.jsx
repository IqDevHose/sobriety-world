import React, { useState } from "react";
import { Card } from "@material-tailwind/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Gallery = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  const accessoriesStart = 34; // Starting image number for Accessories
  const accessoriesEnd = 40; // Ending image number for Accessories
  const phonesStart = 40; // Starting image number for Phones
  const phonesEnd = 52; // Ending image number for Phones

  const accessoriesImages = [];
  const phoneImages = [];

  // Generate paths for accessories images
  for (let i = accessoriesStart; i <= accessoriesEnd; i++) {
    const imageNumber = i.toString().padStart(4, "0");
    accessoriesImages.push({
      src: `/assets/IMG-20240929-WA${imageNumber}.jpg`,
    });
  }

  // Generate paths for phone images
  for (let i = phonesStart; i <= phonesEnd; i++) {
    const imageNumber = i.toString().padStart(4, "0");
    phoneImages.push({
      src: `/assets/IMG-20240929-WA${imageNumber}.jpg`,
    });
  }

  const [selectedCategory, setSelectedCategory] = useState("Accessories");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  const ImageCard = React.memo(({ image, index }) => (
    <Card
      key={index}
      className="rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out px-4 md:px-0"
      onClick={() => openModal(image.src)}
    >
      <img
        src={image.src}
        alt={`Gallery Image ${index + 1}`}
        className="rounded-lg object-cover"
        style={{ width: "100%", height: "auto" }}
        loading="lazy"
        onError={(e) => {
          if (!e.target.src.endsWith("placeholder-image.jpg")) {
            e.target.src = "/assets/placeholder-image.jpg";
          }
        }}
      />
    </Card>
  ));

  const galleryImages =
    selectedCategory === "Accessories" ? accessoriesImages : phoneImages;

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        {t("galleryPage.title")}
      </h2>

      {/* Category Tabs */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setSelectedCategory("Accessories")}
          className={`px-4 py-2 mx-2 rounded ${
            selectedCategory === "Accessories"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {t("galleryPage.accessories")}
        </button>
        <button
          onClick={() => setSelectedCategory("Phones")}
          className={`px-4 py-2 mx-2 rounded ${
            selectedCategory === "Phones"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {t("galleryPage.phones")}
        </button>
      </div>

      {/* Responsive Grid for Gallery */}
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry gutter="30px" columnsCount={4}>
          {galleryImages.map((image, index) => (
            <ImageCard key={index} image={image} index={index} />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* Modal for larger image display */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-2 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Large View"
              className="max-w-[400px] h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
