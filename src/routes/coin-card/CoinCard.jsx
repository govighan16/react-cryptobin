import "./CoinCard.css";

const CoinCard = ({ id, symbol, img, price, modifier, rank }) => {
  return (
    <div className="coin-card-container">
      <div className="coin-card-title-container">
        <p className="coin-card-title">{id}</p>
        <p className="coin-card-symbol">{`(${symbol})`}</p>
      </div>
      <div className="coin-card-img-container">
        <img src={`${img}`} className="coin-card-img"></img>
      </div>
      <div className="coin-card-current-price-container">
        <p className="coin-card-current-price">{`$${price}`}</p>
      </div>
      <div className="coin-card-rank-container">
        <p className="coin-card-rank-text">Rank:</p>
        <p className={`coin-card-rank price-change ${modifier}`}>
          {`#${rank}`}
        </p>
      </div>
    </div>
  );
};

export default CoinCard;
