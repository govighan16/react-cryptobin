import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarSimple from "../../components/simple-nav/SimpleNav";
import CoinCard from "../coin-card/CoinCard";
import CoinGraph from "../coin-graph/CoinGraph";
import "./CoinData.css";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";
import CoinAbout from "../coin-about/CoinAbout";

const CoinData = () => {
  const { coinId } = useParams();
  const apiKey = "CG-632iw4rgPBNwwSdgKgB2agfF";
  const [coinData, setCoinData] = useState({});
  const [modifier, setModifier] = useState("");
  const [graphData, setGraphData] = useState([]);
  const marketUrl = `https://api.coingecko.com/api/v3/coins/${coinId}`;
  const graphUrl = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=60`;

  useEffect(() => {
    axios
      .get(marketUrl)
      .then((res) => {
        setCoinData(res.data);
        console.log(res.data);
        setModifier(
          res.data.market_cap_rank < 20
            ? "rise"
            : res.data.market_cap_rank < 60
            ? "orange"
            : "fall"
        );
      })
      .catch((err) => console.log(err));

    axios
      .get(graphUrl)
      .then((res) => {
        setGraphData(
          res.data.prices.map((val) => ({ x: val[0], y: val[1].toFixed(2) }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const formatDate = (date) => {
    const apiDate = new Date(date);
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    return apiDate.toLocaleDateString("en-GB", options);
  };

  return (
    <div className="coin-data-container">
      <NavbarSimple />
      {Object.keys(coinData).length > 0 && Object.keys(graphData).length > 0 ? (
        <>
          <CoinCard
            id={coinData.id}
            symbol={coinData.symbol}
            img={coinData.image.large}
            price={coinData.market_data.current_price.usd.toLocaleString()}
            modifier={modifier}
            rank={coinData.market_cap_rank}
          />
          <div className="coin-stats-container">
            <div className="coin-stat-container">
              <h1 className="total-volume">{`Total Volume: ${coinData.market_data.total_volume.usd.toLocaleString()}`}</h1>
              <div className="coin-sentiment-container">
                <a href="#" className="price-change rise">
                  {coinData.sentiment_votes_up_percentage}%{" "}
                  <span>
                    <LuThumbsUp />
                  </span>
                </a>
                <a href="#" className="price-change fall">
                  {coinData.sentiment_votes_down_percentage}%
                  <span>
                    <LuThumbsDown />
                  </span>
                </a>
              </div>
            </div>

            <div className="coin-stat-container">
              <h1>Official Homepage:</h1>
              <a
                href={`${coinData.links.homepage[0]}`}
                target="_blank"
                className="coin-home-link"
              >
                {coinData.links.homepage[0]}
              </a>
            </div>

            <div className="coin-stat-container">
              <h1 className="ath-value">
                {`All Time High: $${coinData.market_data.ath.usd}`}{" "}
              </h1>
              <h3 className="ath-date">
                {formatDate(coinData.market_data.ath_date.gbp)}
              </h3>
            </div>

            <div className="coin-stat-container">
              <h1 className="atl-value">
                {`All Time Low: $${coinData.market_data.atl.usd}`}{" "}
              </h1>
              <h3 className="atl-date">
                {formatDate(coinData.market_data.atl_date.gbp)}
              </h3>
            </div>
          </div>

          <CoinGraph graphData={graphData} coinId={coinId} />
          <CoinAbout aboutData={coinData.description.en} />
        </>
      ) : (
        <div>
          <h1>Loading Data from Api...</h1>
        </div>
      )}
    </div>
  );
};

export default CoinData;
