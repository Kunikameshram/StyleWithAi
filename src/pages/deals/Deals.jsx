import React, { useState, useEffect, useMemo } from "react";
import Countdown from "react-countdown";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";

const Deals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/deals1.png",
    "/images/deals2.png",
    "/images/deals1.png",
    "/images/deals2.png",
    "/images/deals1.png",
  ];

  const totalSlides = images.length;
  const imagesPerView = 3;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Check if buttons should be disabled
  const isFirstImage = currentIndex === 0;
  const isLastImage = currentIndex === totalSlides - 1;

  const targetDate = useMemo(() => {
    return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-red-500 font-bold">The deal has ended!</span>;
    } else {
      return (
        <div className="flex space-x-4">
          {[
            { label: "Days", value: days },
            { label: "Hr", value: hours },
            { label: "Mins", value: minutes },
            { label: "Sec", value: seconds },
          ].map((time, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg px-4 py-2 text-center"
            >
              <span className="text-4xl font-bold">{time.value}</span>
              <span className="block text-sm text-gray-500">{time.label}</span>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="max-w-9xl w-full bg-gray-100 rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
      {/* Left Section: Countdown Timer */}
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Deals Of The Week
        </h1>
        <p className="text-gray-600 mb-10 text-2xl">
          Get the best deals on our products. If you are looking for a great
          bargain, this is the right place.
        </p>

        <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 transition">
          Buy Now
        </button>

        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-700">
            Hurry, Before It’s Too Late!
          </h2>
          <div className="mt-4">
            <Countdown date={targetDate} renderer={renderer} />
          </div>
        </div>

        <div className="bg-yellow-200 p-4 rounded-lg mt-6">
          <p className="text-2xl font-bold text-gray-800">01 — Spring Sale</p>
          <p className="text-lg text-gray-600">40% OFF</p>
        </div>
      </div>

      {/* Right Section: Carousel */}
      <div className="flex-1 relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex % totalSlides) * (100 / imagesPerView)}%)`,
            width: `${(totalSlides / imagesPerView) * 100}%`,
          }}
        >
          {images.concat(images).map((img, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg w-1/3 flex-shrink-0"
              style={{ flex: `0 0 ${100 / imagesPerView}%` }}
            >
              <img
                src={img}
                alt={`Deal ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
          {/* Previous Button */}
          <button
            onClick={prevImage}
            disabled={isFirstImage} // Disable on first image
            className={`bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 cursor-pointer ${
              isFirstImage ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
            }`}
            title="Previous" // Tooltip
          >
            <RiArrowLeftDoubleLine className="text-2xl text-gray-700" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            disabled={isLastImage} // Disable on last image
            className={`bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 cursor-pointer ${
              isLastImage ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
            }`}
            title="Next" // Tooltip
          >
            <RiArrowRightDoubleLine className="text-2xl text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deals;