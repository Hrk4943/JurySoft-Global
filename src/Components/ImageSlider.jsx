import React, { useState } from "react";

function ImageSlider({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const handlePrevClick = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };
  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };
  if (!images || images.length === 0) {
    return null;
  }
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center pt-10">
        <button className="m-3 md:m-10 text-gray-500" onClick={handlePrevClick}>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>
        <img
          className="w-full max-h-[400px] md:min-h-[400px] md:min-w-[400px] shadow-2xl rounded-lg"
          src={images[currentImage]}
          alt={`Images ${currentImage}`}
        />
        <button className="m-3 md:m-10 text-gray-500" onClick={handleNextClick}>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default ImageSlider;
