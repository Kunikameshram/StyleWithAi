import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsBox2HeartFill } from "react-icons/bs";

import { AiOutlineFileProtect } from "react-icons/ai";

import "swiper/css";
import "swiper/css/autoplay";

const products = [
  {
    id: 1,
    name: "Peaky Blinders Outfit",
    description:
      "Peaky Blinkers classic outfit for a timeless look. Made with premium fabric and attention to detail.",
    price: "$100.00",
    size: "S",
    image: "/images/productDescription.png",
  },
  {
    id: 2,
    name: "Vintage Suit",
    description:
      "A classic vintage suit for a timeless look. Made with premium fabric and attention to detail.",
    price: "$150.00",
    size: "M",
    image: "/images/vintageSuit.jpg",
  },
  {
    id: 3,
    name: "Peaky Blinders Hat",
    description:
      "A classic cute Hat. Made with premium fabric and attention to detail.",
    price: "$35.00",
    size: "M",
    image: "/images/Hat.jpg",
  },
];

const SingleProduct = () => {
  const swiperRef = useRef(null);

  return (
    <div className="bg-gray-100  w-screen flex flex-col items-center p-0">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-auto"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-gray-200 w-full flex flex-col md:flex-row items-center p-0">
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-[500px] flex justify-start items-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Description Section */}
              <div className="w-full md:w-1/2 p-12 bg-gray-200 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm mt-4 font-semibold">
                  DESCRIPTION
                </p>
                <p className="text-gray-700 mt-4 text-sm">
                  {product.description}
                </p>
                <div className="mt-6">
                  <span className="font-semibold text-gray-700">Size:</span>
                  <button className="ml-2 bg-black text-white text-xs px-3 py-1 rounded">
                    {product.size}
                  </button>
                </div>
                <p className="text-2xl font-semibold mt-6 text-gray-900">
                  {product.price}
                </p>
                <button
                  className="mt-24 bg-black text-white px-6 py-2 rounded shadow-md transition-transform transform hover:scale-105 active:scale-95 hover:bg-gray-800"
                  onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                  onMouseLeave={() => swiperRef.current?.autoplay.start()}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Features Section */}
      <div className="bg-gray-100 shadow-lg rounded-lg p-6 mt-8 w-full flex justify-around text-center">
        {[
          {
            icon: <FaHandHoldingDollar />,
            title: "Rich Quality",
            detail: "Crafted from top materials",
          },
          {
            icon: <AiOutlineFileProtect />,
            title: "Warranty Protection",
            detail: "Over 1 year",
          },
          {
            icon: <BsBox2HeartFill />,
            title: "Free Shipping",
            detail: "Orders over $250",
          },
        ].map((feature, index) => (
          <div key={index} className="flex flex-row items-center space-x-2">
            <span className="text-gray-800 text-xl">{feature.icon}</span>
            <div className="flex flex-col items-start">
              <p className="text-lg font-semibold text-gray-800">
                {feature.title}
              </p>
              <p className="text-gray-600 text-sm">{feature.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;
