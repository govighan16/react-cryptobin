import TrendingCard from "../trending-card/TrendingCard";
import "./Trending.css";

const Trending = ({ trending, btc }) => {
  const filteredTrending = [
    trending[0],
    trending[1],
    trending[3],
    trending[trending.length - 1],
  ];

  return (
    <div className="container" id="trending">
      <h1>Trending</h1>
      <div className="trending-cards-container">
        {filteredTrending.map((coin, index) => {
          const btcVal = coin.item.price_btc * btc;

          let modifier = "";
          if (index === 2) {
            modifier = "orange";
          } else if (index === filteredTrending.length - 1) {
            modifier = "fall";
          } else {
            modifier = "rise";
          }

          return (
            <TrendingCard
              key={index}
              title={coin.item.name}
              symbol={coin.item.symbol}
              img={coin.item.large}
              price={coin.item.price_btc}
              value={btcVal.toFixed(2)}
              modifier={modifier}
              score={coin.item.score}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
