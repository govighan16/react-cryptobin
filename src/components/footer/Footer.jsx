import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGooglePay,
  FaApplePay,
  FaCcMastercard,
} from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { FaPaypal } from "react-icons/fa6";

import { IoPaperPlaneOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials-container">
          <a href="#" className="name">
            CryptoBin
          </a>
          <ul className="socials-list">
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
        <div className="links-container">
          <ul className="links-list">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Policy</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
          <p>
            Navigate the Cryptocurrency Universe effortlessly. Uncover trends,
            access real-time rates, and delve into detailed insights.
          </p>
          <p>
            Your gateway to the dynamic world of crypto exploration. Embark on
            your journey now.
          </p>
        </div>
        <div className="subscribe-container">
          <p>Subscribe to the newsletter</p>
          <form>
            <div className="input-container">
              <input type="email" placeholder="johndoe@example.org" />
              <button type="submit">
                <IoPaperPlaneOutline className="submit-logo" />
              </button>
            </div>
          </form>
          <ul className="payment-list">
            <li>
              <a href="#">
                <FaGooglePay />
              </a>
            </li>
            <li>
              <a href="#">
                <FaApplePay />
              </a>
            </li>
            <li>
              <a href="#">
                <FaCcMastercard />
              </a>
            </li>
            <li>
              <a href="#">
                <FaPaypal />
              </a>
            </li>
            <li>
              <a href="#">
                <SiCashapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
