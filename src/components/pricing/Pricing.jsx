import "./Pricing.css";
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  return (
    <div className="pricing-container" id="pricing">
      <h1 className="pricing-title">Pricing</h1>
      <div className="pricing-cards-container">
        <div className="pricing-card-container">
          <p className="level">Basic</p>
          <p className="summary alternative">Perfect for Getting Started</p>
          <p className="month-price">
            $29 <span className="alternative">/ mo</span>
          </p>
          <p className="alternative">Or yearly at $20/month</p>
          <button className="buy-btn">Purchase</button>

          <ul className="perks-list">
            <li>
              <FaCheck />{" "}
              <span className="alternative">Access to Top Trending Coins</span>
            </li>
            <li>
              <FaCheck />{" "}
              <span className="alternative">Basic Market Insights</span>
            </li>
            <li>
              <FaCheck />{" "}
              <span className="alternative">Limited Data Export</span>
            </li>
          </ul>
        </div>

        <div className="pricing-card-container">
          <p className="level">Lite</p>
          <p className="summary alternative">For the Intermediate Enthusiast</p>
          <p className="month-price">
            $59 <span className="alternative">/ mo</span>
          </p>
          <p className="alternative">Or yearly at $45/month</p>
          <button className="buy-btn">Purchase</button>

          <ul className="perks-list">
            <li>
              <FaCheck />{" "}
              <span className="alternative">Advanced Market Analytics</span>
            </li>
            <li>
              <FaCheck /> <span className="alternative">Full Coin Details</span>
            </li>
            <li>
              <FaCheck />{" "}
              <span className="alternative">Data Export Feature</span>
            </li>
          </ul>
        </div>

        <div className="pricing-card-container">
          <p className="level">Pro Max</p>
          <p className="summary alternative">Warning: Advanced Only</p>
          <p className="month-price">
            $99 <span className="alternative">/ mo</span>
          </p>
          <p className="alternative">Or yearly at $80/month</p>
          <button className="buy-btn">Purchase</button>

          <ul className="perks-list">
            <li>
              <FaCheck />{" "}
              <span className="alternative">Real-Time Market Data</span>
            </li>
            <li>
              <FaCheck />{" "}
              <span className="alternative">Customizable Alerts</span>
            </li>
            <li>
              <FaCheck />{" "}
              <span className="alternative">Unlimited API Calls</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
