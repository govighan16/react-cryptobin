import backgroundVideo from "../../assets/bitcoin.mp4";
import "./Header.css";
import { BiSolidChevronRightCircle } from "react-icons/bi";
import { useVisibility } from "../../context/VisibilityContext";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const { isVisible } = useVisibility();

  return (
    <div className="header" id="header">
      <video autoPlay loop muted id="vid">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className={`header ${isVisible ? "header-text-container" : "hide"}`}>
        <div className="heading-container">
          <h1 className="large">Unlock the World of Crypto:</h1>
          <h1>
            <span className="green">Real-Time</span> Rates, Trends, and Insights
          </h1>
        </div>
        <div className="para-container">
          <p>
            CryptoBin is the easiest and fastest way to discover trends in
            cryptocurrencies.
          </p>
          <p>Discover a wealth of information at your fingertips.</p>
        </div>
        <ScrollLink
          to="exchanges"
          smooth={true}
          duration={500}
          className="btn"
          offset={-70}
        >
          Get Started
          <span>
            <BiSolidChevronRightCircle className="chevron-icon" />
          </span>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Header;
