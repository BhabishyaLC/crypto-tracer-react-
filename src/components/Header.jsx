import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../Context'
import './Header.css'




function Header() {
    const navigate=useNavigate()

    const {currency,setCurrency }=CryptoState()


  
    
    
  return (
    <header>
        <h2 onClick={()=>navigate('/')}>Crypto News</h2>
       
        
        <div className="dropdown-container">
            <label htmlFor="currency-select">Select Currency:</label>
            <select id="currency-select" value={currency} onChange={(e)=>setCurrency(e.target.value)}>
                
                <option value={'INR'}>Indian Rupee (INR)</option>
                <option value={'USD'}>US Dollar (USD)</option>
            </select>
        </div>
    </header>
  )
}

export default Header