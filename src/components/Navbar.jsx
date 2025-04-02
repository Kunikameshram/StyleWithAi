import React from "react";
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "/logo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAccountOpen, setIsAccountOpen] = React.useState(false);
  const [password, setPassword] = React.useState(""); // State for password input
  const [firstName, setFirstName] = React.useState("Test"); // State for first name
  const [lastName, setLastName] = React.useState("Testing"); // State for last name
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleAccountPopup = () => {
    setIsAccountOpen(!isAccountOpen);
    // Reset fields when closing/opening the modal
    setPassword("");
    setFirstName("Test"); // Reset to hardcoded value
    setLastName("Testing"); // Reset to hardcoded value
  };

  // Function to "update" details (just for show)
  const handleUpdateDetails = () => {
    // Show an alert with the updated values (for demo purposes)
    alert(
      `Details updated successfully! (This is a demo)\nFirst Name: ${firstName}\nLast Name: ${lastName}\nPassword: ${
        password || "Not changed"
      }`
    );
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

  // Hardcoded user details
  const userDetails = {
    username: "test@gmail.com",
    firstName: "Test",
    lastName: "Testing",
    account: "Account",
  };

  return (
    <header className="max-w-screen-2xl w-full xl:px-28 px-4">
      <nav className="flex justify-between items-center w-full md:py-4 pt-6 pb-3">
        <FaSearch className="text-black w-5 h-5 cursor-pointer hidden md:block" />
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>

        <div className="text-lg text-black sm:flex items-center gap-4 hidden">
          <button onClick={toggleAccountPopup} className="flex items-center gap-2">
            <FaUser /> Account
          </button>
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

      {/* Account Pop-up Modal */}
      {isAccountOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4 text-black">User Account</h2>
            <div className="text-black">
              <p>
                <strong>Username:</strong> {userDetails.username}
              </p>
              {/* First Name Field */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-black">
                  First Name:
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder="Enter first name"
                />
              </div>
              {/* Last Name Field */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-black">
                  Last Name:
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder="Enter last name"
                />
              </div>
              {/* Password Change Field */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-black">
                  Change Password:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder="Enter new password"
                />
              </div>
              <p className="mt-4">
                <strong>Account:</strong> {userDetails.account}
              </p>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleUpdateDetails}
                className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
              >
                Update Details
              </button>
              <button
                onClick={toggleAccountPopup}
                className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;