import React from "react";
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "/logo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const navItems = [
    { title: "Jewellery & Accessories", link: "/" },
    { title: "Clothing & Shoes", link: "/" },
    { title: "Wedding & Party", link: "/" },
    { title: "Home & Living", link: "/home-" },
    { title: "Toys & Entertainment", link: "/" },
    { title: "Art & Collectibles", link: "/" },
    { title: "Craft Supplies", link: "/" },
    { title: "Gifts & Gift Cards", link: "/" },
  ];

  return (
    <header className="max-w-screen-2xl w-full xl:px-28 px-4">
      <nav className="flex justify-between items-center w-full md:py-4 pt-6 pb-3">
        <FaSearch className="text-black w-5 h-5 cursor-pointer hidden md:block" />
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>

        <div className="text-lg text-black sm:flex items-center gap-4 hidden">
          <a href="/" className="flex items-center gap-2">
            <FaUser /> Account
          </a>
          <a href="/" className="flex items-center gap-2">
            <FaShoppingBag /> Shopping
          </a>
          <button onClick={handleLogout} className="flex items-center gap-2 hover:text-red-500">
            <FaSignOutAlt /> Logout
          </button>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-black w-6 h-6" />
            ) : (
              <FaBars className="text-black w-6 h-6 cursor-pointer" />
            )}
          </button>
        </div>
      </nav>

      <hr />

      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-black hidden">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-orange-500">
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`bg-black text-white px-4 py-2 rounded transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-orange-500 my-3 cursor-pointer">
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
          <li className="my-3 cursor-pointer hover:text-red-500" onClick={handleLogout}>
            <div className="flex items-center gap-2">
              <FaSignOutAlt /> Logout
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
