import "./index.scss";
import React, { useState, useEffect } from "react";
import { IconButton, useMediaQuery } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FiMail, FiPhone } from "react-icons/fi";
import Logo from "../data/images/Logo-Pt.jpeg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const toggleMenu = () => setShowMenu(!showMenu);
const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    "About",
    "Product",
    "Project",
    "Customer",
    "Contact Us",
    "Location",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id], div[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inisialisasi pertama kali
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="top-bar">
        <img src={Logo} alt="Logo PT" />
        <div className="contact">
          <p>
            <FiMail /> atlindo@example.com
          </p>
          <p>
            <FiPhone /> 0812-3456-7890
          </p>
        </div>
      </div>

      <div className="nav-bar">
        {isMobile ? (
          <>
            <IconButton
              aria-label="Toggle Menu"
              icon={showMenu ? <CloseIcon /> : <HamburgerIcon />}
              onClick={toggleMenu}
              className="menu-toggle"
            />
            {showMenu && (
              <div className="mobile-menu">
                {menuItems.map((item) => {
                  const id = item.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <a
                      key={item}
                      href={`#${id}`}
                      className={activeSection === id ? "active" : ""}
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <nav className="menu">
            {menuItems.map((item) => {
              const id = item.toLowerCase().replace(/\s+/g, "-");
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                >
                  {item}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
