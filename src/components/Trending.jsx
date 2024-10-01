import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CryptoState } from "../Context";
import "../components/Trending.css";

function Trending() {
  const { currency, symbol } = CryptoState();
  const [trending, setTrending] = useState([]);
 

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`,
        {
          headers: { "x-cg-demo-api-key": "CG-qrPryzqLpsQsMcuZVj3UXQ1X" },
        }
      )
      .then((res) =>setTrending(res.data))
      .catch((err) => console.log(err));
  });

  

 
  return (
    <section className="currencies">
      <div className="container">
        <h2 className="section-title">Top Cryptocurrencies</h2>
        <div className="currency-cards">
          <Link className="currency-card">
            {trending?.slice(0, 1).map((value, index) => {
              return (
                <div key={index}>
                  <h3>
                    {value.name}
                    <img src={value.image} alt="" />
                  </h3>

                  <p>
                    Price: {symbol} {value.current_price.toLocaleString()}
                  </p>
                  <p>
                    Market Cap:{symbol} {value.market_cap.toLocaleString()}
                  </p>
                  <p>Market Rank: {value.market_cap_rank}</p>
                </div>
              );
            })}
          </Link>
          <Link className="currency-card">
            {trending?.slice(1, 2).map((value, index) => {
              return (
                <div key={index}>
                  <h3>
                    {value.name}
                    <img src={value.image} alt="" />
                  </h3>

                  <p>
                    Price: {symbol} {value.current_price.toLocaleString()}
                  </p>
                  <p>
                    Market Cap:{symbol} {value.market_cap.toLocaleString()}
                  </p>
                  <p>Market Rank: {value.market_cap_rank}</p>
                </div>
              );
            })}
          </Link>
          <Link className="currency-card">
          {trending?.slice(2, 3).map((value, index) => {
              return (
                <div key={index}>
                  <h3>
                    {value.name}
                    <img src={value.image} alt="" />
                  </h3>

                  <p>
                    Price: {symbol} {value.current_price.toLocaleString()}
                  </p>
                  <p>
                    Market Cap:{symbol} {value.market_cap.toLocaleString()}
                  </p>
                  <p>Market Rank: {value.market_cap_rank}</p>
                </div>
              );
            })}
          </Link>
          <Link className="currency-card">
          {trending?.slice(3, 4).map((value, index) => {
              return (
                <div key={index}>
                  <h3>
                    {value.name}
                    <img src={value.image} alt="" />
                  </h3>

                  <p>
                    Price: {symbol} {value.current_price.toLocaleString()}
                  </p>
                  <p>
                    Market Cap:{symbol} {value.market_cap.toLocaleString()}
                  </p>
                  <p>Market Rank: {value.market_cap_rank}</p>
                </div>
              );
            })}
          </Link>
        </div>
      
      </div>
    </section>
  );
}

export default Trending;
