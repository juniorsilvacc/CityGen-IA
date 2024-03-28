"use client";

import React, { useState } from "react";
import styles from "../styles/HorizontalScroll.module.css";
import ImgPreview from "./ImgPreview";

export default function ImgScroll() {
  const imageUrls = [
    "/Antartica.png",
    "/Boston.png",
    "/China.png",
    "/Dubai.png",
    "/Egito.png",
    "/Inglaterra.png",
    "/Japão.png",
    "/Londres.png",
    "/Paris.png",
    "/Rio de Janeiro.png",
    "/Saharan Desert.png",
    "/San Francisco.png",
    "/São Paulo.png",
    "/Suiça.png",
  ];
  const repeatCount = 1000;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: any) => {
    setSelectedImageIndex(index);
  };

  const selectedImageUrl = imageUrls[selectedImageIndex % imageUrls.length];
  const selectedImageName = selectedImageUrl
    .substring(selectedImageUrl.lastIndexOf("/") + 1)
    .replace(".png", "");

  return (
    <div className="w-full overflow-x-hidden mt-6 mb-16">
      <div className={`${styles.scrollContainer} flex w-56 space-x-4`}>
        {[...Array(repeatCount)].map((_, index) => (
          <React.Fragment key={index}>
            <img
              src={imageUrls[index % imageUrls.length]}
              alt={`Imagem ${index + 1}`}
              className={`rounded-2xl ${
                selectedImageIndex === index ? "border-2 border-green-500" : ""
              } mb-16`}
              onClick={() => handleImageClick(index)}
              style={{ cursor: "pointer" }}
            />
          </React.Fragment>
        ))}
      </div>

      <h2 className="text-green-500 text-center font-bold text-4xl font-signika-negative">
        Powerful Features for Icon Creation
      </h2>
      <div className="container mx-auto rounded overflow-hidden shadow-lg mt-10">
        <div className="flex justify-center">
          <div className="w-1/2 p-4 justify-center">
            <div className="px-6 py-8 border dark:border-slate-700 bg-opacity-50 rounded-lg">
              {selectedImageIndex !== null && (
                <>
                  <p className="text-start mb-6 dark:text-slate-100 font-bold sm:text-4xl font-signika-negative">
                    {selectedImageName}
                  </p>
                  <ImgPreview
                    imageUrl={imageUrls[selectedImageIndex % imageUrls.length]}
                  />
                </>
              )}
            </div>
          </div>

          <div className="w-1/3 p-4">
            <div className="mb-6">
              <h4 className="font-semibold mb-2">AI Powered:</h4>
              <p className="text-gray-700 text-justify">
                Craft distinct pet icons each time using OpenAI DALL-E2
                technology, ensuring unparalleled designs for your endeavors.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Customization:</h4>
              <p className="text-gray-700 text-justify">
                Effortlessly tailor your pet icons with our user-friendly tools,
                enabling you to modify hues, designs, and movements.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">High-Quality Output:</h4>
              <p className="text-gray-700 text-justify">
                Grab your pet icons in crisp high-resolution PNG format for web
                use or share direct links with your friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
