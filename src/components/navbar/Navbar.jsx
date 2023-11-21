import "./Navbar.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useVisibility } from "../../context/VisibilityContext";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { toggleVisibility } = useVisibility();

  const handleClick = () => {
    setClick(!click);
    toggleVisibility();
  };

  const closeMenu = () => {
    if (window.innerWidth <= 940) {
      setClick(false);
      toggleVisibility();
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (click && scrollY > 0) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [click]);

  return (
    <div className="navbar">
      <div className="container">
        <ScrollLink to="top" smooth={true} duration={500}>
          <h1 onClick={scrollToTop}>CryptoBin</h1>
        </ScrollLink>

        <ul className={click ? "nav active" : "nav"}>
          <li className="link">
            <ScrollLink
              to="trending"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Trending
            </ScrollLink>
          </li>
          <li className="link">
            <ScrollLink
              to="exchanges"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Exchanges
            </ScrollLink>
          </li>
          <li className="link">
            <ScrollLink
              to="pricing"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Pricing
            </ScrollLink>
          </li>
        </ul>
        <div onClick={handleClick} className="menu-icon-container">
          {click ? (
            <AiOutlineClose className="close-icon" />
          ) : (
            <AiOutlineMenu className="menu-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
