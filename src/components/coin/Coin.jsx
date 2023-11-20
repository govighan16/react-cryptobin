import "./Coin.css";

const Coin = ({ name, image, symbol, price, volume, priceChange }) => {
  return (
    <div className="coin-container">
      <div className="coin-img-container">
        <img src={image} alt="" className="coin-img" />
      </div>
      <div className="coin-name-container">
        <h3 className="coin-name">{name}</h3>
      </div>
      <div className="coin-symbol-container">
        <p className="coin-symbol">{symbol}</p>
      </div>
      <div className="coin-price-container">
        <p className="coin-price">${price.toLocaleString()}</p>
      </div>
      <div className="price-change-container">
        {priceChange < 0 ? (
          <p className="price-change fall">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="price-change rise">+{priceChange.toFixed(2)}%</p>
        )}
      </div>
      <div className="coin-volume-container">
        <p className="coin-volume">{volume.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Coin;
