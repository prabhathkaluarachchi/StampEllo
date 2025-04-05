import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsCategoriesOpen(false);
  };

  const categories = [
    { name: "Persons", path: "/persons" },
    { name: "Transportation", path: "/transportation" },
    { name: "Places", path: "/places" },
    { name: "Events", path: "/events" },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeAllMenus}>
            StampEllo
          </Link>

          <div className={`navbar-links ${isOpen ? "active" : ""}`}>
            <Link to="/" className="navbar-link" onClick={closeAllMenus}>
              Home
            </Link>

            <div
              className="navbar-link-container"
              onMouseEnter={() => !isOpen && setIsCategoriesOpen(true)}
              onMouseLeave={() => !isOpen && setIsCategoriesOpen(false)}
            >
              <button
                className="navbar-link dropdown-toggle"
                onClick={() => {
                  isOpen
                    ? toggleCategories()
                    : setIsCategoriesOpen(!isCategoriesOpen);
                }}
              >
                Categories
                <span
                  className={`dropdown-arrow ${isCategoriesOpen ? "open" : ""}`}
                >
                  ▼
                </span>
              </button>

              <ul
                className={`dropdown-menu ${isCategoriesOpen ? "active" : ""}`}
              >
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={category.path}
                      className="dropdown-item"
                      onClick={closeAllMenus}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/about" className="navbar-link" onClick={closeAllMenus}>
              About
            </Link>

            <Link
              to="/get-in-touch"
              className="navbar-link"
              onClick={closeAllMenus}
            >
              Get in Touch
            </Link>
          </div>

          <div className="navbar-hamburger" onClick={toggleMenu}>
            <span className={`hamburger-line ${isOpen ? "active" : ""}`} />
            <span className={`hamburger-line ${isOpen ? "active" : ""}`} />
            <span className={`hamburger-line ${isOpen ? "active" : ""}`} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
