import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../components/Currencies.css";
import { CryptoState } from "../Context";
function Currencies() {
  
  const { currency, symbol } = CryptoState();
  const [coin, setCoins] = useState([]); // Stores the original list of coins from the API
  const [search, setSearch] = useState(""); // Stores the user's search input
  const [filteredCoins, setFilteredCoins] = useState([]); // Stores the filtered list of coins
  
  useEffect(() => {
    // Fetch coin data from API on component mount
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`,
        {
          headers: { "x-cg-demo-api-key": "CG-qrPryzqLpsQsMcuZVj3UXQ1X" },
        }
      )
      .then((res) => {
        setCoins(res.data);
        setFilteredCoins(res.data); // Initialize filteredCoins with the full coin list
      })
      .catch((err) => console.log(err));
  }, [currency]); // Update when the `currency` prop changes

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if(e.target.value=='')
    {
      setFilteredCoins(coin)
    }
  };

  const setButton = (e) => {
    e.preventDefault();
    

    // Filter coins based on the search term
    const filteredData = coin.filter((item) =>
      item.id.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredCoins(filteredData); // Update filteredCoins without affecting the original coins list
  };

  return (
    <div className="crypto-table">
      <form className="search-container" onSubmit={setButton}>
        <input
          type="text"
          placeholder="Search Crypto Currency"
          className="search-input"
          onChange={handleSearch}
          value={search}
          required
        />
        <button className="search-btn" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.242 1.656a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
          </svg>
        </button>
      </form>

      <div className="table-layout">
        <p>SN</p>
        <p>Currency</p>
        <p>Price</p>
        <p style={{textAlign:'center'}}>24H change</p>
        <p>Market Cap</p>
      </div>
      {filteredCoins?.slice(0, 10).map((item, index) => (
        <Link to={`/coin/${item.id}`}  className="table-layout" key={index}>
          <p>{item.market_cap_rank}</p>
          <div>
            <img src={item.image} alt="" />
            <p>{item.name + "-" + item.symbol}</p>
          </div>
          <p>
            {symbol}
            {item.current_price.toLocaleString()}
          </p>
          <p >
            {(Math.floor(item.price_change_percentage_24h * 100) / 100 )>= 0 ? (
              <p  style={{color:'rgb(8,255,8)'}}>
                {Math.floor(item.price_change_percentage_24h * 100) / 100}
              </p>
            ) : (
              <p style={{color:'red'}}>
                {Math.floor(item.price_change_percentage_24h * 100) / 100}
              </p>
            )}
          </p>
          <p>{item.market_cap.toLocaleString()}</p>
        </Link>
      ))}
    </div>
  );
}

export default Currencies;
