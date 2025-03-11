import React, { useState } from "react";

const reviewsModel = {
  1: 4.1,
  2: 5.3,
  3: 2.1,
  4: 4.1,
  5: 7.1,
  6: 5.1,
};

const products = [
  {
    id: 1,
    name: "Shiny Dress",
    image: "/images/shinyDress.png",
    price: 99.99,
    status: "High in Demand",
    categories: ["Women's Fashion", "Discount Deals"],
  },
  {
    id: 2,
    name: "Long Dress",
    image: "/images/shinDress2.png",
    price: 79.5,
    status: "Almost Sold Out",
    categories: ["Women's Fashion", "Women Accessories"],
  },
  {
    id: 3,
    name: "Winter Sweater",
    image: "/images/shinyDress3.png",
    price: 120.0,
    status: "Almost Sold Out",
    categories: ["Women's Fashion", "Men Accessories"],
  },
  {
    id: 4,
    name: "White Dress",
    image: "/images/shinyDress4.png",
    price: 95.5,
    status: "Almost Sold Out",
    categories: ["Women's Fashion"],
  },
  {
    id: 5,
    name: "Colorful Dress",
    image: "/images/shinyDress5.png",
    price: 95.5,
    status: "High in Demand",
    categories: ["Women's Fashion", "Discount Deals", "Women Accessories"],
  },
  {
    id: 6,
    name: "White Shirt",
    image: "/images/shinyDress6.png",
    price: 95.5,
    status: "Almost Sold Out",
    categories: ["Men's Fashion", "Women's Fashion"],
  },

];

const Arrivals = () => {
  const [activeCategory, setActiveCategory] = useState("Women's Fashion");
  const [visibleCount, setVisibleCount] = useState(6);
  const categories = [
    "Men's Fashion",
    "Women's Fashion",
    "Women Accessories",
    "Men Accessories",
    "Discount Deals",
  ];

  const filteredProducts = products.filter((product) =>
    product.categories.includes(activeCategory)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-6xl font-bold text-center text-gray-800 mb-4">
        New Arrivals
      </h1>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setVisibleCount(6);
            }}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeCategory === category
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredProducts.slice(0, visibleCount).map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="bg-white p-4 rounded-lg shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-sm text-gray-500">AI</p>
            <div className="flex items-center gap-2 my-2">
              <span className="text-yellow-500">★★★★★</span>
              <p className="text-gray-500">
                ({reviewsModel[product.id]}k) Customer Reviews
              </p>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            <p
              className={`text-sm font-semibold mt-2 ${
                product.status.includes("High")
                  ? "text-red-500"
                  : "text-orange-500"
              }`}
            >
              {product.status}
            </p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            View More
          </button>
        </div>
      
    </div>
  );
};

export default Arrivals;
