import { useEffect, useState } from "react";
import "./Exchanges.css";
import Coin from "../coin/Coin";
import CoinData from "../../routes/coin-data/CoinData";
import { Link } from "react-router-dom";

const Exchanges = ({ coins }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {});

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="exchange-container" id="exchanges">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleInput}
          ></input>
        </form>
      </div>
      {filteredCoins.length === 0 && search === "" ? (
        <div className="rate-limit-container">
          <h3 className="rate-limit-message">
            Data temporarily unavailable due to rate limiting. Please try again
            later.
          </h3>
        </div>
      ) : (
        <div className="coins-container">
          <div className="coins-labels">
            <p>Img</p>
            <p>Name</p>
            <p>Symbol</p>
            <p>Value</p>
            <p>Change</p>
            <p>Volume</p>
          </div>

          {filteredCoins.map((coin) => {
            return (
              <Link
                to={`/coin/${coin.id}`}
                element={<CoinData />}
                key={coin.id}
              >
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  volume={coin.market_cap}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  marketCap={coin.total_volume}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Exchanges;
