import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import "./ToDashboard.css"
const ToDashboard = () => {
  const navigate = useNavigate()

  return (
    <div className="h-full-view">
      <Header />
      <div class="container-1 wallet">
        <p>Congratulations!</p>
        <div className='wallet-content liquidity mt-0 todb-layout'>
          <h4 className='mt-3'>You’re all set up!</h4>
        </div>
        <button class="next-btn ml-0" type="submit" onClick={() => {
          navigate("/dashboard")
        }}>Go To Dashboard</button>
      </div>
    </div>
  )
}

export default ToDashboard