import React, { useEffect, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { useParams } from 'react-router-dom'
import '../components/Coin.css'
import { CryptoState } from '../Context'
import LineChart from './Chart'
function Coin() {
    const [data,setData]=useState(null)
    const {id}=useParams()
    const {currency,symbol}=CryptoState()
    const [historical,setHistorical]=useState([])

    const fetchCoinData=()=>{
      const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-qrPryzqLpsQsMcuZVj3UXQ1X'}
      };
      
      fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options)
        .then(response => response.json())
        .then(response => setData(response))
        .catch(err => console.error(err));
    }

    const fetchHistoricalData= async ()=>{
      const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-qrPryzqLpsQsMcuZVj3UXQ1X'}
      };
      
      fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=10&interval=daily`, options)
        .then(response => response.json())
        .then(response => setHistorical(response))
        .catch(err => console.error(err));
    }


    useEffect(()=>{
        fetchCoinData()
        fetchHistoricalData()
    },[currency])
  
  
    if(data && historical){
        return (
          <div className="main">
    <div className='coin'>
        <div className="coin_name">
          <img src={data?.image?.large} alt="" />
          <p className='id'>{data.name}</p>
          <p className='des'>{ReactHtmlParser(data?.description?.en.split(". ")[0]+'.')}</p>
          <div className="data">
          <p className='name'>Rank: {data.market_cap_rank}</p>
          <p className='name'>Current Price:{symbol}{data?.market_data.current_price[currency.toLowerCase()].toLocaleString()}</p>
          <p className='name'>Market Cap:{symbol}{data?.market_data.market_cap[currency.toLowerCase()].toLocaleString()}</p>
          </div>
        </div>
        </div>
        <div className="chart">
          <LineChart historical={historical}/>
        </div>
   
    </div>
  )
}
else{
  return(
    <div className='loader-container'>
      <div className="loader"></div>
    </div>
  )
}
}


export default Coin