import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Trending from "../trending/Trending";
import Exchanges from "../exchanges/Exchanges";
import Pricing from "../pricing/Pricing";
import Footer from "../footer/Footer";

const Home = ({ coins, trending, btc }) => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      {trending.length > 0 && (
        <Trending trending={trending} btc={btc}></Trending>
      )}

      <Exchanges coins={coins}></Exchanges>
      <Pricing></Pricing>
      <Footer />
    </>
  );
};

export default Home;
