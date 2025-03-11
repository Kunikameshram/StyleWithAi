import React from "react";
import fashion1 from "../../../public/images/Fashion1.png";
import fashion2 from "../../../public/images/kendall.png";
import fashion3 from "../../../public/images/Fashion3.png";
import fashion4 from "../../../public/images/Fashion22.jpg";
import fashion5 from "../../../public/images/Fashion1.png"; // Add additional images as needed
import channel from "../../../public/images/channel.png";
import louisvitton from "../../../public/images/louisvitton.png";
import prada from "../../../public/images/prada.png";
import calvin from "../../../public/images/calvin.png";
import denim from "../../../public/images/denim.png";

const Banner = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Top Section with 3 Images */}
      <div className="grid grid-cols-3 gap-4 items-center">
        {/* Left Image - Fashion 1 */}
        <a
          href="#" // Replace with the desired link
          className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
        >
          <img
            src={fashion1}
            alt="Fashion 1"
            className="w-full h-full object-cover"
          />
        </a>

        {/* Center Flash Sale Content */}
        <div className="text-center space-y-4">
          <a
            href="#" // Replace with the desired link
            className="flex justify-center transform transition-transform hover:scale-105"
          >
            <img
              src={fashion3}
              alt="Fashion Models"
              className="rounded-lg shadow-md"
            />
          </a>
          <h1 className="text-5xl font-bold">Flash</h1>
          <h1 className="text-gray-300 font-bold text-9xl">SALE</h1>
          <p className="text-gray-500 uppercase tracking-wide">New Arrivals</p>
          <button className="bg-black text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition">
            GET IT NOW
          </button>
          <a
            href="#" // Replace with the desired link
            className="flex justify-center transform transition-transform hover:scale-105"
          >
            <img
              src={fashion4}
              alt="Smiling Girls"
              className="rounded-lg shadow-md"
            />
          </a>
        </div>

        {/* Right Image - Fashion 2 */}
        <a
          href="#" // Replace with the desired link
          className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
        >
          <img
            src={fashion2}
            alt="Fashion 2"
            className="w-full h-full object-cover"
          />
        </a>
      </div>

      {/* Bottom Section with 5 Images */}
        <div className="max-w-screen-2xl mx-auto container x1:px-28 px-4 py28">
          <div className="flex items-center justify-around flex-wrap gap-4 py-5">
            <a
              href="#" // Replace with the desired link
              className="flex justify-center items-center transform transition-transform hover:scale-105"
            >
              <img
                src={channel}
                alt="Channel"
                className="h-6 object-contain"
              />
            </a>
            <a
              href="#" // Replace with the desired link
              className="flex justify-center items-center transform transition-transform hover:scale-105"
            >
              <img
                src={louisvitton}
                alt="Louis Vuitton"
                className="h-6 object-contain"
              />
            </a>
            <a
              href="#" // Replace with the desired link
              className="flex justify-center items-center transform transition-transform hover:scale-105"
            >
              <img
                src={prada}
                alt="Prada"
                className="h-6 object-contain"
              />
            </a>
            <a
              href="#" // Replace with the desired link
              className="flex justify-center items-center transform transition-transform hover:scale-105"
            >
              <img
                src={calvin}
                alt="Calvin Klein"
                className="h-20 object-contain"
              />
            </a>
            <a
              href="#" // Replace with the desired link
              className="flex justify-center items-center transform transition-transform hover:scale-105"
            >
              <img
                src={denim}
                alt="Denim"
                className="h-24 object-contain"
              />
            </a>
          </div>
        </div>
    </section>
  );
};

export default Banner;