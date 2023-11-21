import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/home/Home";
import CoinData from "./routes/coin-data/CoinData";

function App() {
  const [coins, setCoins] = useState([]);
  const [trending, setTrending] = useState([]);
  const [btc, setBtc] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setCoins(res.data);
        setBtc(res.data[0].current_price);
      })
      .catch((err) => console.log(err));

    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {
        setTrending(res.data.coins);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home coins={coins} trending={trending} btc={btc} />}
        />
        <Route path="/coin" element={<CoinData />}>
          <Route path=":coinId" element={<CoinData />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
