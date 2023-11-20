import "./CoinAbout.css";
import DOMPurify from "dompurify";

const CoinAbout = ({ aboutData }) => {
  const paragraphs = aboutData ? aboutData.split("\n") : ["N/A"];

  return (
    <div className="coin-about-container">
      <h3>About</h3>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="coin-about-text"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(paragraph),
          }}
        ></p>
      ))}
    </div>
  );
};

export default CoinAbout;
