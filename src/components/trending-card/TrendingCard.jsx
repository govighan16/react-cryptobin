import "./TrendingCard.css";

const TrendingCard = ({
  title,
  symbol,
  img,
  price,
  value,
  modifier,
  score,
}) => {
  return (
    <div className="trending-card-container">
      <div className="card-title-container">
        <p className="card-title">{title}</p>
        <span className="grey-pastel">{symbol}</span>
      </div>
      <img src={img} className="coin-logo" />
      <p className="card-valueR">{price}</p>
      <p className="card-currency">BTC</p>
      <div className="rate-container">
        <p className="grey-pastel">{`$${value}`}</p>
        <a href="#" className={`price-change ${modifier}`}>
          {score + 1}
        </a>
      </div>
    </div>
  );
};

export default TrendingCard;
