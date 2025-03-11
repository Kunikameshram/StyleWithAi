import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "William",
    review:
      "You won't be sorry. I want to express my gratitude for your excellent product. Fantastic, fantastic!",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "Teacher",
  },
  {
    name: "Sophia",
    review:
      "Amazing service, quick delivery, and fantastic quality. Highly recommend!",
    stars: 4,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    role: "Designer",
  },
  {
    name: "Liam",
    review:
      "I love it. Thank you for making it effortless, fun, and stress-free! All items are top-notch.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    role: "Engineer",
  },
  {
    name: "Emma",
    review:
      "Best product ever! The quality is outstanding, and the experience has been wonderful.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    role: "Doctor",
  },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Track the active review

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen bg-gray-100">
      <h2 className="text-5xl font-bold mt-24 mb-4">Customers Reviews</h2>
      <p className="text-gray-600 mb-6">
        Take a look at our previous customer and their testimonials.
      </p>
      <div className="w-full h-full">
      <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-8 transition-transform duration-300">
             <div className={`bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 h-full flex flex-col justify-center ${
    index === activeIndex ? "scale-110" : "scale-60 opacity-75"
}`}>

                <img
                  src={review.image}
                  alt={review.name}
                  className="mx-auto w-20 h-20 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-800 italic">"{review.review}"</p>
                <div className="text-yellow-500 text-lg my-2">
                  {"★".repeat(review.stars) + "☆".repeat(5 - review.stars)}
                </div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
