import "./Navbar.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useVisibility } from "../../context/VisibilityContext";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { toggleVisibility } = useVisibility();

  const handleClick = () => {
    setClick(!click);
    toggleVisibility();
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="navbar">
      <div className="container">
        <ScrollLink to="top" smooth={true} duration={500}>
          <h1 onClick={scrollToTop}>CryptoBin</h1>
        </ScrollLink>

        <ul className={click ? "nav active" : "nav"}>
          <li className="link">
            <ScrollLink to="trending" smooth={true} duration={500}>
              Trending
            </ScrollLink>
          </li>
          <li className="link">
            <ScrollLink to="exchanges" smooth={true} duration={500}>
              Exchanges
            </ScrollLink>
          </li>
          <li className="link">
            <ScrollLink to="pricing" smooth={true} duration={500}>
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
