import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import "./LightningNode.css"
const LightningNode = () => {
  const navigate = useNavigate()

  return (
    <div className="h-full-view">
            <Header />
            <div class="container-2 ligtning_node">
                <p>Do you want your Lightning <br /> node to run on tor?</p>
                <div className='nxt_bck_btn mt-100'>
                    <button class="back-btn" type="submit" onClick={() => {
                    navigate("/seedphrase")
                }}>No</button>
                    <button class="next-btn" type="submit" onClick={() => {
                    navigate("/pswd")
                }}>Yes</button>
                </div>
            </div>
        </div>
  )
}

export default LightningNode